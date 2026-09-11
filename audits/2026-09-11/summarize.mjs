import fs from "node:fs";
const dir = "audits/2026-09-11";
const crawl = JSON.parse(fs.readFileSync(`${dir}/content-crawl.json`));
const summaries = fs.readdirSync(dir).filter(n => n.endsWith('.report.json')).map(file => {
  const r = JSON.parse(fs.readFileSync(`${dir}/${file}`));
  return {file,url:r.finalDisplayedUrl,date:r.fetchTime,version:r.lighthouseVersion,
    categories:Object.fromEntries(Object.entries(r.categories).map(([k,v])=>[k,v.score*100])),
    metrics:Object.fromEntries(['first-contentful-paint','largest-contentful-paint','total-blocking-time','cumulative-layout-shift','speed-index','total-byte-weight'].map(k=>[k,{value:r.audits[k].numericValue,display:r.audits[k].displayValue}])),
    warnings:r.runWarnings,
    failures:Object.values(r.audits).filter(a=>a.score!==null && a.score<0.9).map(a=>({id:a.id,display:a.displayValue})),
  };
});
const known = new Set(crawl.map(p=>p.route));
const unknownLinks = [...new Set(crawl.flatMap(p=>p.links || []).map(l=>l.href).filter(h=>h.startsWith('https://www.nexoraqa.com/')).filter(h=>!known.has(new URL(h).pathname)))];
const result = {lighthouse:summaries,pages:crawl.length,non200:crawl.filter(p=>p.status!==200),duplicateCanonicals:crawl.filter(p=>p.canonicals?.length!==1).map(p=>({route:p.route,canonicals:p.canonicals})),unknownLinks,forms:crawl.filter(p=>p.forms?.length).map(p=>({route:p.route,forms:p.forms})),duplicateTitles:crawl.filter((p,i)=>crawl.some((q,j)=>j<i&&q.title===p.title)).map(p=>p.route)};
fs.writeFileSync(`${dir}/summary.json`,JSON.stringify(result,null,2));
console.log(JSON.stringify({...result,forms:result.forms.map(p=>({route:p.route,fields:p.forms.flatMap(f=>f.fields).length,unnamed:p.forms.flatMap(f=>f.fields).filter(f=>!f.name).length,unlabelled:p.forms.flatMap(f=>f.fields).filter(f=>!f.labelCount).length}))},null,2));
