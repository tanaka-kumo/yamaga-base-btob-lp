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

// グローバルナビ＋追従CTA。
// モバイル：画面下部のフッターバー（視察予約＋資料請求）を常時表示（最下部のみ退避）。
// デスクトップ：ヒーローを過ぎてからヘッダーに追従CTAを出す。
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
      setAtBottom(y + vh > docH - 240);
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
      {/* グローバルナビ（固定ヘッダー：ヒーロー通過後に出現） */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-border-soft bg-paper/95 backdrop-blur transition-transform duration-300 ${
          shown ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex h-14 w-full max-w-[480px] items-center justify-between px-[22px] md:h-16 md:max-w-[1080px] md:px-8">
          <a href="#top" className="flex items-baseline gap-2" aria-label="トップへ">
            <span className="text-sm font-bold text-ink">YAMAGA BASE</span>
            <span className="hidden text-xs text-ink-soft sm:inline">法人向け</span>
          </a>

          {/* デスクトップ：横並びナビ＋追従CTA */}
          <nav className="hidden items-center gap-7 md:flex">
            {NAV_ITEMS.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-teal"
              >
                {it.label}
              </a>
            ))}
            <CtaButton location="nav_reserve" size="sm" chevron={false} className="min-h-10 px-5 text-sm">
              視察を予約する
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
              <SheetContent side="right" className="w-72 bg-paper">
                <SheetTitle className="px-1 pt-1 text-base text-ink">メニュー</SheetTitle>
                <nav className="mt-4 flex flex-col gap-1 px-1">
                  {NAV_ITEMS.map((it) => (
                    <SheetClose asChild key={it.href}>
                      <a
                        href={it.href}
                        className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-cream"
                      >
                        {it.label}
                      </a>
                    </SheetClose>
                  ))}
                  <div className="mt-3 flex flex-col gap-2 px-1">
                    <CtaButton location="nav_reserve">視察を予約する</CtaButton>
                    <CtaButton location="nav_document" variant="outline">
                      資料を請求する
                    </CtaButton>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* モバイル追従フッターバー（常時表示・最下部のみ退避） */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-border-soft bg-paper/95 px-3 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 backdrop-blur transition-all duration-300 md:hidden ${
          atBottom ? "pointer-events-none translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-[480px] gap-2">
          <div className="flex-[1.4]">
            <CtaButton location="sticky_reserve" chevron={false} className="px-3 text-[14px]">
              視察を予約する
            </CtaButton>
          </div>
          <div className="flex-1">
            <CtaButton location="sticky_document" variant="outline" chevron={false} className="px-3 text-[14px]">
              資料請求
            </CtaButton>
          </div>
        </div>
      </div>
    </>
  );
}
