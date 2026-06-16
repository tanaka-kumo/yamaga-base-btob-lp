// サイト共通の定数。確定値は docs/facts-and-figures.md を正とする。

// B2B問い合わせ窓口は未確定（{{要確認:B2B問い合わせ窓口}}）。
// 確定までは既存サイトの問い合わせページへ送る。
export const CONTACT_URL = "https://www.yamagabase.com/inquiry";

// グローバルナビ（セクションへのアンカー）
export const NAV_ITEMS = [
  { label: "提供内容", href: "#overview" },
  { label: "経営研修", href: "#training" },
  { label: "事業開発", href: "#ventures" },
  { label: "学びの場", href: "#venue" },
  { label: "進め方", href: "#flow" },
  { label: "FAQ", href: "#faq" },
] as const;

// GA4 計測ID（未確定。設定されると計測が稼働する）
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? "";
