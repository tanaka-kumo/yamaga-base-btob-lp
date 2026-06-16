import { cn } from "@/lib/utils";

// 濃チャコールの角丸CTAパネル（モック .cta-panel）。中身は各セクションで構成。
export function CtaPanel({
  center,
  className,
  children,
}: {
  center?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-card bg-panel px-5 py-6 text-white",
        center && "text-center",
        className,
      )}
    >
      {children}
    </div>
  );
}

// 「無料」丸ピル（見出し脇）。
export function FreeBadge({ children = "無料" }: { children?: React.ReactNode }) {
  return (
    <span className="ml-2 inline-block rounded-full bg-gold px-2.5 py-0.5 align-middle text-[13px] font-bold text-ink">
      {children}
    </span>
  );
}
