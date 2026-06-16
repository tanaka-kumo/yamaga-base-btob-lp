# 03 ボーダレスアカデミー トンマナ模倣スペック（フォント・カード・ボタン・配色）

> **目的**：参考サイト（ボーダレスアカデミー／ボーダレスジャパン）の見た目を、**まず忠実に模倣**する。
> 前回は抽象的すぎて「ほぼ変わらない」結果になった。今回は **数値で固定した仕様書**として渡す。
> Claude Code は参考画像を見られないので、**ここに書いた hex / px / weight が唯一の正解**。推測で薄味にしないこと。
>
> ※ この段階では YAMAGA BASE のブランド色（アンバー等）はいったん脇に置き、**参考サイトの配色をそのまま当てる**。
> ブランド色への置き換えは、見た目が固まってから別途行う（トークンを差し替えるだけで済むよう変数化する）。

---

==== ここから貼り付け ====

あなたはトップクラスのUIエンジニアです。この Next.js + Tailwind v4 + shadcn/ui の LP を、
**下記スペック通りに「作り直し」ます。既存の見た目はいったん捨ててください**（微調整ではない）。

前回、抽象的な指示で「ほぼ変わらない」結果になりました。今回は**数値で固定**しています。
**色・角丸・余白・影・フォント・形状を、下の値の通りに実装**してください。薄味に寄せない、勝手に既存トーンを残さないこと。

目標の見た目（言葉で固定）：
- 下地は**温かいクリーム**。要素は**ふっくら大きな角丸**。
- **見出しは極太ゴシック**、サブ見出しは**深いティール（青緑）**、本文はやわらかいグレーで中央寄せ。
- ボタンは**マスタード色の完全な丸ピル**＋右端にシェブロン。
- 主役の訴求ブロックは**濃チャコールの角丸パネル**に白文字。
- カードは**白・大きい角丸・やわらかい影**。特徴は **POINT バッジ＋斜体の大きな数字**。

---

## 1. デザイントークン（`src/app/globals.css` の `:root` を、この値で置き換える）

```css
:root {
  /* 下地・面 */
  --cream:      #F6F1E6;   /* ページ背景 */
  --cream-2:    #EFE8D6;   /* 一段濃いクリーム（交互敷き） */
  --paper:      #FFFFFF;   /* カード面 */
  --arch-tint:  #E9EDEC;   /* アーチカードの淡いトーン */

  /* 文字 */
  --ink:        #2E2C28;   /* 見出し・主文字（温かい黒） */
  --ink-soft:   #595650;   /* 本文グレー */

  /* アクセント */
  --teal:       #1F7A70;   /* サブ見出し・数字・「起業」バッジ（深いティール） */
  --teal-d:     #145E56;
  --gold:       #E3B24A;   /* 主ボタン・「無料」バッジ・POINTバッジ（マスタード） */
  --gold-d:     #C9952F;
  --tan:        #B89150;   /* 英語ラベル・月桂樹・「Recommend」（くすみ金） */
  --green:      #5BBA82;   /* LINE・チェック（フレッシュグリーン） */
  --green-d:    #46A06C;
  --panel:      #2E2D2B;   /* 濃色CTAパネル・ヘッダータブ */
  --border-soft:#E7E0D0;

  /* 形・影 */
  --radius-card: 20px;
  --radius-pill: 9999px;
  --shadow-card: 0 8px 24px rgba(0,0,0,0.06);
  --shadow-btn:  0 4px 12px rgba(0,0,0,0.10);
}
```

→ `@theme inline` 側にも登録し、Tailwind から `bg-cream` `text-teal` `text-gold` `bg-panel` `shadow-card` 等で参照できるようにする。
**背景はページ全体を `--cream` に**。セクションは `cream → paper → cream-2` を交互に敷く。

## 2. フォント（`src/app/layout.tsx`）

- 日本語：**Noto Sans JP**（既存）。ウェイトは `400 / 500 / 700 / 900` を使う。**見出しは 900、サブ見出し 700、本文 400〜500**。
- 英語ラベル・装飾数字：**Montserrat** を `next/font/google` で追加し、`--font-montserrat` として公開（`weight: ["600","700","800"]`, `style: ["normal","italic"]`）。
  - 「Social Entrepreneur's Program」「Recommend」「POINT」「FEATURE」等の英字＝Montserrat 600、`letter-spacing: 0.14em`、色 `--tan`。
  - 「01」「02」…の装飾数字＝**Montserrat 800 italic**、色 `--teal`、サイズ大きめ（後述）。
  - 用意が難しければ Inter italic で代替可。ただし**数字は必ず斜体・極太・大きく**。
- 見出し：`line-height: 1.45`、`letter-spacing: 0.02em`。本文：`font-size: 15–16px`、`line-height: 1.9`。

## 3. ボタン（`src/components/site/cta-button.tsx` を作り直す）

**主ボタン（マスタード丸ピル）**
```
背景 var(--gold) / 文字 var(--ink)（濃色文字）/ font-weight 700
border-radius: var(--radius-pill)（完全な丸） / padding: 16px 24px
display:flex; align-items:center; justify-content:space-between;
右端に lucide の ChevronRight（または ">"） / box-shadow: var(--shadow-btn)
hover: 背景 var(--gold-d) にわずかに沈む
```
**副ボタン（白丸ピル）**：背景 `--paper` / 文字 `--ink` / 細い `--border-soft` 枠 / 同じ丸ピル＋右シェブロン。
**LINEボタン（緑丸ピル）**：背景 `--green` / 文字 白 / 中央寄せ / 同じ丸ピル。
※ すべて高さ 48px 以上。`data-cta` 等の計測属性は維持。

## 4. 濃色CTAパネル（説明会／相談会ブロック → `final-cta.tsx` と、必要なら専用部品）

```
.cta-panel {
  background: var(--panel); color: #fff;
  border-radius: var(--radius-card); padding: 24px;
}
```
構成（参考の説明会ブロックを再現）：
- 上部に小ラベル（白70%・12px）＋下に細い区切り線。
- 大見出し（白・900・24–28px）。見出し脇に **「無料」= 小さな丸ピル（背景 --gold / 文字 --ink）**。
- 日時・定員の行（白）。**日付だけ --gold** で強調。
- ボタンを縦に2つ（主＝マスタード、副＝白）、間に 12px の間隔。
- 最下部に注記（白55%・11px）。

## 5. 実績メダル（月桂樹 → `results.tsx`）

- 数字を**月桂樹（laurel wreath）の枝で左右から挟む**見せ方にする。月桂樹は**インラインSVG**（線色 `--tan`）で表現（簡易な左右対称の枝でよい）。
- 各メダル：上に小ラベル（例「講座満足度」12px）／中央に**大きな数字 900**（`--ink`）／右肩に小さく「以上!」。
- 中央のメダルだけ一回り大きく。**数値は未確認なので `{{要確認:◯◯}}` のプレースホルダ**にし、創作しない。
- SVG実装が重ければ、**金色の二重円リング**で枝を代替してよい（ただの線枠カードにはしない）。

## 6. サブ見出し・英語ラベル（共通 `Eyebrow` / `SectionTitle`）

- 英語ミニラベル：Montserrat 600・`--tan`・`letter-spacing .14em`・12px。中央寄せのセクションでは中央。
- 日本語サブ見出し（参考の「誰もが…挑戦できる社会へ。」相当）：**Noto Sans JP 700・`--teal`・22–26px・中央寄せ・line-height 1.6**。
- 本文リード：`--ink-soft`・中央寄せ・line-height 1.9。

## 7. アーチカード（3つの入口 → `overview.tsx` 等の3カード）

```
.arch-card {
  background: var(--arch-tint);
  border-radius: 200px 200px var(--radius-card) var(--radius-card); /* 上辺がアーチ＝門の形 */
  padding: 28px 20px 24px; text-align: center;
}
```
中身（上から）：
1. **ピル型バッジ**（例「起業」＝背景 --teal/白文字、「学ぶ」「触れる」も同様の丸ピル）。
2. フラットなイラスト枠（フリー素材 picsum 仮当て＋`{/* TODO:差し替え */}`、`data-placeholder="true"`）。
3. 小さな金「Recommend」（Montserrat・--tan）。
4. 太字タイトル（--ink・700）。
5. 説明文（--ink-soft・小さめ）。

## 8. POINT / FEATURE カード（特徴の列挙 → `training/seminar/ventures` 等）

```
.feature-card {
  background: var(--paper); border-radius: var(--radius-card);
  box-shadow: var(--shadow-card); padding: 28px 24px;
}
```
ヘッダー行（横並び）：
- **POINTバッジ**＝直径 56px の円、背景 `--gold`、中に白文字「POINT」（小）。
- その右に「FEATURE」（Montserrat・--tan・小）＋**大きな斜体数字「01」**（Montserrat 800 italic・`--teal`・40–56px）。
本文：
- タイトル（--ink・700・18px） → 本文（--ink-soft・line-height 1.8）。
- 番号は 01,02,03,04 のゼロ埋め。**既存コピーは維持し、器だけ差し替え**。

## 9. 「こんな方へおすすめ」ボックス（FitBox）

```
.fitbox { background: var(--paper); border: 2px solid var(--gold); border-radius: 16px; }
```
- 上部に**濃チャコールの角丸タブ**「こんな方へおすすめ」（背景 --panel・白文字）＋小さな人物アイコン。
- 中身：各項目を**淡グレーの角丸行**にし、左に**緑チェックの丸**（--green）＋テキスト。

## 10. 円形プログラム番号バッジ（任意・該当箇所があれば）

- 細い枠の円の中に、上に小さく「◯つの特別プログラム」、中央に**大きな番号**。円の下に小さなドット2つ。

---

## 進め方（小さく刻む・各ステップで停止）

1. **トークン（globals.css）＋フォント（layout.tsx）** を上記値で実装 → 差分提示で停止。
2. **共通部品**：ボタン／Eyebrow・SectionTitle／カード（SoftCard）／CTAパネル → 停止。
3. **特徴カード（POINT/FEATURE）／アーチカード／FitBox／実績メダル** → 停止。
4. **各セクションへ適用＋背景の交互敷き** → 停止。

各停止時に「変更ファイル」「適用した値が仕様通りか（色・角丸・フォント weight）」を短く報告。

## 守ること

- **数値は仕様通り**。薄味に寄せない。既存の濃ネイビーHero・平板カード・破線空箱は**残さない**。
- 未確認の数字・料金・社名・実績は**創作しない**（`{{要確認}}` のまま器だけ作る）。
- 写真は**フリー素材で必ず枠を埋める**（picsum 等／`data-placeholder="true"`／alt 必須）。破線の空箱は禁止。
- 計測属性（`data-cta`）・flags ロジック・確定コピーは壊さない。
- コントラスト 4.5:1 以上（特に --gold 上の文字、--cream 上の文字）。`prefers-reduced-motion` 尊重。

## 自己点検（仕様適合チェック）

- [ ] 背景が `--cream`／ボタンが**マスタードの完全な丸ピル＋右シェブロン**になっている
- [ ] サブ見出しが**ティール**、見出しが**900の極太**になっている
- [ ] 特徴が **POINTバッジ＋斜体の大きなティール数字** で表示されている
- [ ] 濃チャコールのCTAパネル／金border のFitBox が実装されている
- [ ] 破線の空箱が残っていない／写真はフリー素材で埋まっている
- [ ] 色・角丸・影・フォントが §1〜§9 の数値と一致している

まず **ステップ1（トークン＋フォント）の差分案だけ**を、上の数値の通りに提示してください。実装前に「この値で進めます」と一言確認すること。

==== ここまで貼り付け ====
