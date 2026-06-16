# 01 Phase1 マスタープロンプト（質感・温度を寄せる）

> **使い方**：Claude Code に対し、まず `prompts/redesign/00_design-direction.md` を読ませてから、
> 下の「==== ここから貼り付け ====」以降をそのまま貼る。
> これは**土台づくり（トークン＋共通部品＋全体の質感）**のプロンプト。
> 個別セクションの作り込みは `02_section-prompt-library.md` を1つずつ流す。

---

==== ここから貼り付け ====

あなたは、経営者向けBtoB LP を担当する**シニアUIデザイナー兼フロントエンドエンジニア**です。
このリポジトリ（Next.js + Tailwind v4 + shadcn/ui）の YAMAGA BASE 法人向けLP を、
**今の「汎用テンプレ感」から、温かく作り込まれた信頼感のあるデザインへ**引き上げます。

参考にする質感は `prompts/redesign/00_design-direction.md` にすべて定義済みです。**まず必ず通読**してください。

## このフェーズでやること（Phase1：質感・温度のみ）

セクションの**構成・順番・確定コピーは変えません**。見た目の「体温」だけ上げます。具体的には：

1. **デザイントークンの刷新** — `src/app/globals.css` の `:root` を、`00_design-direction.md §3.1` の値で更新する。
   - 既存の `--brand-*` は活かしつつ、`--brand-cream` `--brand-gold` `--brand-green-d` `--shadow-soft` `--shadow-lift` `--ring-tint` を追加。
   - `--radius` を `0.75rem → 1rem` に拡大。
   - `@theme inline` 側にも、新トークンを Tailwind から `bg-brand-cream` `text-brand-gold` `shadow-soft` 等で参照できるよう登録する。

2. **共通部品の質感アップ**（既存コンポーネントの改修。ファイルは下記参照）
   - `src/components/site/section.tsx`
     - `Section` に `tone?: "cream" | "paper" | "tint-green" | "tint-amber"` を追加し、背景を交互に敷けるようにする（既存 `alt` は残してよい）。縦 padding を一段広げる（`py-16 sm:py-24` 目安）。
     - `Eyebrow` を**英語ミニラベル＝ゴールド（`text-brand-gold`）小文字キャップ・字間広め**に。必要なら左に短い罫やドットを添えて参考サイト風に。
   - `src/components/ui/card.tsx`（または共通 `SoftCard`）
     - 角丸 `rounded-2xl`、`shadow-soft`、ホバーで `shadow-lift` ＋ `-translate-y-0.5`、トランジションを標準化。
   - **`MediaFrame` 部品を新規作成**（`src/components/site/media-frame.tsx`）
     - 破線プレースホルダの置換用。`aspect` 指定・角丸・影・`object-cover`・`alt` 必須。
     - 本番写真未定のため `src` はフリー素材（例 `https://picsum.photos/seed/xxx/1200/700`）を当て、`data-placeholder="true"` と `{/* TODO: 差し替え */}` コメントを必ず付ける。
   - **`Pill` 部品を新規作成**（小バッジ：「主役」「無料」「起業」等に再利用）。

3. **破線プレースホルダの一掃** — リポジトリ全体の `border-dashed` な空箱画像枠を `MediaFrame`（フリー素材）に置換する。
   - 対象例：`hero.tsx` の象徴ビジュアル、`results.tsx` のロゴ枠 など。
   - ※ ロゴ枠など「許諾待ちで意図的に空」のものは、空箱のままでなく**淡いトーンの整った枠＋注記**に整える。

4. **全体の余白・背景リズム** — `src/app/page.tsx` のセクション並びに対し、`tone` を交互に当てて
   `cream → paper → tint → …` のリズムを作る（`00_design-direction.md §3.2`）。

5. **控えめなモーション** — スクロールで軽いフェードアップ（`prefers-reduced-motion` で無効化）。
   重いライブラリは入れない。CSS or 軽量な IntersectionObserver で。

## 触ってよい / いけない

- 触ってよい：`globals.css`、`components/site/*`、`components/ui/card.tsx`、各 `sections/*` の**クラス・マークアップの見た目**、`page.tsx` の `tone` 指定。
- 触らない：確定コピーの文言、セクションの順番・有無、`lib/flags.ts` のロジック、計測属性（`data-cta` 等）、`docs/` の確定事実。
- 未確認の数字・料金・社名・実績は**創作しない**。`{{要確認:...}}` や `flags` 非表示はそのまま、見た目だけ整える。

## 進め方（重要・小さく刻む）

このプロジェクトのルールは「**一度に大量を動かさず、1つ確認してから次へ**」です。次の順で、**各ステップごとに止まって差分を見せて**ください。

1. まず **トークン（`globals.css`）だけ** 更新 → 差分提示で一旦停止。
2. OKが出たら **共通部品（Section / Eyebrow / Card / MediaFrame / Pill）** → 停止。
3. OKが出たら **破線置換＋ page.tsx の tone リズム** → 停止。
4. 最後に **モーション** → 停止。

各ステップで「変更ファイル一覧」「ビフォーアフターの意図」「差し替え対象（`data-placeholder`）の数」を短く報告すること。

## 自己点検（各ステップ完了時）

- [ ] モバイル 375px で崩れない／タップ領域 48px 以上
- [ ] コントラスト 4.5:1 以上（特にクリーム地×文字、ゴールド×白）
- [ ] 破線の空箱が残っていない（すべて MediaFrame か整った枠）
- [ ] 確定コピー・計測属性・flags ロジックを壊していない
- [ ] 新トークンが `globals.css` に集約され、ハードコード色が増えていない
- [ ] `prefers-reduced-motion` でアニメーション無効化される

まず `00_design-direction.md` を読み、**ステップ1（トークン更新）の差分案だけ**を提示してください。実装前に方針を一言で確認してから着手すること。

==== ここまで貼り付け ====
