import fs from 'node:fs';
import sharp from 'sharp';
const sources={
 qatarenergy:'https://www.qatarenergy.qa/Style%20Library/QPRevamp2021/imgs/QP%20logo%20vertical-big.jpg',
 'qatarenergy-lng':'https://www.qatarenergylng.qa/Portals/0/logo.png',
 qafac:'https://www.qafac.com.qa/wp-content/uploads/2025/08/logo-header-new.png',
 qafco:'https://www.qafco.qa/wp-content/uploads/2024/12/QAFCO-logo.png',
 milaha:'https://www.milaha.com/themes/custom/milaha/images/logo.svg',
 mannai:'https://mannai.com/wp-content/uploads/2020/07/logo-big.png',
 'al-balagh':'https://www.albalagh.com/public//user/images/logosticky.png',
 dopet:'https://www.dopet.com/wp-content/uploads/2023/02/DOPET-logoTP.png',
};
fs.mkdirSync('audits/collaboration-logos/sources',{recursive:true});
const results=await Promise.all(Object.entries(sources).map(async([id,url])=>{
 try{const r=await fetch(url,{signal:AbortSignal.timeout(25000)});if(!r.ok)throw Error('HTTP '+r.status);
 const bytes=Buffer.from(await r.arrayBuffer());const ext=new URL(url).pathname.split('.').pop();
 const file=`audits/collaboration-logos/sources/${id}.${ext}`;fs.writeFileSync(file,bytes);
 const meta=await sharp(bytes).metadata();return{id,url,file,bytes:bytes.length,width:meta.width,height:meta.height,format:meta.format};
 }catch(e){return{id,url,error:e.message};}
}));
fs.writeFileSync('audits/collaboration-logos/approved-sources.json',JSON.stringify(results,null,2));console.log(results);
