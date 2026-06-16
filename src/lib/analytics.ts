// 薄いトラッキングユーティリティ。
// GA4計測ID未設定（開発/プレビュー）時はノーオペ。本番でIDが入ると送信が稼働する。
import { GA4_ID } from "@/lib/constants";

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  if (!GA4_ID || typeof window.gtag !== "function") {
    if (process.env.NODE_ENV !== "production") {
      // 開発時は確認用にログのみ
      console.debug("[track:noop]", event, params);
    }
    return;
  }
  window.gtag("event", event, params);
}

// CTAクリック（全CTA共通）
export function trackCta(location: string, label: string) {
  track("cta_click", { location, label });
}
