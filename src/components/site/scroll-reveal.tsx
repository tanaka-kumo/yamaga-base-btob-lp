"use client";

import { useEffect } from "react";

// 軽量フェードアップ。重いライブラリは使わない。
// JS実行時のみ「初期=隠す→可視化」を行うため、JS無効でも内容は表示される（SEO/堅牢性）。
// prefers-reduced-motion 時／IO非対応時はアニメーションせず即可視。
export function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (els.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return; // そのまま表示

    const vh = window.innerHeight;
    els.forEach((el) => el.classList.add("reveal-init"));

    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            obs.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    els.forEach((el) => {
      // 既に見えている／アンカー先（ハッシュ遷移）の要素は即可視化、残りは監視。
      if (el.getBoundingClientRect().top < vh * 0.92) {
        el.classList.add("reveal-in");
      } else {
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, []);

  return null;
}
