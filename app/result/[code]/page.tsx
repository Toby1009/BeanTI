import { notFound } from 'next/navigation';
import { getProfile, profiles } from '@/lib/coffee';
import Result from '@/components/result';
export function generateStaticParams(){return profiles.map(p=>({code:p.code}));}
export async function generateMetadata({params}:{params:Promise<{code:string}>}){const {code}=await params;const p=getProfile(code);return {title:p?`${p.name} ${p.code}`:'找不到這顆豆子',description:p?.description,openGraph:p?{title:`我是${p.name}｜BeanTI`,description:p.quote,images:[{url:`/images/bean-${p.art}.webp`,width:512,height:512}]}:undefined};}
export default async function ResultPage({params}:{params:Promise<{code:string}>}){const {code}=await params;const p=getProfile(code);if(!p)notFound();return <Result profile={p}/>;}
