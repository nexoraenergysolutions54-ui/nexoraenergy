import fs from 'node:fs';
const sites={qatarenergy:'https://www.qatarenergy.qa/', 'qatarenergy-lng':'https://www.qatarenergylng.qa/english',qafac:'https://www.qafac.com.qa/',qafco:'https://www.qafco.qa/en/',milaha:'https://www.milaha.com/',mannai:'https://mannai.com/',abb:'https://www.abb.com/', 'al-balagh':'https://www.albalagh.com/',qapco:'https://qapco.com/',qatalum:'https://www.qatalum.com/brand-center/',dopet:'https://www.dopet.com/'};
const results=await Promise.all(Object.entries(sites).map(async([id,url])=>{
 try {const r=await fetch(url,{signal:AbortSignal.timeout(25000)}); const html=await r.text();
 const images=[...html.matchAll(/<img\b[^>]*>/gi)].map(m=>m[0]).filter(x=>/logo/i.test(x));
 const links=[...html.matchAll(/(?:src|href)=["']([^"']*(?:logo|Logo|LOGO)[^"']*)["']/g)].map(m=>m[1]);
 return {id,url:r.url,status:r.status,images,links};
 }catch(e){return {id,url,error:e.message};}
}));
fs.writeFileSync('audits/collaboration-logos/official-discovery.json',JSON.stringify(results,null,2));
console.log(JSON.stringify(results,null,2));
