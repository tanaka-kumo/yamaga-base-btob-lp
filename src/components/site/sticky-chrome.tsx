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

// ヒーローを通り過ぎたら出現する固定ヘッダー（グローバルナビ）＋追従フロートCTA。
// 中央カラム幅（max-w-480）に合わせて中央寄せ。最下部（最終CTA付近）ではフロートCTAを隠す。
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
        className={`fixed left-1/2 top-0 z-50 w-full max-w-[480px] -translate-x-1/2 transition-transform duration-300 ${
          shown ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex h-14 items-center justify-between border-b border-border-soft bg-cream/95 px-[22px] backdrop-blur supports-[backdrop-filter]:bg-cream/80">
          <a href="#top" className="flex items-baseline gap-2" aria-label="トップへ">
            <span className="font-[family-name:var(--font-montserrat)] text-lg font-extrabold tracking-[0.04em] text-ink">
              bY
            </span>
            <span className="text-sm font-bold text-ink">YAMAGA BASE</span>
          </a>
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
      </header>

      {/* 追従フロートCTA */}
      <div
        className={`fixed bottom-0 left-1/2 z-40 w-full max-w-[480px] -translate-x-1/2 px-[22px] pb-[max(12px,env(safe-area-inset-bottom))] pt-2 transition-all duration-300 ${
          shown && !atBottom
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0"
        }`}
      >
        <CtaButton location="sticky_float">無料で相談する</CtaButton>
      </div>
    </>
  );
}
