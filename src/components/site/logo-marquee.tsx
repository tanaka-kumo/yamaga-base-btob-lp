// 導入企業ロゴの2段マーキー（モック .clients）。
// ロゴは許諾前提・未確定のためプレースホルダ。CSSアニメは prefers-reduced-motion で停止（globals.css）。
function Row({ dir }: { dir: "left" | "right" }) {
  // 同じ並びを2回繰り返して -50% ループでシームレスに。
  const chips = Array.from({ length: 7 });
  return (
    <div className="overflow-hidden">
      <div className={`marquee-track ${dir === "left" ? "marquee-left" : "marquee-right mt-3.5"}`}>
        {[...chips, ...chips].map((_, i) => (
          <div
            key={i}
            aria-hidden
            className="grid h-[54px] w-[116px] flex-none place-items-center rounded-xl border border-border-soft bg-paper font-[family-name:var(--font-montserrat)] text-xs font-bold tracking-[0.06em] text-[#b3ad9e] shadow-card"
          >
            LOGO
          </div>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee() {
  return (
    <div className="overflow-hidden">
      <Row dir="left" />
      <Row dir="right" />
    </div>
  );
}
