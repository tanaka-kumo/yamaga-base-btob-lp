# 04 モックを実装に落とす（Claude Code 用プロンプト）

> 目的：完成した視覚モック `mockup/borderless-tonemanner-mock.html` を、**実コードベース（Next.js + Tailwind v4 + shadcn/ui）に忠実に移植**する。
> モックが「デザインの正解」。Claude Code は推測でアレンジせず、モックの見た目を再現することに集中させる。
>
> 使い方：下の `==== 貼り付け ====` の中だけを Claude Code に貼る。ステップごとに止まる設計。

---

==== 貼り付け ====

あなたはシニアフロントエンドエンジニアです。このリポジトリ（Next.js App Router + Tailwind v4 + shadcn/ui）の
法人向けLPを、**完成済みの視覚モックに忠実に作り直します**。

## 最重要
- **正解は `mockup/borderless-tonemanner-mock.html`。** まずこのファイルを開いて全体を読み、配色・フォント・角丸・影・余白・各セクションの構造を把握する。
- これは「微調整」ではなく「モックの再現」。**既存の見た目（濃ネイビーHero・平板カード等）は捨てる。** 勝手に独自アレンジしない。
- 色・角丸・フォント・コンポーネント仕様で迷ったら、モックのCSS値をそのまま採用する（`prompts/redesign/03_borderless-clone-spec.md` と一致）。

## やること

### 1. デザイントークン & フォント
- `src/app/globals.css` の `:root` を、モック冒頭の `:root`（`--cream` `--ink` `--teal` `--gold` `--tan` `--green` `--panel` `--radius-card` `--shadow-card` 等）に合わせて更新。`@theme inline` からも Tailwind で参照できるよう登録（`bg-cream` `text-teal` `shadow-card` など）。
- `src/app/layout.tsx` に **Montserrat** を `next/font/google` で追加（weight 600/700/800、italic 含む、`--font-montserrat`）。日本語は既存 Noto Sans JP。英語ラベル・装飾数字＝Montserrat、見出し＝Noto Sans JP 900。

### 2. アセットの移設
- モックの `mockup/assets/` 一式を **`public/assets/` に移動**（`hero-loop.mp4` `hero-poster.jpg` `img/` `LP用画像/`、`都会のオフィスビル.png`）。
- 参照は `/assets/...` の絶対パスに。**日本語ファイル名・スペースはASCIIにリネーム**して参照を更新（例：`LP用画像/1.png → /assets/illust/empathy-1.png`、`都会のオフィスビル.png → /assets/office-building.png`、`ヒーローセクション用 動画.mp4` は使わず最適化済み `hero-loop.mp4` を使用）。リネーム対応表をコメントで残す。
- ラスター画像は基本 `next/image`（`width`/`height` 指定）。ヒーローは `<video autoplay muted loop playsinline poster>`。`loading="lazy"`/`alt` を維持。

### 3. セクションを実装（モックの順番で `src/app/page.tsx` を構成）
モックの各セクションを、対応する `src/components/sections/*` に実装する（無い構造は新規作成・不要は外す。中身はモックを正とする）：

| モックのセクション | 実装先（目安） |
|---|---|
| Hero（背景動画） | `sections/hero.tsx` |
| 共感（チャット吹き出し＋イラスト1〜4） | `sections/empathy.tsx` |
| 全体像（イラスト5＋流れ図＋3事業カード 6/7/8） | `sections/overview.tsx` |
| 実績（ロゴ2段マーキー＋YouTube実績動画） | `sections/results.tsx` |
| 無料オンライン個別相談（濃色CTAパネル） | `sections/*`（新規 or final-cta を流用） |
| 経営研修（こんな方へおすすめ＋POINT/FEATURE 4枚） | `sections/training.tsx` |
| 継続コンサル | `sections/followup.tsx` |
| 新規/地方創生（事業カード 9/10） | `sections/ventures.tsx` |
| 学びの場2軸（合宿＝施設写真／出張＝オフィスビル） | `sections/venue.tsx` |
| 講師・体制（中原代表ポートレート） | `sections/instructor.tsx` |
| 進め方（5ステップ） | `sections/process.tsx` |
| FAQ（アコーディオン） | `sections/faq.tsx` |
| 最終CTA（濃色パネル） | `sections/final-cta.tsx` |
| フッター（やまがBASE株式会社＋住所のみ） | `site/footer.tsx` |

- 再利用パーツはモックの構造に合わせてコンポーネント化（ボタン＝マスタード丸ピル＋右シェブロン、チャット吹き出し、ビジネス事業カード=画像大きめ縦型、POINT/FEATUREカード、FitBox、ロゴマーキー、濃色CTAパネル）。
- マーキーは CSS アニメーション（`prefers-reduced-motion` で停止）。FAQ は `<details>` か shadcn accordion。

### 4. 守ること（壊さない）
- **本文コピーはモックの文言を使用**。未確定の数値・料金・社名・実績は `{{要確認}}` のまま（創作しない）。
- 既存の計測フック（CTA の `data-cta`/クリック計測）・`lib/flags.ts` のロジックは維持して各CTAに付け直す。
- CTAは問い合わせ／資料請求／視察に収束。LINE相談・施設視察ボタンはモック通り**無し**（オンライン相談のみ）。
- アクセシビリティ：コントラスト4.5:1以上、見出し階層（h1は1つ）、alt、フォーカス可視。モバイルファースト（375〜430px）。

## 進め方（小さく刻む・各ステップで停止）
1. **トークン＋フォント＋アセット移設** → 差分提示で停止。
2. **共通パーツ**（ボタン／チャット吹き出し／事業カード／POINT・FEATURE／FitBox／CTAパネル／マーキー） → 停止。
3. **各セクションを page.tsx の順で実装** → 停止。
4. **仕上げ**（モーション、レスポンシブ微調整、計測属性の再付与） → 停止。

各停止で「変更ファイル」「モックのどの値を当てたか」「アセットのリネーム対応表」を短く報告。

## 仕上げ確認
- `npm run dev` を起動し、**幅390pxのスクリーンショットを撮ってモック（`mockup/borderless-tonemanner-mock.html`）と並べて差分を自己点検**。色・角丸・フォント・各カードの形が一致しているか。
- 破線の空箱が残っていない／画像・動画が表示される／CTAがオンライン相談に収束している、を確認。

まず `mockup/borderless-tonemanner-mock.html` を読み、**ステップ1（トークン＋フォント＋アセット移設）の差分案だけ**を提示してください。実装前に「この方針で進めます」と一言確認すること。

==== 貼り付け ====
