# public/assets — リネーム対応表

モック `mockup/assets/` から移設。日本語名・スペースは ASCII 化した。
大容量の未使用ソース動画（`ヒーローセクション用 動画.mp4` / `250217_…ど田舎…研修.mov`）は移設していない。
Hero は最適化済み `hero-loop.mp4` を使用。

| モック元 | 公開パス | 用途 |
|---|---|---|
| `assets/hero-loop.mp4` | `/assets/hero-loop.mp4` | Hero 背景動画 |
| `assets/hero-poster.jpg` | `/assets/hero-poster.jpg` | Hero poster |
| `assets/img/_DSC1968.jpg` | `/assets/img/_DSC1968.jpg` | 経営研修 |
| `assets/img/_DSC1999.jpg` | `/assets/img/_DSC1999.jpg` | 継続コンサル |
| `assets/img/_DSC1943.jpg` | `/assets/img/_DSC1943.jpg` | 学びの場①合宿 |
| `assets/img/_DSC1526.jpg` | `/assets/img/_DSC1526.jpg` | 講師ポートレート |
| `assets/img/DSCF3352.jpg` | `/assets/img/DSCF3352.jpg` | 予備（未使用） |
| `assets/img/DSCF3353.jpg` | `/assets/img/DSCF3353.jpg` | 予備（未使用） |
| `assets/img/_DSC2074.jpg` | `/assets/img/_DSC2074.jpg` | 予備（未使用） |
| `assets/LP用画像/1.png` | `/assets/illust/empathy-1.png` | 共感チャット① |
| `assets/LP用画像/2.png` | `/assets/illust/empathy-2.png` | 共感チャット② |
| `assets/LP用画像/3.png` | `/assets/illust/empathy-3.png` | 共感チャット③ |
| `assets/LP用画像/4.png` | `/assets/illust/empathy-4.png` | 共感チャット④ |
| `assets/LP用画像/5.png` | `/assets/illust/overview-spot.png` | 全体像スポット |
| `assets/LP用画像/6.png` | `/assets/illust/svc-training.png` | 事業カード①研修 |
| `assets/LP用画像/7.png` | `/assets/illust/svc-newbiz.png` | 事業カード②新規事業 |
| `assets/LP用画像/8.png` | `/assets/illust/svc-regional.png` | 事業カード③地方創生 |
| `assets/LP用画像/9.png` | `/assets/illust/biz-incubation.png` | 新規事業開発支援 |
| `assets/LP用画像/10.png` | `/assets/illust/biz-regional.png` | 地方創生事業支援 |
| `assets/LP用画像/都会のオフィスビル.png` | `/assets/office-building.png` | 学びの場②出張 |

> 本番写真・許諾ロゴが確定したら、同名で差し替える（参照は実装側で固定済み）。

## トリミング対応表（透明余白を除去・2026-06-16）

イラスト10枚は、アルファ不透明 bbox で自動トリミングし `*-trim.png` を生成。参照は trim 版に差し替え（元PNGは保持）。

| 元（1000×1000） | trim 後 | サイズ |
|---|---|---|
| empathy-1.png | empathy-1-trim.png | 373×633 |
| empathy-2.png | empathy-2-trim.png | 335×612 |
| empathy-3.png | empathy-3-trim.png | 338×624 |
| empathy-4.png | empathy-4-trim.png | 409×628 |
| overview-spot.png | overview-spot-trim.png | 797×429 |
| svc-training.png | svc-training-trim.png | 800×630 |
| svc-newbiz.png | svc-newbiz-trim.png | 644×672 |
| svc-regional.png | svc-regional-trim.png | 794×801 |
| biz-incubation.png | biz-incubation-trim.png | 801×676 |
| biz-regional.png | biz-regional-trim.png | 800×702 |
