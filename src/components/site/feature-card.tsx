import { cn } from "@/lib/utils";

// POINT / FEATURE カード（モック .feat-card）：上辺に金タブ、POINT丸バッジ＋斜体大数字。
export function FeatureCard({
  num,
  numColor,
  title,
  children,
}: {
  num: string; // "01"
  numColor: "teal" | "gold";
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative rounded-card bg-paper px-[22px] pb-6 pt-[30px] shadow-card before:absolute before:left-1/2 before:top-0 before:h-2 before:w-14 before:-translate-x-1/2 before:rounded-b-lg before:bg-gold before:content-['']">
      <div className="mb-3 flex items-center gap-3.5">
        <div className="grid size-[58px] flex-none place-items-center rounded-full bg-gold font-[family-name:var(--font-montserrat)] text-xs font-extrabold tracking-[0.04em] text-white">
          POINT
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-[family-name:var(--font-montserrat)] text-xs font-bold tracking-[0.12em] text-tan">
            FEATURE
          </span>
          <span
            className={cn(
              "font-[family-name:var(--font-montserrat)] text-[50px] font-extrabold italic leading-[0.9]",
              numColor === "teal" ? "text-teal" : "text-gold",
            )}
          >
            {num}
          </span>
        </div>
      </div>
      <h3 className="text-[17px] font-bold leading-[1.5] text-ink">{title}</h3>
      <p className="mt-2 text-[13.5px] leading-[1.8] text-ink-soft">{children}</p>
    </div>
  );
}
