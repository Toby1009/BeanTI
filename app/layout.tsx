import type { Metadata } from 'next';
import { Header, Footer } from '@/components/ui';
import './globals.css';
const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
export const metadata: Metadata = { metadataBase: new URL(deploymentHost ? `https://${deploymentHost}` : 'http://localhost:3000'), title: {default:'BeanTI｜找到你的本命咖啡',template:'%s｜BeanTI'},description:'16 道生活小選擇，找到你的咖啡人格。探索 16 種咖啡小靈魂，帶走一張能拿給咖啡師看的風味護照。',openGraph:{title:'BeanTI｜你是哪一種咖啡小靈魂？',description:'16 道小選擇，找到你可能愛上的那杯咖啡。',locale:'zh_TW',type:'website',images:[{url:'/images/hero.webp',width:1536,height:1024}]},twitter:{card:'summary_large_image'},icons:{icon:'/icon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="zh-Hant"><body><a href="#main" className="skip-link">跳至主要內容</a><Header/>{children}<Footer/></body></html>;}
