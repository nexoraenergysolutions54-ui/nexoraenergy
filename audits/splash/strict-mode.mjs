import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
const require=createRequire(process.env.AUDIT_TOOL_ROOT+'/package.json');
const browser=await require('puppeteer-core').launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
try {
 const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5180/',{waitUntil:'networkidle0'});
 await page.waitForFunction(()=>!document.documentElement.hasAttribute('data-nexora-splash'));
 const result=await page.evaluate(async()=>{const m=await import('/src/__tests__/site-splash.harness.tsx');return {normal:await m.probeStrictMode(),unmount:await m.probeStrictMode(true)};});
 console.log(JSON.stringify({result,errors}));
 assert.deepEqual(result.normal,{activeAfterReplay:true,released:true,overflowPreserved:true});
 assert.deepEqual(result.unmount,{activeAfterReplay:true,released:true,overflowPreserved:true});
 assert.equal(errors.length,0);
}finally {await browser.close();}

