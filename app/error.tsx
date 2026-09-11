'use client';
export default function ErrorPage({reset}:{reset:()=>void}){return <main id="main" className="empty-page"><h1>咖啡先休息了一下。</h1><p>頁面暫時沒有載入成功，再試一次吧。</p><button className="button primary" onClick={reset}>重新載入</button><a href="/" className="text-link">回到首頁</a></main>}
