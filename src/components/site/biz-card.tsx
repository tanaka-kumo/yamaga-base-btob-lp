import Image from "next/image";
import { cn } from "@/lib/utils";

type BizTone = "teal" | "gold" | "green";

// 事業カード（モック .biz-card）：上に大きめイラスト（object-contain・淡色地）、下に本文。
const TONE = {
  teal: { media: "bg-[#E2F0EC]", lbl: "bg-teal", title: "text-teal-d" },
  gold: { media: "bg-[#FBEFD7]", lbl: "bg-gold-d", title: "text-gold-d" },
  green: { media: "bg-[#E6F2E9]", lbl: "bg-green-d", title: "text-green-d" },
} as const;

export function BizCard({
  src,
  alt,
  tone,
  label,
  title,
  children,
  lead,
}: {
  src: string;
  alt: string;
  tone: BizTone;
  label: string;
  title: string;
  children: React.ReactNode;
  lead?: boolean;
}) {
  const t = TONE[tone];
  return (
    <div
      className={cn(
        "overflow-hidden rounded-card bg-paper shadow-card",
        lead && "border-2 border-gold",
      )}
    >
      <div className={cn("grid aspect-[16/10] w-full place-items-center overflow-hidden", t.media)}>
        <Image
          src={src}
          alt={alt}
          width={360}
          height={225}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="px-5 pb-5 pt-[18px]">
        <span className={cn("inline-block rounded-full px-3 py-[3px] text-[11.5px] font-bold text-white", t.lbl)}>
          {label}
        </span>
        <h3 className={cn("mt-2 text-[20px] font-black leading-[1.35] tracking-[0.01em]", t.title)}>
          {title}
        </h3>
        <p className="mt-1.5 text-[13.5px] leading-[1.75] text-ink-soft">{children}</p>
      </div>
    </div>
  );
}
