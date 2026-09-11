import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(process.env.AUDIT_TOOL_ROOT+'/package.json');
const browser=await require('puppeteer-core').launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const base='http://127.0.0.1:4173';
const results=[];const errors=[];
async function makePage(options={}) {
 const page=await browser.newPage();page.on('pageerror',e=>errors.push(e.message));
 await page.setViewport({width:options.width||390,height:options.height||844,deviceScaleFactor:options.dpr||1});
 if(options.reduced)await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);
 await page.evaluateOnNewDocument((options)=>{
  window.splashAudit={activations:0,finishedAt:null,shifts:[]};
  new MutationObserver(records=>{for(const r of records)if(r.attributeName==='data-nexora-splash'&&document.documentElement.hasAttribute('data-nexora-splash'))window.splashAudit.activations++;}).observe(document,{subtree:true,attributes:true});
  window.addEventListener('nexora:splash-finished',()=>window.splashAudit.finishedAt=performance.now());
  new PerformanceObserver(list=>{for(const e of list.getEntries())if(!e.hadRecentInput)window.splashAudit.shifts.push({value:e.value,time:e.startTime});}).observe({type:'layout-shift',buffered:true});
  if(options.blocked)Object.defineProperty(window,'sessionStorage',{get(){throw new Error('Storage blocked for test');}});
 },options);
 return page;
}
async function waitExit(page){await page.waitForFunction(()=>!document.documentElement.hasAttribute('data-nexora-splash'));return page.evaluate(()=>({active:window.splashAudit.activations,duration:window.splashAudit.finishedAt-window.__nexoraSplash.startedAt,shifts:window.splashAudit.shifts,overflow:document.documentElement.scrollWidth>innerWidth,dom:!!document.querySelector('.site-splash')}));}
try {
 for(const width of [320,375,390,430,768,1440,1920]){
  const page=await makePage({width,height:width>=768?1000:844,dpr:width===390?3:1});
  const response=await page.goto(base,{waitUntil:'domcontentloaded'});
  const html=await response.text();assert(html.includes('<h1'));assert(html.includes('application/ld+json'));
  await page.waitForSelector('.site-splash__logo');
  const initial=await page.evaluate(()=>{
   const splash=document.querySelector('.site-splash'),logo=document.querySelector('.site-splash__logo'),ring=document.querySelector('.site-splash__ring');
   const lr=logo.getBoundingClientRect(),rr=ring.getBoundingClientRect();
   return {active:document.documentElement.hasAttribute('data-nexora-splash'),hidden:splash.getAttribute('aria-hidden'),bg:getComputedStyle(splash).backgroundColor,logoWidth:lr.width,logoHeight:lr.height,logoLeft:lr.left,ringWidth:rr.width,ringLeft:rr.left,logoAnimation:getComputedStyle(logo).animationName,ringAnimation:getComputedStyle(ring).animationName,bodyOverflow:getComputedStyle(document.body).overflow,focus:document.activeElement.tagName};
  });
  assert(initial.active,'splash visible at first DOM paint');assert.equal(initial.hidden,'true');assert.equal(initial.bodyOverflow,'hidden');assert.equal(initial.focus,'BODY');assert(initial.logoLeft>=0);assert(initial.logoWidth<=width-32);
  // Preserve deliberate inline overflow state without modifying it on dismissal.

  await page.mouse.wheel({deltaY:400});assert.equal(await page.evaluate(()=>scrollY),0);
  if([390,1440].includes(width))await page.screenshot({path:`audits/splash/splash-${width}.png`});
  const final=await waitExit(page);assert(final.duration>=700&&final.duration<=1500,JSON.stringify(final));assert.equal(final.overflow,false);
  assert.notEqual(await page.evaluate(()=>getComputedStyle(document.body).overflow),'hidden');
  await page.waitForFunction(()=>!document.querySelector('.site-splash'));
  await page.evaluate(()=>{document.body.style.overflow='';document.documentElement.style.overflowY='';});
  const start=await page.evaluate(()=>window.__nexoraSplash.startedAt);
  await page.click('footer a[href="/about"]');await page.waitForFunction(()=>location.pathname==='/about');
  assert.equal(await page.evaluate(()=>window.__nexoraSplash.startedAt),start);assert.equal(await page.$('.site-splash'),null);
  await page.click('a[aria-label="Nexora Energy Solutions - Home"]');await page.waitForFunction(()=>location.pathname==='/');assert.equal(await page.$('.site-splash'),null);
  await page.reload({waitUntil:'networkidle0'});assert.equal(await page.evaluate(()=>window.splashAudit.activations),0);assert.equal(await page.$('.site-splash'),null);
  results.push({width,initial,final,internalNavigation:true,homeReturn:true,refreshSkipped:true});console.log('viewport',width,Math.round(final.duration),'ms');await page.close();
 }
 const reduced=await makePage({reduced:true});await reduced.goto(base,{waitUntil:'networkidle0'});assert.equal(await reduced.evaluate(()=>window.splashAudit.activations),0);assert.equal(await reduced.$('.site-splash'),null);results.push({reducedMotion:'skipped'});await reduced.close();
 const blocked=await makePage({blocked:true});await blocked.goto(base,{waitUntil:'domcontentloaded'});await waitExit(blocked);await blocked.reload({waitUntil:'domcontentloaded'});assert.equal(await blocked.evaluate(()=>document.documentElement.hasAttribute('data-nexora-splash')),true);await waitExit(blocked);results.push({blockedStorage:'safe; refresh may replay'});await blocked.close();
 const failed=await makePage();await failed.setRequestInterception(true);failed.on('request',r=>r.resourceType()==='script'?r.abort():r.continue());await failed.goto(base,{waitUntil:'domcontentloaded'});const failure=await waitExit(failed);assert(failure.duration<=1500);assert.equal(await failed.$eval('.site-splash',e=>getComputedStyle(e).display),'none');assert.notEqual(await failed.evaluate(()=>getComputedStyle(document.body).overflow),'hidden');results.push({failedHydration:failure});await failed.close();
 const noJs=await makePage();await noJs.setJavaScriptEnabled(false);await noJs.goto(base,{waitUntil:'domcontentloaded'});assert.equal(await noJs.$eval('.site-splash',e=>getComputedStyle(e).display),'none');assert(await noJs.$('h1'));results.push({javascriptDisabled:'content present; overlay hidden'});await noJs.close();
 const keyboard=await makePage();await keyboard.goto(base,{waitUntil:'domcontentloaded'});await keyboard.keyboard.press('Tab');await keyboard.waitForFunction(()=>!document.documentElement.hasAttribute('data-nexora-splash'));assert.equal(await keyboard.evaluate(()=>document.activeElement.closest('.site-splash')),null);results.push({keyboard:'immediate dismissal; focus remains on page'});await keyboard.close();
 assert.equal(errors.length,0,errors.join('\n'));
}finally{fs.writeFileSync('audits/splash/browser-results.json',JSON.stringify({results,errors},null,2));await browser.close();}

