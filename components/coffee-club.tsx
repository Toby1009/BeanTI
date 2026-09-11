import Image from 'next/image';
import { ArrowUpRight, Instagram } from 'lucide-react';

const instagramUrl = 'https://www.instagram.com/ntust_coffee/';

export function CoffeeClubLink({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={compact ? 'footer-instagram' : 'button primary club-instagram'}
      aria-label={`${compact ? '台科奇點咖啡社 Instagram' : '到 Instagram 找我們'}（另開分頁）`}
    >
      <Instagram size={compact ? 17 : 19} aria-hidden="true" />
      {compact ? '台科奇點咖啡社' : '到 Instagram 找我們'}
      <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}

export function CoffeeClubInvite() {
  return (
    <section className="club-section wrap" aria-labelledby="club-heading">
      <div className="club-card">
        <div className="club-art" aria-hidden="true">
          <span className="club-art-note handwritten">a cup tastes better together.</span>
          <div className="club-beans">
            <Image src="/images/bean-0.webp" alt="" width={200} height={200} unoptimized />
            <Image src="/images/bean-9.webp" alt="" width={200} height={200} unoptimized />
          </div>
          <span className="club-art-caption">留一個位子，給喜歡咖啡的你。</span>
        </div>
        <div className="club-copy">
          <span className="eyebrow">A LITTLE COFFEE, A LITTLE COMPANY</span>
          <h2 id="club-heading">找到本命咖啡，<br />也找到一起喝的人。</h2>
          <p>台科奇點咖啡社，<br />陪你把風味探索帶到生活裡。</p>
          <CoffeeClubLink />
          <span className="club-handle">@ntust_coffee</span>
        </div>
      </div>
    </section>
  );
}
