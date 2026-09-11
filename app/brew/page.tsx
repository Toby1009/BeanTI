import Link from 'next/link';
import { ArrowDown, Coffee } from 'lucide-react';
import BrewStory from '@/components/brew-story';
import './brew.css';
export const metadata = {title:'沖一杯｜慢慢沖出你的咖啡',description:'往下滑，跟著悶蒸、注水、滴落的互動插畫，認識一杯手沖咖啡如何誕生。',openGraph:{title:'把時間，慢慢沖成一杯。｜BeanTI',description:'和 BeanTI 一起探索手沖咖啡。',images:[{url:'/images/brew/cup.webp',width:640,height:640}]}};
export default function BrewPage() {return <main id="main" className="brew-page"><section className="brew-intro wrap"><span className="eyebrow"><Coffee size={14}/> BeanTI · 一杯的小旅行</span><h1>把時間，<br/><em>慢慢沖成一杯。</em></h1><p>一點水、一點耐心，還有一點好奇。<br/>往下滑，親手走過一杯咖啡的小旅行。</p><a href="#brew-start" className="brew-begin"><ArrowDown size={18}/><span>開始沖煮</span></a><span className="brew-intro-side">THE ART OF A LITTLE PAUSE</span></section><BrewStory/><noscript><p className="wrap">開啟 JavaScript 可體驗捲動動畫。手沖的基本步驟是：準備咖啡粉、少量注水悶蒸、穩定注水、等待滴落、在適口溫度品飲。</p></noscript><div className="brew-home-link"><Link href="/" className="text-link">回到 BeanTI 首頁</Link></div></main>;}
