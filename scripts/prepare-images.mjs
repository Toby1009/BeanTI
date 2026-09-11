import sharp from 'sharp';
await sharp('public/images/hero.png').resize(1536).webp({quality:85}).toFile('public/images/hero.webp');
const meta=await sharp('public/images/beans.png').metadata();
const w=Math.floor(meta.width/4),h=Math.floor(meta.height/4);
for(let i=0;i<16;i++)await sharp('public/images/beans.png').extract({left:(i%4)*w,top:Math.floor(i/4)*h,width:w,height:h}).resize(512,512,{fit:'contain',background:'#faf7ef'}).webp({quality:85}).toFile(`public/images/bean-${i}.webp`);
console.log(`Optimized hero and 16 characters from ${meta.width}×${meta.height} atlas.`);
