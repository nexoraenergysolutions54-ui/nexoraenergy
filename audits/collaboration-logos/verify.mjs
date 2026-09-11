import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {collaborations} from '../../src/lib/collaborations.ts';
const require=createRequire(process.env.AUDIT_TOOL_ROOT+'/package.json');
assert.equal(collaborations.length,27);
assert.equal(new Set(collaborations.map(o=>o.id)).size,27);
assert.equal(new Set(collaborations.map(o=>o.name)).size,27);
assert.deepEqual(collaborations.map(o=>o.displayOrder),Array.from({length:27},(_,i)=>i+1));
for(const o of collaborations){
 assert.equal(o.alt,o.name+' logo');
 if(o.logo){assert.equal(o.status,'verified');assert(o.logo.startsWith('/images/collaborations/'));assert(fs.existsSync('public'+o.logo));assert(o.logoWidth&&o.logoHeight);}
 else assert.notEqual(o.status,'verified');
}
const browser=await require('puppeteer-core').launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const results=[];const errors=[];
try {
 for(const width of [320,375,390,430,768,1024,1440,1920]){
  for(const route of ['/','/about#collaborations']){
   const page=await browser.newPage();
   page.on('pageerror',e=>errors.push(e.message));
   await page.setViewport({width,height:1000,deviceScaleFactor:width===390?2:1});
   await page.evaluateOnNewDocument(()=>{sessionStorage.setItem('nexora:splash-seen','1');window.logoShifts=[];new PerformanceObserver(list=>{for(const e of list.getEntries())if(!e.hadRecentInput)window.logoShifts.push(e.value);}).observe({type:'layout-shift',buffered:true});});
   await page.goto('http://127.0.0.1:4173'+route,{waitUntil:'networkidle0'});
   // Locate the section from its exact heading, independent of page layout wrappers.
   await page.evaluate(()=>{const h=[...document.querySelectorAll('h2')].find(e=>e.textContent.trim()==='Organizations We Have Collaborated With');h.closest('section').setAttribute('data-audit-collaborations','');});
   const section=await page.$('[data-audit-collaborations]');
   await section.evaluate(e=>e.scrollIntoView({behavior:'instant',block:'start'}));
   await page.waitForFunction(()=>[...document.querySelectorAll('[data-audit-collaborations] img')].every(i=>i.complete&&i.naturalWidth>0));
   await new Promise(r=>setTimeout(r,400));
   const result=await section.evaluate(e=>({
    count:e.querySelectorAll('li').length,
    columns:getComputedStyle(e.querySelector('ul')).gridTemplateColumns.split(' ').length,
    names:[...e.querySelectorAll('li')].map(li=>li.querySelector('img')?.alt.replace(/ logo$/,'')||li.textContent.trim()),
    images:[...e.querySelectorAll('img')].map(i=>({alt:i.alt,loading:i.loading,width:i.width,height:i.height,filter:getComputedStyle(i).filter,src:i.getAttribute('src')})),
    overflow:document.documentElement.scrollWidth>innerWidth,
    top:e.getBoundingClientRect().top,
    headerBottom:document.querySelector('header')?.getBoundingClientRect().bottom || 80,
    slots:[...e.querySelectorAll('li>div')].map(i=>i.getBoundingClientRect().height),
    animations:e.getAnimations({subtree:true}).filter(a=>a.playState==='running').length,
    shifts:window.logoShifts,
    transfer:performance.getEntriesByType('resource').filter(r=>r.name.includes('/images/collaborations/')).map(r=>({name:r.name,transferSize:r.transferSize,encodedBodySize:r.encodedBodySize})),
   }));
   assert.equal(result.count,route==='/'?12:27);assert.equal(result.overflow,false);assert.equal(result.animations,0);
   assert.deepEqual(result.names,collaborations.slice(0,route==='/'?12:27).map(o=>o.name));
   assert(result.slots.every(h=>h===96));assert.equal(result.images.length,1);assert.equal(result.images[0].filter,'none');
   if(route!=='/')assert(result.top>=result.headerBottom,`anchor clears sticky header; actual=${result.top}; header=${result.headerBottom}`);
   if([390,1440].includes(width))await section.screenshot({path:`audits/collaboration-logos/${route==='/'?'home':'about'}-${width}.png`});
   results.push({width,route,...result});await page.close();
  }
 }
 const page=await browser.newPage();
 await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);
 await page.setViewport({width:720,height:900,deviceScaleFactor:2});
 await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle0'});
 await page.click('main a[href="/about#collaborations"]');
 await page.waitForFunction(()=>location.hash==='#collaborations');
 await new Promise(r=>setTimeout(r,500));
 assert.equal(await page.$eval('#collaborations ul',e=>e.children.length),27);
 assert.equal(await page.$eval('#collaborations',e=>e.getAnimations({subtree:true}).filter(a=>a.playState==='running').length),0);
 // Chromium page zoom equivalent: half the CSS viewport with the same device-pixel width.
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
 results.push({reducedMotion:true,halfWidthZoomLayout:true,anchorLink:true});
 await page.close();assert.equal(errors.length,0,errors.join('\n'));
}finally{fs.writeFileSync('audits/collaboration-logos/browser-results.json',JSON.stringify({results,errors},null,2));await browser.close();}
console.log('27 unique dataset entries; 16 responsive route checks; reduced motion and anchor passed.');
