import fs from "node:fs";
import { createRequire } from "node:module";
const require = createRequire(process.env.AUDIT_TOOL_ROOT + "/package.json");
const puppeteer = require("puppeteer-core");
const base = "https://www.nexoraqa.com";
const routes = [...fs.readFileSync("public/sitemap.xml", "utf8").matchAll(/<loc>(.*?)<\/loc>/g)].map(m => new URL(m[1]).pathname);
const browser = await puppeteer.launch({executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true});
const results = [];
try {
  const page = await browser.newPage();
  await page.setViewport({width: 390, height: 844, deviceScaleFactor: 1});
  for (const route of routes) {
    try {
      const response = await page.goto(base + route, {waitUntil: "domcontentloaded", timeout: 45000});
      const data = await page.evaluate(() => ({
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content,
        canonicals: [...document.querySelectorAll('link[rel="canonical"]')].map(e => e.href),
        h1: [...document.querySelectorAll('h1')].map(e => e.textContent),
        headings: [...document.querySelectorAll('h2,h3')].map(e => e.textContent),
        text: document.querySelector('main')?.innerText || document.body.innerText,
        links: [...document.querySelectorAll('a')].map(e => ({text:e.textContent.trim() || e.getAttribute('aria-label'), href:e.href})),
        forms: [...document.forms].map(f => ({action:f.getAttribute('action'), method:f.method, fields:[...f.querySelectorAll('input,textarea,select')].map(e=>({type:e.type,name:e.name,required:e.required,labelCount:e.labels?.length}))})),
        overflow: document.documentElement.scrollWidth > innerWidth,
        images: [...document.images].map(e=>({src:e.currentSrc || e.src,loading:e.loading,alt:e.getAttribute('alt')})),
      }));
      results.push({route,status:response.status(),...data});
      console.log(route, response.status(), data.h1.length, data.overflow);
    } catch(e) { results.push({route,error:e.message}); console.log(route,e.message); }
  }
  for (const route of ["/","/contact","/careers","/services/shutdown-support"]) {
    await page.goto(base + route, {waitUntil:"networkidle2",timeout:60000});
    await page.screenshot({path:`audits/2026-09-11/${route === '/' ? 'home' : route.replaceAll('/','-').slice(1)}-mobile.png`,fullPage:false});
  }
} finally {
  fs.writeFileSync("audits/2026-09-11/content-crawl.json", JSON.stringify(results,null,2));
  await browser.close();
}
