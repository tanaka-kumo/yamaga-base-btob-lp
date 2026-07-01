import { GraduationCap, Building2, Users, type LucideIcon } from "lucide-react";
import { CtaButton } from "@/components/site/cta-button";
import { cn } from "@/lib/utils";

// 信頼バッジ（260630_FV案.md）。未確定の数字・社名は {{要確認}} のまま。
const BADGES: { Icon: LucideIcon; iconColor: string; tint: string; label: string; note?: string }[] = [
  { Icon: GraduationCap, iconColor: "text-brand-blue", tint: "bg-[#e8f3f7]", label: "ハーバードMBA（HBS）出身が伴走" },
  { Icon: Building2, iconColor: "text-brand-orange", tint: "bg-[#fcefdc]", label: "大手・ナショナルクライアント導入", note: "要確認：社名・件数" },
  { Icon: Users, iconColor: "text-brand-green", tint: "bg-[#eef6e6]", label: "受講者数", note: "要確認：人数" },
];

// SECTION 01：HERO。背景映像は維持。メイン見出しは「白枠×黒文字」で映像の上でも高コントラスト。
export function Hero() {
  return (
    <header id="top" className="relative bg-paper">
      {/* 背景映像＋見出しオーバーレイ（モバイル縦長／デスクトップ横長バナー） */}
      <div className="relative aspect-[3/3.4] w-full overflow-hidden bg-[#1c1b19] md:aspect-auto md:h-[clamp(420px,56vh,600px)]">
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
        {/* 上下に薄い暗がり（kicker可読性・奥行き。白枠見出しは白背景で高コントラスト） */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.30)_0%,rgba(0,0,0,0)_34%,rgba(0,0,0,0)_72%,rgba(0,0,0,.14)_100%)]" />

        <div className="absolute inset-0 z-[2]">
          <div className="mx-auto flex h-full max-w-[1080px] flex-col justify-between px-[22px] py-5 md:px-8 md:py-8">
            <span className="self-start rounded-full bg-black/45 px-3 py-1.5 font-[family-name:var(--font-montserrat)] text-[11px] font-semibold tracking-[0.1em] text-white backdrop-blur-[2px]">
              YAMAGA BASE ｜ 法人向け 経営研修・事業開発
            </span>
            <h1 className="text-[30px] font-bold leading-[1.7] tracking-[0.01em] md:max-w-[820px] md:text-[clamp(2.2rem,4.4vw,3.3rem)]">
              <span className="box-decoration-clone rounded-[4px] bg-white px-[0.32em] py-[0.1em] text-ink [-webkit-box-decoration-break:clone]">
                研修は受けた。
                <br />
                組織は、変わったか。
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* サブ・信頼バッジ・デュアルCTA（白地で高視認性） */}
      <div className="bg-paper px-[22px] pb-2 pt-6 md:pb-6 md:pt-10">
        <div className="mx-auto md:max-w-[760px]">
          <p className="text-[17px] font-bold leading-[1.7] text-teal md:text-[21px]">
            伸びしろのない会社は、ない。
            <br />
            その糸口を、一緒に探し、考え、動き出すまで歩いていく。
          </p>
          <p className="mt-3 text-[14px] leading-[1.9] text-ink-soft md:text-[15px]">
            「わかった」で終わらせず、“来週から動ける状態”で持ち帰る。九州・熊本で、ここだけ。
          </p>

          {/* 信頼バッジ（アイコン＋淡塗り＋太字の目立つチップ） */}
          <div className="mt-5 flex flex-wrap gap-2.5">
            {BADGES.map((b) => (
              <div
                key={b.label}
                className={cn(
                  "inline-flex items-center gap-2.5 rounded-full px-4 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.06)]",
                  b.tint,
                )}
              >
                <b.Icon className={cn("size-5 shrink-0", b.iconColor)} aria-hidden />
                <span className="text-[13px] font-bold leading-tight text-ink">
                  {b.label}
                  {b.note && (
                    <span className="ml-1.5 whitespace-nowrap rounded border border-dashed border-brand-orange/70 px-1 py-px text-[10px] font-bold text-[var(--gold-d)]">
                      {b.note}
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* デュアルCTA：視察予約（オレンジ）＋ 資料請求（アウトライン） */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <div className="sm:flex-1">
              <CtaButton location="hero_reserve">視察を予約する</CtaButton>
            </div>
            <div className="sm:flex-1">
              <CtaButton location="hero_document" variant="outline">
                資料を請求する
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
