import fs from 'node:fs';
import sharp from 'sharp';
import {createHash} from 'node:crypto';
const records=JSON.parse(fs.readFileSync('audits/collaboration-logos/approved-sources.json','utf8'));
const selected=records.filter(r=>!r.error&&r.id!=='al-balagh');
const mannai=selected.find(r=>r.id==='mannai');
mannai.file='audits/collaboration-logos/sources/mannaiword.png';
mannai.url='https://mannai.com/wp-content/uploads/2017/05/manni-png.png';
if(fs.existsSync('audits/collaboration-logos/sources/abb.svg'))selected.push({id:'abb',file:'audits/collaboration-logos/sources/abb.svg',url:'https://brand.abb/etc.clientlibs/brandportal/clientlibs/clientlib-site/resources/images/ABBLogo.svg'});
const installed=[];
for(const r of selected){
 const raw=fs.readFileSync(r.file);let ext='webp';let info;
 if(r.file.endsWith('.svg')){
  const text=raw.toString();
  if(/<\s*(?:script|foreignObject|image|use|iframe|style|a)\b|\bon\w+\s*=|(?:href|url\s*\((?!#)|<!ENTITY)/i.test(text))throw Error('Unsafe SVG requires review: '+r.id);
  const tags=[...text.matchAll(/<\/?([\w:-]+)/g)].map(m=>m[1]);
  if(tags.some(t=>!['svg','g','path','rect','title','desc','polygon','circle','defs','clipPath','mask'].includes(t)))throw Error('Review SVG elements: '+r.id);
  if(!/viewBox=/.test(text))throw Error('Missing viewBox');
  ext='svg';fs.writeFileSync(`public/images/collaborations/${r.id}.svg`,raw);info=await sharp(raw).metadata();
 }else{
  info=await sharp(raw).resize({width:r.id==='qatarenergy'?400:720,withoutEnlargement:true}).webp({lossless:true}).toFile(`public/images/collaborations/${r.id}.webp`);
 }
 const logo=`/images/collaborations/${r.id}.${ext}`;const bytes=fs.readFileSync('public'+logo);
 installed.push({id:r.id,source:r.url,logo,logoWidth:info.width,logoHeight:info.height,bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')});
}
let source=fs.readFileSync('src/lib/collaborations.ts','utf8').replace(/\r\n/g,'\n');
// Update only existing object entries, preserving IDs, names and source list order.
source=source.replace(/  \{\n[\s\S]*?\n  \},/g,block=>{
 const id=block.match(/id: "([^"]+)"/)?.[1];
 const item=installed.find(r=>r.id===id);
 block=block.replace('permission: "awaiting-client-approval"','permission: "approved"');
 if(!item)return block;
 block=block.replace(/\n    logo(?:Width|Height)?: [^\n]+,/g,'');
 block=block.replace(/status: "[^"]+"/,'status: "verified"');
 return block.replace(/\n  \},$/,`\n    logo: "${item.logo}",\n    logoWidth: ${item.logoWidth},\n    logoHeight: ${item.logoHeight},\n  },`);
});
fs.writeFileSync('src/lib/collaborations.ts',source);
fs.writeFileSync('audits/collaboration-logos/installed-approved.json',JSON.stringify(installed,null,2));console.log(installed);
