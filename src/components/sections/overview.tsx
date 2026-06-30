import Image from "next/image";
import { Section, Eyebrow, SectionTitle, Lead } from "@/components/site/section";
import { BizCard } from "@/components/site/biz-card";

export function Overview() {
  return (
    <Section id="overview" tone="paper">
      <Eyebrow>WHAT WE DO</Eyebrow>
      <SectionTitle>
        研修から、事業開発まで。
        <br />
        一気通貫で伴走します。
      </SectionTitle>

      {/* 一気通貫イメージ */}
      <div className="mx-auto mt-[18px] block max-w-[320px]">
        <Image
          src="/assets/illust/overview-spot-trim.png"
          alt="チームで議論する経営の現場イラスト"
          width={797}
          height={429}
          className="h-auto w-full"
        />
      </div>

      {/* 研修→事業開発の流れ */}
      <div className="mt-[18px] rounded-card bg-paper px-3 pb-3 pt-[18px] shadow-card">
        <svg viewBox="0 0 360 110" width="100%" role="img" aria-label="研修から事業開発までの一気通貫の流れ">
          <path d="M46 48 H322" stroke="var(--gold)" strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round" />
          <path d="M318 42 l8 6 -8 6" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <g transform="translate(46,48)">
            <circle r="25" fill="#E2F0EC" />
            <g transform="translate(0,-1)" fill="none" stroke="var(--teal)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M-12 -3 L0 -9 L12 -3 L0 3 Z" />
              <path d="M-7 0 V6 a7 3.5 0 0 0 14 0 V0" />
              <path d="M12 -3 V7" />
            </g>
          </g>
          <text x="46" y="88" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--ink-soft)" fontFamily="'Noto Sans JP',sans-serif">研修</text>
          <g transform="translate(138,48)">
            <circle r="25" fill="#E2F0EC" />
            <g stroke="var(--teal)" strokeWidth="2.6" strokeLinecap="round"><path d="M-9 8 V1" /><path d="M-1 8 V-4" /><path d="M7 8 V-9" /></g>
          </g>
          <text x="138" y="88" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--ink-soft)" fontFamily="'Noto Sans JP',sans-serif">戦略</text>
          <g transform="translate(230,48)">
            <circle r="25" fill="#FBEFD7" />
            <g fill="none" stroke="var(--gold-d)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 -11 C6 -5 6 4 0 10 C-6 4 -6 -5 0 -11 Z" /><circle cx="0" cy="-3" r="2.4" /><path d="M-5 6 L-9 11 M5 6 L9 11" />
            </g>
          </g>
          <text x="230" y="88" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--ink-soft)" fontFamily="'Noto Sans JP',sans-serif">新規事業</text>
          <g transform="translate(322,48)">
            <circle r="25" fill="#E6F2E9" />
            <g fill="none" stroke="var(--green-d)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="-11" y="-8" width="12" height="18" /><path d="M-8 -4 H-2 M-8 0 H-2 M-8 4 H-2" /><path d="M4 10 V-1 l5 -3 5 3 V10" />
            </g>
          </g>
          <text x="322" y="88" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--ink-soft)" fontFamily="'Noto Sans JP',sans-serif">地域</text>
        </svg>
      </div>

      <div className="mt-[18px] flex flex-col gap-[18px] md:mt-8 md:grid md:grid-cols-3 md:gap-5">
        <BizCard lead tone="teal" src="/assets/illust/svc-training-trim.png" alt="経営研修のイラスト" label="① 主役" title="経営研修（MBAエッセンス）">
          世界水準の経営知を、自社向けにカスタマイズして。
        </BizCard>
        <BizCard tone="gold" src="/assets/illust/svc-newbiz-trim.png" alt="新規事業開発のイラスト" label="②" title="新規事業開発支援">
          0→1の構想から検証・立ち上げまで、伴走型で。
        </BizCard>
        <BizCard tone="green" src="/assets/illust/svc-regional-trim.png" alt="地方創生事業のイラスト" label="③" title="地方創生事業支援">
          地域の資源を事業に。挑戦を、地域から。
        </BizCard>
      </div>

      <Lead className="mt-[18px] text-[13px]">
        経営戦略・マーケティング・資金調達・新規事業・AI活用・食農・地方創生まで。「社内に聞ける人がいない」領域も、まとめて相談できます。
      </Lead>
    </Section>
  );
}
