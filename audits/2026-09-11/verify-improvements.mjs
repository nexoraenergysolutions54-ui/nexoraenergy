import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(process.env.AUDIT_TOOL_ROOT+'/package.json');
const puppeteer=require('puppeteer-core');
const browser=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const base='http://127.0.0.1:4173';
const routes=[...fs.readFileSync('public/sitemap.xml','utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>new URL(m[1]).pathname);
const results=[];const errors=[];
try{
 const page=await browser.newPage();
 page.on('pageerror',e=>errors.push(e.message));
 await page.setViewport({width:390,height:844,deviceScaleFactor:1});
 for(const route of routes){
  const response=await page.goto(base+route,{waitUntil:'networkidle0'});
  const result=await page.evaluate(()=>({canonical:[...document.querySelectorAll('link[rel="canonical"]')].map(e=>e.href),h1:document.querySelectorAll('h1').length,overflow:document.documentElement.scrollWidth>innerWidth,oldContact:/0000 0000|info@nexora-energy|3311 0000/.test(document.body.textContent),forms:[...document.forms].map(f=>[...f.querySelectorAll('input,textarea,select')].every(e=>e.name&&e.labels.length))}));
  assert.equal(response.status(),200,route);assert.equal(result.canonical.length,1,route);assert.equal(result.canonical[0],'https://www.nexoraqa.com'+route,route);assert.equal(result.h1,1,route);assert.equal(result.overflow,false,route);assert.equal(result.oldContact,false,route);assert(result.forms.every(Boolean),route);
  results.push({route,...result});
 }
 for(const kind of ['contact','manpower','products','careers']){
  await page.goto(base+'/'+kind,{waitUntil:'networkidle0'});
  assert.equal(await page.$eval('form',f=>f.checkValidity()),false,'empty form must be invalid');
  await page.type('input[name="Name"]','Audit Test');await page.type('input[name="Email"]','audit@example.com');
  await page.type(kind==='careers'?'input[name="Discipline"]':'input[name="Company"]','Engineering');
  await page.select('select[name="Country"]','Qatar');
  await page.type('textarea[name="Details"]','Test requirement for five engineers; this draft will not be sent.');
  await page.click('button[type="submit"]');await page.waitForSelector('section[aria-label="Email draft"]');
  const href=await page.$eval('section[aria-label="Email draft"] a',e=>e.href);
  assert(href.startsWith('mailto:sales@nexoraqa.com?'));assert(decodeURIComponent(href).includes('Audit Test'));
  await page.type('input[name="Name"]',' updated');assert.equal(await page.$('section[aria-label="Email draft"]'),null,'edited fields clear stale draft');
  console.log(kind+': validation, draft, recipient and draft reset passed');
 }
 await page.goto(base+'/news',{waitUntil:'networkidle0'});await page.click('details summary');assert.equal(await page.$eval('details',e=>e.open),true);
 await page.goto(base,{waitUntil:'networkidle0'});assert.equal(await page.$eval('#mobile-navigation',e=>e.inert),true);
 await page.click('[aria-controls="mobile-navigation"]');assert.equal(await page.$eval('#mobile-navigation',e=>e.inert),false);await page.keyboard.press('Escape');assert.equal(await page.$eval('#mobile-navigation',e=>e.inert),true);
 for(const route of ['/','/contact']){
  await page.goto(base+route,{waitUntil:'networkidle0'});await page.screenshot({path:`audits/2026-09-11/improved-${route==='/'?'home':'contact'}-mobile.png`});
 }
 await page.setViewport({width:1440,height:1000});await page.goto(base,{waitUntil:'networkidle0'});await page.screenshot({path:'audits/2026-09-11/improved-home-desktop.png'});
 await page.setJavaScriptEnabled(false);await page.goto(base,{waitUntil:'networkidle0'});assert.equal(await page.$eval('h1',e=>getComputedStyle(e).opacity),'1');
 assert.equal(errors.length,0,errors.join('\n'));console.log('All 27 routes, canonical URLs, forms, news, mobile navigation and no-JS heading checks passed.');
}finally{fs.writeFileSync('audits/2026-09-11/improved-browser-checks.json',JSON.stringify({results,errors},null,2));await browser.close();}

