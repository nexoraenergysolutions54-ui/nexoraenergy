import assert from "node:assert/strict";
import test from "node:test";
import vm from "node:vm";
import {
  SPLASH_ATTRIBUTE,
  SPLASH_BOOTSTRAP,
  SPLASH_EXIT_MS,
  SPLASH_FINISHED_EVENT,
  SPLASH_MAXIMUM_MS,
  SPLASH_MINIMUM_MS,
  SPLASH_SESSION_KEY,
  type SplashController,
} from "../lib/site-splash.ts";

function browser({ seen = false, blocked = false, reduced = false } = {}) {
  let now = 0;
  let timerId = 0;
  const attributes = new Map<string, string>();
  const storage = new Map<string, string>(seen ? [[SPLASH_SESSION_KEY, "1"]] : []);
  const timers = new Map<number, { callback: () => void; due: number }>();
  const window = new EventTarget() as EventTarget & { __nexoraSplash?: SplashController };
  let finished = 0;
  window.addEventListener(SPLASH_FINISHED_EVENT, () => finished++);
  const context = {
    window,
    Event,
    document: {
      documentElement: {
        setAttribute: (key: string, value: string) => attributes.set(key, value),
        removeAttribute: (key: string) => attributes.delete(key),
      },
    },
    sessionStorage: {
      getItem: (key: string) => {
        if (blocked) throw new Error("Blocked");
        return storage.get(key);
      },
      setItem: (key: string, value: string) => {
        if (blocked) throw new Error("Blocked");
        storage.set(key, value);
      },
    },
    matchMedia: () => ({ matches: reduced }),
    performance: { now: () => now },
    setTimeout: (callback: () => void, delay: number) => {
      timers.set(++timerId, { callback, due: now + delay });
      return timerId;
    },
    clearTimeout: (id: number) => timers.delete(id),
  };
  return {
    attributes,
    storage,
    timers,
    window,
    get finished() {
      return finished;
    },
    run: () => vm.runInNewContext(SPLASH_BOOTSTRAP, context),
    advance: (ms: number) => {
      now += ms;
      for (const [id, timer] of timers)
        if (timer.due <= now) {
          timers.delete(id);
          timer.callback();
        }
    },
  };
}

test("first entry starts once and marks only session storage", () => {
  const b = browser();
  b.run();
  assert.equal(b.attributes.get(SPLASH_ATTRIBUTE), "active");
  assert.equal(b.storage.get(SPLASH_SESSION_KEY), "1");
  const controller = b.window.__nexoraSplash;
  b.run();
  assert.equal(b.window.__nexoraSplash, controller);
  assert.equal(b.timers.size, 1);
});

test("seen tab skips; a fresh tab can display", () => {
  const seen = browser({ seen: true });
  seen.run();
  assert.equal(seen.attributes.size, 0);
  assert.equal(seen.timers.size, 0);
  const fresh = browser();
  fresh.run();
  assert.equal(fresh.attributes.size, 1);
});

test("blocked storage degrades to one display per document without trapping", () => {
  const b = browser({ blocked: true });
  b.run();
  assert.equal(b.attributes.size, 1);
  b.advance(SPLASH_MAXIMUM_MS);
  assert.equal(b.attributes.size, 0);
  assert.equal(b.finished, 1);
});

test("reduced motion skips animation and records this session", () => {
  const b = browser({ reduced: true });
  b.run();
  assert.equal(b.attributes.size, 0);
  assert.equal(b.timers.size, 0);
  assert.equal(b.storage.get(SPLASH_SESSION_KEY), "1");
});

test("independent hard deadline releases the page even without React", () => {
  const b = browser();
  b.run();
  b.advance(SPLASH_MAXIMUM_MS - 1);
  assert.equal(b.attributes.size, 1);
  b.advance(1);
  assert.equal(b.attributes.size, 0);
  assert.equal(b.timers.size, 0);
  assert.equal(b.window.__nexoraSplash?.finished, true);
});

test("early exit is idempotent and removes timeout and pagehide listener", () => {
  const b = browser();
  b.run();
  b.window.__nexoraSplash?.finish();
  assert.equal(b.timers.size, 0);
  b.window.dispatchEvent(new Event("pagehide"));
  b.advance(5000);
  assert.equal(b.finished, 1);
});

test("pagehide releases the splash for browser history restoration", () => {
  const b = browser();
  b.run();
  b.window.dispatchEvent(new Event("pagehide"));
  assert.equal(b.attributes.size, 0);
  assert.equal(b.timers.size, 0);
});

test("normal and fallback timings stay within the requested limits", () => {
  assert(SPLASH_MINIMUM_MS + SPLASH_EXIT_MS >= 700);
  assert(SPLASH_MINIMUM_MS + SPLASH_EXIT_MS <= 1000);
  assert(SPLASH_MAXIMUM_MS <= 1500);
});
