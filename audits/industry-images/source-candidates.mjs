import fs from 'node:fs';
const pages={oil:'https://unsplash.com/photos/industrial-oil-refinery-complex-under-a-clear-blue-sky-gZbjx2K7s9I',petrochemical:'https://unsplash.com/photos/vast-industrial-complex-with-pipes-tanks-and-buildings-9KeG7W4cI5U',pipeline:'https://unsplash.com/photos/a-bunch-of-pipes-that-are-connected-to-each-other-gGdV6_X0x64',lng:'https://www.pexels.com/photo/aerial-view-of-a-gas-tanker-anchored-in-a-gas-terminal-24244231/',manufacturing:'https://www.pexels.com/fr-fr/photo/homme-faisant-des-travaux-de-soudure-3181187/',epc:'https://www.pexels.com/photo/construction-site-with-engineers-discussing-plans-29197533/'};
fs.mkdirSync('audits/industry-images/candidates',{recursive:true});
const results=await Promise.all(Object.entries(pages).map(async([id,page])=>{
 try{const r=await fetch(page,{signal:AbortSignal.timeout(25000)});const html=await r.text();
 const tag=html.match(/<meta[^>]*(?:property|name)=["']og:image["'][^>]*>/i)?.[0];
 const image=tag?.match(/content=["']([^"']+)/)?.[1]?.replace(/&amp;/g,'&');
 return{id,page,status:r.status,image};}catch(e){return{id,page,error:e.message}}
}));fs.writeFileSync('audits/industry-images/candidates.json',JSON.stringify(results,null,2));console.log(results);
