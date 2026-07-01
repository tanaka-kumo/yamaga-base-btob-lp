import Image from "next/image";
import { Section, Eyebrow, SectionTitle, Lead, SubTeal } from "@/components/site/section";
import { BizCard } from "@/components/site/biz-card";

export function Overview() {
  return (
    <Section id="overview" tone="paper">
      <Eyebrow>SOLUTION</Eyebrow>
      <SectionTitle>
        どんな組織課題にも、
        <br />
        課題に応じた“動き出す”プランを。
      </SectionTitle>
      <Lead className="mt-4 md:mx-auto md:max-w-[720px]">
        「学ぶ」で終わらせない。経営戦略・マーケティング・資金調達・新規事業・AI活用・食農・地方創生まで、課題に合わせて設計し、実行まで伴走します。
      </Lead>

      {/* 対応できる課題領域の広さを示す控えめな帯（主役にしない） */}
      <div className="mx-auto mt-7 max-w-[150px] md:hidden">
        <Image
          src="/assets/illust/overview-spot-trim.png"
          alt="チームで議論する経営の現場イラスト"
          width={797}
          height={429}
          className="h-auto w-full"
        />
      </div>
      <div className="mx-auto mt-5 max-w-[420px] rounded-[12px] bg-cream px-3 py-3">
        <svg viewBox="0 0 360 110" width="100%" role="img" aria-label="対応領域：研修→戦略→新規事業→地域">
          <path d="M46 48 H322" stroke="var(--brand-orange)" strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round" />
          <path d="M318 42 l8 6 -8 6" fill="none" stroke="var(--brand-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <g transform="translate(46,48)">
            <circle r="25" fill="#e8f3f7" />
            <g transform="translate(0,-1)" fill="none" stroke="var(--brand-blue)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M-12 -3 L0 -9 L12 -3 L0 3 Z" />
              <path d="M-7 0 V6 a7 3.5 0 0 0 14 0 V0" />
              <path d="M12 -3 V7" />
            </g>
          </g>
          <text x="46" y="88" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--ink-soft)" fontFamily="'Noto Sans JP',sans-serif">研修</text>
          <g transform="translate(138,48)">
            <circle r="25" fill="#e8f3f7" />
            <g stroke="var(--brand-blue)" strokeWidth="2.6" strokeLinecap="round"><path d="M-9 8 V1" /><path d="M-1 8 V-4" /><path d="M7 8 V-9" /></g>
          </g>
          <text x="138" y="88" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--ink-soft)" fontFamily="'Noto Sans JP',sans-serif">戦略</text>
          <g transform="translate(230,48)">
            <circle r="25" fill="#fcefdc" />
            <g fill="none" stroke="var(--brand-orange)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 -11 C6 -5 6 4 0 10 C-6 4 -6 -5 0 -11 Z" /><circle cx="0" cy="-3" r="2.4" /><path d="M-5 6 L-9 11 M5 6 L9 11" />
            </g>
          </g>
          <text x="230" y="88" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--ink-soft)" fontFamily="'Noto Sans JP',sans-serif">新規事業</text>
          <g transform="translate(322,48)">
            <circle r="25" fill="#eef6e6" />
            <g fill="none" stroke="var(--brand-green)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="-11" y="-8" width="12" height="18" /><path d="M-8 -4 H-2 M-8 0 H-2 M-8 4 H-2" /><path d="M4 10 V-1 l5 -3 5 3 V10" />
            </g>
          </g>
          <text x="322" y="88" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--ink-soft)" fontFamily="'Noto Sans JP',sans-serif">地域</text>
        </svg>
      </div>

      <div className="mt-8 flex flex-col gap-5 md:mt-10 md:grid md:grid-cols-3 md:gap-6">
        <BizCard
          lead
          tone="teal"
          src="/assets/illust/svc-training-trim.png"
          alt="経営研修のイラスト"
          label="① 主役"
          title="経営研修（MBAエッセンス）"
          checklist={["経営戦略", "マーケティング", "財務・資金調達", "組織マネジメント"]}
          outcome="→ 学んだ内容を、自社の「次の一手」に落とし込む"
        >
          世界水準の経営知を、自社の課題に合わせて。
        </BizCard>
        <BizCard
          tone="gold"
          src="/assets/illust/svc-newbiz-trim.png"
          alt="新規事業開発のイラスト"
          label="②"
          title="新規事業開発支援"
          checklist={["事業アイデアの構想", "仮説検証", "事業計画づくり", "立ち上げ伴走"]}
          outcome="→ 構想で止めない。動く事業計画まで持っていく"
        >
          0→1の構想から、検証・立ち上げまで。
        </BizCard>
        <BizCard
          tone="green"
          src="/assets/illust/svc-regional-trim.png"
          alt="地方創生事業のイラスト"
          label="③"
          title="地方創生事業支援"
          checklist={["地域資源の事業化", "AI活用", "食農", "地域連携"]}
          outcome="→ 「やってみたい」を、地域で動かす"
        >
          地域の資源を、事業に。
        </BizCard>
      </div>

      <SubTeal className="mt-10 text-[18px] md:text-[22px]">
        課題は違っても、ゴールは同じ。
        <br />
        “学ぶ”ではなく“動き出す”。
      </SubTeal>
    </Section>
  );
}
