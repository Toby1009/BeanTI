import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import { profiles, axes } from '@/lib/coffee';
import { ProfileCard, MiniLabel } from '@/components/ui';
export const metadata = {title:'16 型咖啡圖鑑'};
export default function TypesPage(){return <main id="main" className="wrap types-page"><div className="section-heading"><MiniLabel>THE LITTLE BEAN ENCYCLOPEDIA</MiniLabel><h1>每一種喜歡，<br/>都有自己的模樣。</h1><p>16 種咖啡小靈魂。找到你，也認識一點不一樣的世界。</p><Link className="text-link" href="/quiz">還不知道自己是哪一型？來測測 <ArrowRight size={16}/></Link></div><div className="all-types-grid">{profiles.map(p=><ProfileCard key={p.code} profile={p}/>)}</div><section id="axes" className="axes-explainer"><span className="eyebrow">THE FLAVOR BEHIND THE PERSONALITY</span><h2>四條軸，讀懂你的那杯咖啡。</h2><div className="axis-info-grid">{axes.map(a=><article key={a.en}><span className="english">{a.en}</span><h3>{a.left} / {a.right}</h3><p>{a.description}</p></article>)}</div><p className="fine-print">感官題占 65%、情境題占 25%、人格投射題占 10% 的計分權重。這是一套尚未經科學驗證的風味探索設計，不是正式 MBTI 或心理量表。探索軸影響嘗鮮建議，不會把愛冒險直接解讀成喜歡發酵味。接近中間的軸，兩邊都值得試。</p></section></main>}
