// 未確定コンテンツの表示フラグ。確定（facts-and-figures.md）するまで false で非表示にし、
// 偽の数値・実績を表示しない方針（docs/10 §11 ガバナンス）。
export const FLAGS = {
  showStats: false, // 実績数値（満足度/輩出数/受講者数）— 要確認
  showClientLogos: false, // 導入企業ロゴ — 許諾前提・要確認
  showSeminarDate: false, // 説明＆相談会の具体日程 — 要確認
} as const;
