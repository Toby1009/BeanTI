import { Suspense } from 'react';
import { Sprout } from 'lucide-react';
import FlavorExplorer from '@/components/flavor-explorer';
import './explore.css';
export const metadata={title:'風味小旅行',description:'從產區明信片、處理法圖解到風味小實驗，用自己的步調認識咖啡。'};
export default function ExplorePage(){return <main id="main" className="explore-page wrap"><header className="explore-intro"><span className="eyebrow"><Sprout size={16} aria-hidden="true"/> BEANTI · FLAVOR FIELD NOTES</span><h1>一顆豆子，<br/><em>好多種小宇宙。</em></h1><p>從哪裡來，怎麼變成一杯，喝起來又像什麼？<br/>翻開這本風味筆記，讓好奇帶路。</p><span className="explore-handwriting">follow your curiosity, one sip at a time.</span></header><Suspense fallback={<div className="explore-loading" role="status">正在翻開風味筆記⋯</div>}><FlavorExplorer/></Suspense></main>;}
