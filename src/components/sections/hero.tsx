import { Lead, SubTeal } from "@/components/site/section";

// SECTION 01：HERO（背景動画）。モック .hero を再現。
export function Hero() {
  return (
    <header id="top" className="relative">
      <div className="relative aspect-[3/3.4] w-full overflow-hidden bg-[#1c1b19]">
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
        <div className="absolute left-[22px] top-5 z-[2] rounded-full bg-black/30 px-3 py-1.5 font-[family-name:var(--font-montserrat)] text-[11px] font-semibold tracking-[0.12em] text-white backdrop-blur-[2px]">
          YAMAGA BASE ｜ 法人向け 経営研修・事業開発
        </div>
        <div className="absolute right-5 top-[18px] z-[2] font-[family-name:var(--font-montserrat)] text-xl font-extrabold tracking-[0.04em] text-white">
          bY
        </div>
        <div className="absolute inset-x-[22px] bottom-6 z-[2]">
          <h1 className="text-[30px] font-black leading-[1.7] tracking-[0.01em]">
            <span className="box-decoration-clone rounded-[4px] bg-white px-[0.3em] py-[0.08em] text-ink [-webkit-box-decoration-break:clone]">
              世界水準の経営学を、
              <br />
              自社のチームに。
            </span>
          </h1>
        </div>
      </div>
      <div className="bg-cream px-[22px] pb-1 pt-[22px]">
        <SubTeal>
          日常を、いったん降りる。
          <br />
          経営を、本気で考えるために。
        </SubTeal>
        <Lead className="mt-4">
          世界トップのビジネススクールで体系化された経営知を、熊本・山鹿の「廃校×秘密基地」で、近くカジュアルに。研修で終わらせず、実装・新規事業・地域での挑戦まで、私たちが継続して伴走します。
        </Lead>
      </div>
    </header>
  );
}
