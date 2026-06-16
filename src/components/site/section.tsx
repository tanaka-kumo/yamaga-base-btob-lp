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
  className,
  children,
}: {
  id?: string;
  tone?: SectionTone;
  alt?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const bg = tone ? TONE_BG[tone] : alt ? "bg-paper" : "bg-cream";
  return (
    <section id={id} className={cn("scroll-mt-16 px-[22px] py-12", bg, className)}>
      <div data-reveal className="mx-auto w-full max-w-[460px]">
        {children}
      </div>
    </section>
  );
}

// 英語ミニラベル：Montserrat 600・くすみ金（tan）・字間広め・中央。
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-center font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.14em] text-tan",
        className,
      )}
    >
      {children}
    </p>
  );
}

// 見出し：Noto Sans JP 900・中央・line-height 1.45。
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
        "mt-2 text-center text-[25px] font-black leading-[1.45] tracking-[0.02em] text-ink",
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
