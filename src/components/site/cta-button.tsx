"use client";

import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackCta } from "@/lib/analytics";
import { CONTACT_URL } from "@/lib/constants";

// モック仕様：マスタード丸ピル＋右シェブロン。
type Variant = "gold" | "white" | "green" | "default" | "outline" | "secondary";
type Size = "block" | "sm" | "default" | "lg";

const VARIANT_CLASS: Record<"gold" | "white" | "green", string> = {
  gold: "bg-gold text-ink hover:bg-gold-d",
  white: "bg-paper text-ink border border-border-soft hover:bg-cream-2",
  green: "bg-green text-white justify-center hover:bg-green-d",
};

function resolveVariant(v: Variant): "gold" | "white" | "green" {
  if (v === "white" || v === "outline" || v === "secondary") return "white";
  if (v === "green") return "green";
  return "gold";
}

export function CtaButton({
  location,
  children,
  href = CONTACT_URL,
  variant = "gold",
  size = "block",
  chevron = true,
  className,
}: {
  location: string;
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  chevron?: boolean;
  className?: string;
}) {
  const isExternal = href.startsWith("http");
  const label = typeof children === "string" ? children : location;
  const v = resolveVariant(variant);
  const isSm = size === "sm";
  const centered = v === "green";

  return (
    <a
      href={href}
      data-cta={location}
      data-event="cta_click"
      onClick={() => trackCta(location, label)}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full font-bold shadow-btn transition-colors",
        centered ? "justify-center" : "justify-between",
        isSm
          ? "min-h-12 px-5 py-3 text-[15px]"
          : "min-h-[54px] w-full px-[22px] py-[15px] text-base",
        VARIANT_CLASS[v],
        className,
      )}
    >
      <span>{children}</span>
      {chevron && !centered && <ChevronRight className="size-[18px] shrink-0" strokeWidth={2.4} />}
    </a>
  );
}
