# PROGRESS / ハンドオフ（再開用サマリ）

> セッション間で文脈を失わないための「現状＋次の一手」まとめ。最終更新：2026-06-30。
> 詳細な意思決定の経緯は [decision-log.md](decision-log.md)、事実台帳は [facts-and-figures.md](facts-and-figures.md)、
> 直近のタスク計画は リポジトリ直下 `260630_BtoB-LP_ToDoリスト.md`（6/16ミーティング由来・次回7/1）。

---

## 0. これは何か（30秒）
熊本・山鹿の廃校活用施設 **YAMAGA BASE** の **法人向け(B2B)LP**。主役は **経営研修（MBAエッセンス）**、次点で **新規事業開発支援／地方創生事業支援**。制作：一朶の雲。
設計原則「ワクワク（情緒）×稟議が通る根拠（理性）」。代表＝**中原 功寛（なかはら・かつもと）**、ハーバードMBA。

---

## 1. リポジトリ / 環境
- **GitHub**：https://github.com/tanaka-kumo/yamaga-base-btob-lp （**Public**）／ブランチ `main` ／ `origin` 設定済み
- **コラボレーター**：`knakahara2-code` を **Admin で招待済み（承認待ち）**。※ToDo D-2 の「さやか追加」は未対応（要判断）
- **スタック**：Next.js 16 (App Router/Turbopack) ／ React 19 ／ TypeScript(strict) ／ Tailwind v4 ／ shadcn/ui ／ Node 20+
- **起動/検証**：`npm run dev`（port 3000、`.claude/launch.json` の名前 `lp`）／`npm run build`／`npx tsc --noEmit`／`npm run lint`。直近すべて緑。
- **デプロイ**：未（Vercel 想定。`{{要確認:ホスティング/独自ドメイン}}`）

## 2. デザインシステム（ボーダレス・モック忠実再現）
- **正＝** `mockup/borderless-tonemanner-mock.html`（仕様 `prompts/redesign/03_borderless-clone-spec.md`）。
- **トークン**：`src/app/globals.css` の `:root`（cream `#F6F1E6` / ink `#2E2C28` / teal `#1F7A70` / gold `#E3B24A` / tan `#B89150` / green `#5BBA82` / panel `#2E2D2B` / radius-card 20px / shadow-card・btn）。`@theme inline` 登録で `bg-cream text-teal text-gold bg-panel shadow-card rounded-card` 等が使える。
- **フォント**：`src/app/layout.tsx`。見出し＝Noto Sans JP 900、英語ラベル/装飾数字＝Montserrat（`--font-montserrat`、italic）。
- **レイアウト**：中央寄せの**モバイル幅カラム**（`max-w-[480px]`）を greige 地に。デスクトップは軽め仕上げ（角丸＋影＋上下余白、`src/app/page.tsx`）。

## 3. 実装構造
- ページ順＝`src/app/page.tsx`。セクション＝`src/components/sections/*`（hero / empathy / overview / results / consult / training / followup / ventures / venue / instructor / process / faq / final-cta）。
- 共通部品＝`src/components/site/*`：`cta-button`(マスタード丸ピル＋右シェブロン)／`section`(Eyebrow/SectionTitle/Lead/SubTeal)／`media-frame`／`biz-card`／`feature-card`(POINT/FEATURE)／`fit-box`／`chat-bubble`／`cta-panel`／`logo-marquee`／`footer`。
- **グローバルナビ＋追従CTA**＝`src/components/site/sticky-chrome.tsx`（ヒーロー通過後に出現、フロートCTAは最終CTA付近で自動退避。scroll listener で state 更新）。
- **モーション**＝`src/components/site/scroll-reveal.tsx`（フェードアップ。`prefers-reduced-motion`／JS無効で無効化・常に可読）。

## 4. アセット
- `public/assets/`：`hero-loop.mp4`(背景動画)＋`hero-poster.jpg`／`img/*.jpg`(施設写真)／`illust/*-trim.png`(透明余白トリミング済みイラスト)／`office-building.png`。対応表＝`public/assets/README.md`。
- 重いモック元動画は **`mockup/assets/` を .gitignore で除外**（最適化版が public にある）。

## 5. 事実ガバナンス（重要）
- 数字・社名・料金・実績・連絡先は `facts-and-figures.md`【確定】のみ。未確定は本文に `{{要確認:...}}` チップ表示。
- `src/lib/flags.ts`：`showStats / showClientLogos / showSeminarDate = false`（実績数値・導入ロゴ・説明会日程は確定まで非表示。**偽の数値を出さない**）。
- CTA収束先＝`src/lib/constants.ts` `CONTACT_URL`（暫定で既存 `https://www.yamagabase.com/inquiry`）。計測属性 `data-cta`：`consult_main / training / final / sticky_float / nav_drawer`。
- 計測＝`src/lib/analytics.ts`＋`src/components/web-vitals.tsx`（web-vitals→GA4）。GA4 ID は `NEXT_PUBLIC_GA4_ID`（未設定＝ノーオペ。設定で稼働）。

## 6. これまでの到達点（done）
- 戦略・設計ドキュメント一式（docs/01〜10）、コピー、構成案、要件定義。
- B2B方針転換（施設集客→「研修＋事業開発のパートナー」）を反映（decision-log 参照）。
- ボーダレス・モックのクローン実装（全13セクション）＋デスクトップ軽調整。
- イラストのトリミング／吹き出し詰め／Hero白ボックス。
- **グローバルナビ＋追従フロートCTA**（ToDo A-1/A-2）。
- GitHub 公開・push、コラボレーター招待（ToDo D-1/D-2）。

## 7. 次の一手（ToDo `260630_BtoB-LP_ToDoリスト.md` 準拠 / 7/1ミーティング向け）
**当日「動く現物」で議論するため、先に効くもの：**
- **B-1** ファーストビューの「顧客の課題」コピーたたき台（7/1で中原氏と磨く前提）
- **B-2/B-3/B-4** 研修コピーの差別化（グロービス等との差別化・「学ぶ→動く」）／選ばれる理由(Reason to choose)ブロック／サービス3本柱の整理＋下位メニュー
- **A-5** 詳細情報を別ページ/ディレクトリへ逃がす構造（LP本体を肥大化させない）
- **A-4** デスクトップ表示のさらなる作り込み（現状は軽め仕上げ）
**信頼性コンテンツ（C系・素材待ち）：**
- **C-1/C-2** テストモニアル・活用事例（例：JR九州ポートボール×イノベスタジオ、福岡企業10名研修）
- **C-5/C-6** 実績数値バッジ（flags.showStats）＋企業ロゴ（許諾後 flags.showClientLogos）→ 中原氏が許諾取得
- **C-7** メディア掲載実績の前面化／**C-8** 一部をリアル画像へ差し替え（合宿シーン等）
- **C-4** パートナー/実績導線（AISP 等）を下部に
**基盤（D系）：**
- **D-4** GA4/GTM 設計・実装（Firebase経由。フックは設置済み＝ID差すだけ）

## 8. 未確定（要確認）の主要束
研修の商品実体（正式名称/形態/対象/料金/継続コンサルの座組み）／実績数値・導入ロゴ許諾／B2B問い合わせ窓口／MBA金額の最終表現／許諾写真・ブランドガイド／敷地数値・駐車場 ほか。詳細は `facts-and-figures.md`【要確認】。

---
**再開時のおすすめ**：本ファイルと `260630_BtoB-LP_ToDoリスト.md`、`decision-log.md` を読む → `npm run dev` で現物確認 → 7/1向けに B-1/B-2/B-4 のコピー＆A-5構造から着手。
