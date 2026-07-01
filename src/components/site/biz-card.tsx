import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type BizTone = "teal" | "gold" | "green";

// Schoo型カード：画像バナー → ラベルpill → #333見出し → 1行説明 → チェックリスト → アウトカム。
// ラベルは AA(4.5:1) 確保：濃ブルーは白文字、明るいオレンジ/グリーンは濃文字。
const TONE: Record<BizTone, { media: string; lbl: string; outcome: string }> = {
  teal: { media: "bg-[#e8f3f7]", lbl: "bg-teal text-white", outcome: "bg-[#e8f3f7]" },
  gold: { media: "bg-[#fcefdc]", lbl: "bg-brand-orange text-ink", outcome: "bg-[#fcefdc]" },
  green: { media: "bg-[#eef6e6]", lbl: "bg-brand-green text-ink", outcome: "bg-[#eef6e6]" },
};

export function BizCard({
  src,
  alt,
  tone,
  label,
  title,
  checklist,
  outcome,
  children,
  lead,
}: {
  src: string;
  alt: string;
  tone: BizTone;
  label: string;
  title: string;
  /** 具体的な内容（淡tintボックスのチェックリスト） */
  checklist?: string[];
  /** “動き出す”アウトカム（強調行） */
  outcome?: string;
  /** 1行説明 */
  children: React.ReactNode;
  lead?: boolean;
}) {
  const t = TONE[tone];
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-card border bg-paper shadow-card",
        lead ? "border-brand-orange" : "border-border-soft",
      )}
    >
      {/* 画像バナー（写真：カード幅いっぱい・固定アスペクト・object-cover） */}
      <div className={cn("relative aspect-[16/10] w-full", t.media)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          loading="lazy"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className={cn("self-start rounded-full px-3 py-1 text-[11.5px] font-bold", t.lbl)}>
          {label}
        </span>
        <h3 className="text-[18px] font-bold leading-[1.5] text-ink">{title}</h3>
        <p className="text-[13.5px] leading-[1.75] text-ink-soft">{children}</p>

        {checklist && checklist.length > 0 && (
          <ul className="flex flex-col gap-1.5 rounded-[10px] bg-cream p-3.5">
            {checklist.map((c) => (
              <li key={c} className="flex items-start gap-2 text-[13px] leading-[1.6] text-ink">
                <span className="mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-full bg-brand-green">
                  <Check className="size-3" strokeWidth={3} color="#fff" />
                </span>
                {c}
              </li>
            ))}
          </ul>
        )}

        {outcome && (
          <p className={cn("mt-auto rounded-[8px] px-3 py-2.5 text-[13px] font-bold leading-[1.6] text-ink", t.outcome)}>
            {outcome}
          </p>
        )}
      </div>
    </div>
  );
}
