import sharp from 'sharp';
const input='public/images/brew/equipment.png';
const {width,height}=await sharp(input).metadata();
const names=['kettle','dripper','server','cup'];
for(let i=0;i<4;i++){
 const buffer=await sharp(input).extract({left:Math.floor(width/2)*(i%2),top:Math.floor(height/2)*Math.floor(i/2),width:Math.floor(width/2),height:Math.floor(height/2)}).toBuffer();
 await sharp(buffer).trim({threshold:8}).resize(640,640,{fit:'inside',withoutEnlargement:true}).webp({quality:88}).toFile(`public/images/brew/${names[i]}.webp`);
}
console.log('Prepared four transparent equipment layers.');
// A separate cleaned layer removes the atlas neighbour's overlapping handle.
await sharp('public/images/brew/dripper-clean.png').trim({threshold:8}).resize(640,640,{fit:'inside'}).webp({quality:88}).toFile('public/images/brew/dripper.webp');
for (const name of ['cup','kettle']) await sharp(`public/images/brew/${name === 'kettle' ? 'kettle-final' : 'cup-clean'}.png`).trim({threshold:8}).resize(640,640,{fit:'inside'}).webp({quality:88}).toFile(`public/images/brew/${name}.webp`);

// The generated paper interior is clipped inside the existing transparent dripper in SVG.
await sharp('public/images/brew/dripper-paper.png').resize(640).webp({quality:90}).toFile('public/images/brew/dripper-paper.webp');
