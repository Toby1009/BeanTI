'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, Coffee, RotateCcw, Sprout } from 'lucide-react';
import { brewFrame, brewSteps, clamp } from '@/lib/brew';
import BrewScene from './brew-scene';

export default function BrewStory() {
  const section = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const read = () => {
      frame = 0;
      if (!section.current || media.matches) return;
      const bounds = section.current.getBoundingClientRect();
      const stickyHeight = section.current.querySelector('.brew-sticky')?.clientHeight ?? window.innerHeight;
      setProgress(clamp(-bounds.top / Math.max(1, bounds.height - stickyHeight)));
    };
    const schedule = () => { if (!frame && !media.matches) frame = requestAnimationFrame(read); };
    const preference = () => { setReduced(media.matches); schedule(); };
    preference();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    media.addEventListener('change', preference);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); media.removeEventListener('change', preference); };
  }, []);
  const stage = brewFrame(progress).step;
  const step = brewSteps[stage];
  function seek(index: number) {
    if (!section.current) return;
    const bounds = section.current.getBoundingClientRect();
    const height = section.current.querySelector('.brew-sticky')!.clientHeight;
    const target = index === 0 ? 0 : index === 4 ? .99 : (index + .5) / 5;
    window.scrollTo({ top: window.scrollY + bounds.top + (bounds.height - height) * target, behavior: 'instant' });
  }
  return <>
    <section className="brew-scroll" ref={section} id="brew-start" aria-label="跟著捲動沖一杯咖啡">
      <div className="brew-sticky">
        <div className="brew-topline"><Link href="/" className="text-link">beanti. / 一杯的小旅行</Link><a href="#brew-finish" className="text-link">略過動畫 <ArrowRight size={14}/></a></div>
        <div className="brew-stage">
          <div className="brew-art-panel"><span className="brew-scene-label">BEANTI · BREW NOTES</span><BrewScene progress={progress}/><div className="brew-art-caption"><span className="brew-caption-rule"/>{step.cue}</div></div>
          <div className="brew-step-copy" aria-live="polite" aria-atomic="true">
            <div className="brew-step-kicker"><span className="brew-step-number">0{stage+1}</span><span className="eyebrow">{step.english}</span></div>
            <h2>{step.title.split('\n').map((line,i)=><span key={i}>{line}<br/></span>)}</h2>
            <p className="brew-description">{step.description}</p>
            <div className="brew-detail"><span/>{step.detail}</div>
            <span className="brew-handwritten">a little patience, a lovely cup.</span>
          </div>
        </div>
        <div className="brew-controls"><nav aria-label="沖煮步驟">{brewSteps.map((s,i)=><button key={s.label} onClick={()=>seek(i)} aria-current={stage===i?'step':undefined}><span className="brew-nav-dot"/><span className="brew-nav-number">0{i+1}</span>{s.label}</button>)}</nav><span className="brew-scroll-hint"><ArrowDown size={14}/> {stage===4?'再往下，看看你的下一杯':'慢慢往下滑，也能往回看'}</span></div>
        <div className="brew-bottom-progress" aria-hidden="true"><span style={{transform:`scaleX(${progress})`}}/></div>
      </div>
    </section>
    <section id="brew-static" className="brew-static wrap" aria-label="靜態沖煮步驟"><p className="brew-static-intro">依照你的減少動態設定，將沖煮故事整理成五張小筆記。</p>{brewSteps.map((s,i)=><article key={s.label}><BrewScene progress={i===4?1:(i+.5)/5} annotated={false}/><div><span className="eyebrow">0{i+1} / {s.label}</span><h2>{s.title.replace('\n','')}</h2><p>{s.description}</p><small>{s.detail}</small></div></article>)}</section>
    <section id="brew-finish" tabIndex={-1} className="brew-finish wrap">
      <Sprout size={30} strokeWidth={1.3}/><span className="eyebrow">FROM A LITTLE MOMENT TO YOUR EVERYDAY</span><h2>這一杯，是你的了。</h2><p>學會看一杯咖啡怎麼誕生，<br/>再找找，什麼味道會讓你喜歡。</p>
      <Link className="button primary" href="/quiz">找到我的咖啡人格 <ArrowRight size={17}/></Link>
      {!reduced&&<button className="text-link brew-replay" onClick={()=>seek(0)}><RotateCcw size={14}/> 再沖一杯</button>}
      <Link className="text-link brew-explore-link" href="/explore">接著探索產區與風味 <ArrowRight size={17}/></Link><div className="brew-club-note"><Coffee size={20}/><div><strong>把喜歡，慢慢喝明白。</strong><p>獻給每個好奇咖啡、想親手試試的你。</p></div></div>
      <p className="brew-disclaimer">這是一段沖煮原理的簡化示意，不是特定配方或計時器。實際水量、研磨與時間，會依豆子、器具和你喜歡的味道調整。</p>
    </section>
  </>;
}
