'use client';
import { useState } from 'react';
import { ArrowRight, Check, Bean, Coffee, Droplets, Scale, Settings2, Filter, File } from 'lucide-react';
const equipment = [
 [Settings2,'磨豆機','把咖啡豆磨成適合濾杯的粗細。'],[Bean,'咖啡豆','準備這次想喝的豆子。'],[File,'濾紙','選擇與濾杯尺寸、形狀相符的濾紙。'],[Filter,'濾杯','支撐濾紙，讓水流經咖啡粉。'],[Coffee,'底壺／分享壺','承接咖啡液，也可以使用合適的杯子。'],[Droplets,'手沖壺與水','細口壺方便控制水流。'],[Scale,'電子秤與計時器','記下粉量、水量和時間，方便下次調整。'],[Coffee,'接水杯','承接潤紙的水，避免和咖啡混在一起。'],
] as const;
const preparation = [
 {name:'器材就位',title:'把小小的沖煮桌，準備好。',text:'點一下器材卡，就能標記已備妥的物品。這是一張小清單，不用全部勾選也能繼續。',note:'磨豆機、濾紙、濾杯、底壺，今天都到齊了嗎？'},
 {name:'摺紙潤濕',title:'先替濾杯，穿上一件紙衣。',text:'沿濾紙接縫摺好、放進濾杯，再用熱水均勻潤濕，讓紙貼合杯壁，也順便溫熱器具。',note:'紙緣要看得到；咖啡粉接觸的是濾紙內側。'},
 {name:'倒掉接底水',title:'這一壺水，先不喝。',text:'潤紙的水用接水杯承接；若直接流入底壺，要先倒掉，再把濾杯放回底壺上。',note:'確認底壺已清空，避免沖好的咖啡被潤紙水稀釋。'},
 {name:'磨豆入杯',title:'磨出香氣，輕輕鋪平。',text:'秤好咖啡豆、研磨後倒進已潤濕的濾紙，輕晃濾杯讓粉床大致平整。底壺放上秤，歸零後就能開始注水。',note:'研磨刻度因磨豆機而異，先參考你的器具與豆子配方。'},
];
function PrepDrawing({step}:{step:number}) {
 return <svg viewBox="0 0 500 310" aria-hidden="true" className="prep-drawing" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
 <ellipse cx="250" cy="278" rx="200" ry="10" fill="var(--sage)" stroke="none"/>
 <g className="prep-grinder" style={{opacity:step===0||step===3?1:.25}}><path d="M58 147h71l-6 117H65Z" fill="var(--apricot)"/><ellipse cx="94" cy="147" rx="36" ry="10" fill="var(--white)"/><path d="M94 145v-28h67"/><rect x="151" y="108" width="29" height="15" rx="6" fill="var(--green)"/><path d="M65 227h59M92 169v35"/><circle cx="85" cy="211" r="2"/><circle cx="105" cy="211" r="2"/><path d="M89 219q6 5 12 0"/></g>
 <g className="prep-server" style={{transformOrigin:'270px 230px',transform:step===2?'translate(65px, -24px) rotate(32deg)':'none'}}><path d="M231 187h69l-5 23 21 45q7 20-52 20t-48-20l21-45Z" fill="var(--white)"/><path d="M302 216q48-8 39 24t-26 18"/><path d="M224 250q40 10 88 0v10q-47 19-91 0Z" fill="var(--sage)" stroke="none" opacity={step===1?1:0}/></g>
 <g style={{transform:step===2?'translate(-35px,-38px)':'none'}}><path d="M202 100h125l-43 83h-40Z" fill="var(--apricot)"/><ellipse cx="264" cy="100" rx="63" ry="13" fill="var(--white)"/><path d="M210 97l14-29q40-16 80 0l14 29q-54 22-108 0Z" fill="var(--white)"/><ellipse cx="264" cy="79" rx="43" ry="11" fill="var(--paper)"/><path d="M220 104l30 65m61-65-32 65M240 110l17 59" stroke="var(--line)"/><ellipse cx="264" cy="100" rx="35" ry="9" fill="var(--ink)" stroke="none" opacity={step===3?1:0}/><path d="M230 187h66"/></g>
 {step===1&&<g stroke="var(--green)"><path d="M362 30Q345 64 268 88" strokeWidth="4"/><path d="M260 177v21m10-9v14"/><circle cx="252" cy="94" r="2"/><circle cx="275" cy="98" r="2"/></g>}
 {step===2&&<g stroke="var(--green)"><path d="M344 203q32 5 49 29" strokeWidth="4"/><path d="M368 238h66l-6 38h-54Z" fill="var(--sage)"/><path d="M381 253h40"/></g>}
 {step===3&&<g fill="var(--ink)" stroke="none">{[0,1,2,3,4].map(i=><circle key={i} cx={251+i*6} cy={42+(i%3)*12} r="2.5"/>)}</g>}
 <path d="M397 87v16m-8-8h16M156 62v12m-6-6h12" stroke="var(--green)"/>
 </svg>;
}
export default function BrewPreparation(){
 const [step,setStep]=useState(0);const [ready,setReady]=useState<string[]>([]);const current=preparation[step];
 return <section id="brew-preparation" className="brew-preparation wrap" aria-labelledby="prep-heading"><div className="prep-heading"><span className="eyebrow">BEFORE THE FIRST POUR</span><h2 id="prep-heading">好咖啡，從準備開始。</h2><p>先認識桌上的小幫手，再一起動手。</p></div><div className="equipment-grid">{equipment.map(([Icon,name,description])=><button key={name} aria-pressed={ready.includes(name)} onClick={()=>setReady(r=>r.includes(name)?r.filter(x=>x!==name):[...r,name])}><Icon size={25} strokeWidth={1.4} aria-hidden="true"/><strong>{name}</strong><span>{description}</span><span className="equipment-check">{ready.includes(name)?<Check size={14}/>:'＋'}</span></button>)}</div><p className="prep-count" role="status">已備妥 {ready.length} / {equipment.length} 樣小幫手</p>
 <div className="prep-notebook"><nav aria-label="沖煮前準備">{preparation.map((s,i)=><button key={s.name} aria-pressed={step===i} onClick={()=>setStep(i)}><span>0{i+1}</span>{s.name}</button>)}</nav><div className="prep-panel"><PrepDrawing step={step}/><div aria-live="polite" aria-atomic="true"><span className="eyebrow">PREPARATION / 0{step+1}</span><h3>{current.title}</h3><p>{current.text}</p><small>{current.note}</small></div></div><div className="prep-next">{step<3?<button className="text-link" onClick={()=>setStep(step+1)}>下一步：{preparation[step+1].name} <ArrowRight size={16}/></button>:<><a className="button primary prep-motion-link" href="#brew-start">準備好了，開始沖煮 <ArrowRight size={16}/></a><a className="button primary prep-static-link" href="#brew-static">準備好了，看沖煮步驟 <ArrowRight size={16}/></a></>}</div></div><a className="prep-source text-link" href="https://hario-asia-official.com/blogs/news/v60-pour-over-dripper-guide-for-beginners">準備步驟參考：HARIO V60 入門指南 <ArrowRight size={13}/></a></section>;
}
