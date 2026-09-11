import Link from 'next/link';
import { Coffee } from 'lucide-react';
export default function NotFound(){return <main id="main" className="empty-page"><Coffee size={45}/><span className="eyebrow">THIS BEAN WANDERED OFF</span><h1>這顆豆子，還在旅行中。</h1><p>找不到這個頁面或咖啡人格，回到圖鑑看看吧。</p><Link href="/types" className="button primary">回到咖啡圖鑑</Link></main>}
