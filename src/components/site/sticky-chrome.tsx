"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { CtaButton } from "@/components/site/cta-button";
import { NAV_ITEMS } from "@/lib/constants";

// ヒーローを通り過ぎたら出現する固定ヘッダー（グローバルナビ）。
// モバイル：ロゴ＋ハンバーガー＋追従フロートCTA（下部）。
// デスクトップ：ロゴ＋横並びナビ＋常設「相談」ボタン（フロートCTAは非表示）。
export function StickyChrome() {
  const [shown, setShown] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const docH = document.documentElement.scrollHeight;
      setShown(y > vh * 0.7);
      setAtBottom(y + vh > docH - 320);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      {/* グローバルナビ（固定ヘッダー） */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-border-soft bg-cream/95 backdrop-blur transition-transform duration-300 supports-[backdrop-filter]:bg-cream/80 ${
          shown ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex h-14 w-full max-w-[480px] items-center justify-between px-[22px] md:h-16 md:max-w-[1080px] md:px-8">
          <a href="#top" className="flex items-baseline gap-2" aria-label="トップへ">
            <span className="font-[family-name:var(--font-montserrat)] text-lg font-extrabold tracking-[0.04em] text-ink">
              bY
            </span>
            <span className="text-sm font-bold text-ink">YAMAGA BASE</span>
          </a>

          {/* デスクトップ：横並びナビ＋常設CTA */}
          <nav className="hidden items-center gap-7 md:flex">
            {NAV_ITEMS.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-gold-d"
              >
                {it.label}
              </a>
            ))}
            <CtaButton location="nav_header" size="sm" chevron={false} className="min-h-10 px-5 text-sm">
              無料で相談する
            </CtaButton>
          </nav>

          {/* モバイル：ハンバーガー */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                aria-label="メニューを開く"
                className="grid size-11 place-items-center rounded-lg text-ink"
              >
                <Menu className="size-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-cream">
                <SheetTitle className="px-1 pt-1 text-base text-ink">メニュー</SheetTitle>
                <nav className="mt-4 flex flex-col gap-1 px-1">
                  {NAV_ITEMS.map((it) => (
                    <SheetClose asChild key={it.href}>
                      <a
                        href={it.href}
                        className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-cream-2"
                      >
                        {it.label}
                      </a>
                    </SheetClose>
                  ))}
                  <div className="mt-3 px-1">
                    <CtaButton location="nav_drawer">無料で相談する</CtaButton>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* 追従フロートCTA（モバイルのみ。デスクトップはヘッダーの常設CTAを使う） */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 px-[22px] pb-[max(12px,env(safe-area-inset-bottom))] pt-2 transition-all duration-300 md:hidden ${
          shown && !atBottom
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-[480px]">
          <CtaButton location="sticky_float">無料で相談する</CtaButton>
        </div>
      </div>
    </>
  );
}
