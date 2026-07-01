import { cn } from "@/lib/utils";

export type SectionTone = "cream" | "paper" | "cream-2";

const TONE_BG: Record<SectionTone, string> = {
  cream: "bg-cream",
  paper: "bg-paper",
  "cream-2": "bg-cream-2",
};

export function Section({
  id,
  tone,
  alt,
  width = "wide",
  className,
  children,
}: {
  id?: string;
  tone?: SectionTone;
  alt?: boolean;
  /** デスクトップ最大幅：wide=1080 / narrow=720（CTA・FAQ等の可読幅） */
  width?: "wide" | "narrow";
  className?: string;
  children: React.ReactNode;
}) {
  const bg = tone ? TONE_BG[tone] : alt ? "bg-paper" : "bg-cream";
  const maxw = width === "narrow" ? "md:max-w-[720px]" : "md:max-w-[1080px]";
  return (
    <section id={id} className={cn("scroll-mt-16 px-[22px] py-12 md:py-20", bg, className)}>
      <div data-reveal className={cn("mx-auto w-full max-w-[460px]", maxw)}>
        {children}
      </div>
    </section>
  );
}

// 英語ミニラベル：Montserrat 600・ブルー・中央。
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-center font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.12em] text-tan",
        className,
      )}
    >
      {children}
    </p>
  );
}

// 見出し：高視認性ゴシック・最大700・中央・line-height 1.55。
export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "mt-3 text-center text-[24px] font-bold leading-[1.55] tracking-[0.01em] text-ink md:text-[28px]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

// 本文リード：ink-soft・中央・line-height 1.9。
export function Lead({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-center text-[14.5px] leading-[1.9] text-ink-soft", className)}>
      {children}
    </p>
  );
}

// 日本語サブ見出し：ティール 700・中央。
export function SubTeal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-center text-[22px] font-bold leading-[1.6] text-teal", className)}>
      {children}
    </p>
  );
}
