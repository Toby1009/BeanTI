'use client';
import { useId } from 'react';
import { brewFrame, brewSteps } from '@/lib/brew';

/** All motion is derived from scroll progress; no continuously running timers. */
export default function BrewScene({ progress, annotated = true }: { progress: number; annotated?: boolean }) {
  const id = useId().replace(/:/g, '');
  const f = brewFrame(progress);
  const point = brewSteps[f.step].point;
  const swirl = Math.sin(progress * 70) * 18 * f.pour;
  const waterX = 302 + swirl;
  const dripY = 365 + ((progress * 1100) % 38);
  const setupOpacity = 1 - f.finish;
  return <svg className="brew-scene" viewBox="0 0 640 620" aria-hidden="true" focusable="false" data-liquid={f.liquid.toFixed(3)} data-finish={f.finish.toFixed(3)}>
    <defs>
      <linearGradient id={`${id}-coffee`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#98613b"/><stop offset="1" stopColor="#563a27"/></linearGradient>
      <linearGradient id={`${id}-water`} x1="0" y1="0" x2="1" y2="0"><stop stopColor="#adbdac"/><stop offset=".5" stopColor="#d0d8c5"/><stop offset="1" stopColor="#8fa58c"/></linearGradient>
      <clipPath id={`${id}-carafe`}><path d="M236 411 Q242 431 232 453 L210 510 Q198 543 284 545 Q365 543 357 510 L338 453 Q328 431 338 411Z"/></clipPath>
      <clipPath id={`${id}-paper`}><path d="M208 239 C208 222 250 214 292 214 C335 214 378 223 383 239 Q379 261 292 264 Q215 261 208 239Z"/></clipPath>
    </defs>
    <circle cx="308" cy="328" r="220" fill="var(--brew-halo)"/>
    <circle cx="308" cy="328" r="245" fill="none" stroke="var(--line)" strokeDasharray="2 10" opacity=".6"/>
    <ellipse cx="307" cy="554" rx={135 - f.finish * 10} ry="12" fill="var(--ink)" opacity=".055"/>
    <g opacity={setupOpacity} transform={`translate(0 ${-f.finish * 35})`}>
      <g clipPath={`url(#${id}-carafe)`}>
        <g transform={`translate(0 ${90 * (1 - f.liquid)})`}>
          <path d="M183 461 Q280 445 383 461V559H183Z" fill={`url(#${id}-coffee)`} opacity=".88"/>
          <ellipse cx="283" cy="461" rx="97" ry="10" fill="#b38556" opacity=".7"/>
        </g>
      </g>
      <image href="/images/brew/server.webp" x="177" y="391" width="245" height="170"/>
      <image href="/images/brew/dripper.webp" x="169" y="211" width="273" height="184"/>
      {/* Use only the generated paper interior; the existing cutout retains its alpha silhouette. */}
      <g data-testid="brew-filter-paper" clipPath={`url(#${id}-paper)`}>
        <image href="/images/brew/dripper-paper.webp" x="169" y="211" width="273" height="184"/>
      </g>
      <ellipse cx="292" cy="255" rx="36" ry={4 + f.bloom * 3} fill="#5c3d2b" opacity={f.bloom * .82}/>
      <g opacity={f.bloom * (1 - f.finish)} fill="none" stroke="#b68b5c" strokeWidth="1.3">
        {[[-21,-1,3],[3,-4,4],[22,1,2],[-7,3,2]].map(([x,y,r],i)=><circle key={i} cx={292+x} cy={253+y-Math.sin(progress*35+i)*2} r={r}/>) }
      </g>
      <g opacity={f.pour}>
        <path d={`M401 108 Q386 176 ${waterX} 253`} stroke={`url(#${id}-water)`} strokeWidth={3 + f.bloom * 1.5} fill="none" strokeLinecap="round"/>
        <ellipse cx={waterX} cy="254" rx={12 + Math.sin(progress * 95) * 4} ry="3" fill="none" stroke="#c7ba8d" strokeWidth="1.4"/>
      </g>
      <g opacity={f.drip} fill="#805133">
        <path d="M288 377v20" stroke="#805133" strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="288" cy={dripY+28} rx="2.3" ry="4"/>
        <ellipse cx="288" cy={dripY+49} rx="1.8" ry="3"/>
      </g>
      <g opacity={f.kettle} transform={`translate(${(1-f.kettle)*38} ${(1-f.kettle)*-18}) rotate(${-16*f.pour} 401 108)`}>
        <image href="/images/brew/kettle.webp" x="392" y="67" width="178" height="157"/>
      </g>
    </g>
    <g opacity={f.finish} transform={`translate(0 ${(1-f.finish)*45})`}>
      <image href="/images/brew/cup.webp" x="169" y="292" width="300" height="228"/>
      <g fill="none" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" opacity=".5">
        {[0,1,2].map(i=><path key={i} d={`M${268+i*29} 297 q-15 -24 0 -42 t0 -43`} transform={`translate(0 ${Math.sin(progress*35+i)*5})`}/>) }
      </g>
    </g>
    {annotated&&<g className="brew-leader" fill="none" stroke="var(--brew-line)" strokeWidth="1">
      <circle cx={point[0]} cy={point[1]} r="4" fill="var(--paper)"/>
      <path d={`M${point[0]+8} ${point[1]}H465l40 -34h113`}/>
      <circle cx="618" cy={point[1]-34} r="2" fill="var(--brew-line)"/>
    </g>}
    <g className="brew-sparkles" stroke="var(--brew-gold)" strokeWidth="1.2" opacity=".7"><path d="M153 192v14m-7 -7h14M467 453v18m-9 -9h18"/></g>
  </svg>;
}
