import { Lead, SubTeal } from "@/components/site/section";

// 信頼バッジ（260630_FV案.md）。未確定の数字・社名は {{要確認}} のまま。
const BADGES: { label: string; note?: string }[] = [
  { label: "ハーバードMBA（HBS）出身が伴走" },
  { label: "大手・ナショナルクライアント導入", note: "要確認：社名・件数" },
  { label: "受講者数", note: "要確認：人数" },
];

// SECTION 01：HERO（背景動画）。モバイル＝縦長、デスクトップ＝横長バナー。
export function Hero() {
  return (
    <header id="top" className="relative">
      <div className="relative aspect-[3/3.4] w-full overflow-hidden bg-[#1c1b19] md:aspect-auto md:h-[clamp(420px,56vh,620px)]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/hero-poster.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/assets/hero-loop.mp4" type="video/mp4" />
        </video>
        {/* 下方をクリームへ溶かすグラデ */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(178deg,rgba(28,27,25,.30)_0%,rgba(246,241,230,0)_40%,rgba(246,241,230,.78)_76%,var(--cream)_100%)]" />

        {/* オーバーレイ（max-w で中央寄せ） */}
        <div className="absolute inset-0 z-[2]">
          <div className="mx-auto flex h-full max-w-[1080px] flex-col justify-between px-[22px] py-5 md:px-8 md:py-8">
            <div className="flex items-start justify-between">
              <span className="rounded-full bg-black/30 px-3 py-1.5 font-[family-name:var(--font-montserrat)] text-[11px] font-semibold tracking-[0.12em] text-white backdrop-blur-[2px]">
                YAMAGA BASE ｜ 法人向け 経営研修・事業開発
              </span>
              <span className="font-[family-name:var(--font-montserrat)] text-xl font-extrabold tracking-[0.04em] text-white">
                bY
              </span>
            </div>
            <h1 className="text-[30px] font-black leading-[1.7] tracking-[0.01em] md:max-w-[820px] md:text-[clamp(2.4rem,4.4vw,3.4rem)]">
              <span className="box-decoration-clone rounded-[4px] bg-white px-[0.3em] py-[0.08em] text-ink [-webkit-box-decoration-break:clone]">
                研修は受けた。
                <br />
                組織は、変わったか。
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-cream px-[22px] pb-1 pt-[22px] md:pb-6 md:pt-12">
        <div className="mx-auto md:max-w-[760px]">
          <SubTeal>ハーバード仕込みの経営を、自社のリアルな課題に当てきる。</SubTeal>
          <Lead className="mt-4">
            「わかった」で終わらせず、“来週から動ける状態”で持ち帰る。九州・熊本で、ここだけ。
          </Lead>

          {/* 信頼バッジ */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {BADGES.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border-soft bg-paper px-3 py-1.5 text-[11px] font-bold text-ink-soft shadow-card"
              >
                {b.label}
                {b.note && (
                  <span className="rounded-[4px] border border-dashed border-gold bg-[#FBEFD7] px-1.5 text-[10px] font-bold text-gold-d">
                    {b.note}
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
