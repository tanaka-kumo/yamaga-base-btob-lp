import { Section, Eyebrow, SectionTitle } from "@/components/site/section";
import { MediaFrame } from "@/components/site/media-frame";

export function Instructor() {
  return (
    <Section tone="cream-2">
      <Eyebrow>Instructor</Eyebrow>
      <SectionTitle>
        世界水準の経営を、
        <br />
        地元から。
      </SectionTitle>

      <div className="mt-6 overflow-hidden rounded-card bg-paper shadow-card">
        <MediaFrame
          ratio="5/4"
          className="rounded-none shadow-none"
          src="/assets/img/_DSC1526.jpg"
          alt="やまがBASE株式会社 代表 中原功寛"
        />
        <div className="p-5">
          <span className="font-[family-name:var(--font-montserrat)] text-[11px] font-bold tracking-[0.06em] text-tan">
            INSTRUCTOR
          </span>
          <h3 className="mb-0.5 mt-1 text-[18px] font-bold text-ink">中原 功寛（なかはら・かつもと）</h3>
          <p className="mb-2 text-[12.5px] font-bold text-teal">やまがBASE株式会社 代表</p>
          <p className="text-[13.5px] leading-[1.8] text-ink-soft">
            山鹿市出身・旧千田小卒。米国大学を首席・早期卒業し、2018年ハーバード・ビジネス・スクールでMBA取得。地域×経営の現場で挑戦を続ける。
          </p>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-card bg-paper shadow-card">
        <div className="p-5">
          <span className="font-[family-name:var(--font-montserrat)] text-[11px] font-bold tracking-[0.06em] text-tan">
            TEAM
          </span>
          <h3 className="mb-0.5 mt-1 text-[18px] font-bold text-ink">分野を越えた専門家チーム</h3>
          <p className="text-[13.5px] leading-[1.8] text-ink-soft">
            やまがBASE㈱を軸に、<b className="text-ink">経営・AI・資金調達・マーケティング・食農・地方創生</b>など各領域の専門家と連携。御社の課題に合わせて最適なチームを編成します。
          </p>
          <p className="mt-2 text-[12.5px] text-[#9a9384]">
            <span className="inline-block whitespace-nowrap rounded-[5px] border border-dashed border-gold bg-[#FBEFD7] px-[7px] text-[11.5px] font-bold text-gold-d">
              要確認：連携先の社名・ロゴ公表可否
            </span>
          </p>
        </div>
      </div>
    </Section>
  );
}
