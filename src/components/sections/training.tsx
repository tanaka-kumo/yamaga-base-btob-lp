import { Section, Eyebrow, SectionTitle, Lead } from "@/components/site/section";
import { MediaFrame } from "@/components/site/media-frame";
import { FitBox, FitRow } from "@/components/site/fit-box";
import { FeatureCard } from "@/components/site/feature-card";
import { CtaButton } from "@/components/site/cta-button";

const FEATURES = [
  { num: "01", color: "gold" as const, title: "世界水準を、カジュアルに。", body: "世界トップMBAで学ぶ経営知のエッセンスを、近場で・無理なく。御社の課題に合わせて編成します。", ph: "要確認：金額の最終表現" },
  { num: "02", color: "teal" as const, title: "心理的安全性が高い。", body: "「浅いと思われないか」——その心配はいりません。本音で問える場が、思考を深くします。" },
  { num: "03", color: "teal" as const, title: "何でも相談できる幅。", body: "戦略・マーケ・資金調達・新規事業・AI活用・食農まで。研修の中身そのものをカスタマイズします。" },
  { num: "04", color: "gold" as const, title: "研修で終わらせない。", body: "研修後もフォローアップ・コンサルで伴走。学びが「成果が出る」まで並走します。" },
];

export function Training() {
  return (
    <Section id="training" tone="paper">
      <Eyebrow>Management Training</Eyebrow>
      <SectionTitle>
        経営研修｜世界水準の
        <br />
        経営学を、カジュアルに。
      </SectionTitle>
      <MediaFrame
        className="mt-[22px]"
        ratio="16/9"
        src="/assets/img/_DSC1968.jpg"
        alt="世界各都市の時計が並ぶ YAMAGA BASE の壁面"
      />
      <Lead className="mt-6">
        代表・中原功寛（ハーバードMBA）が設計する、実務直結の経営研修。御社の課題に合わせてカスタマイズし、フレーム→試作→改善まで「使える」状態にします。
      </Lead>

      <FitBox title="こんな企業様へおすすめ">
        <FitRow>幹部・後継者に、体系的な経営知を身につけさせたい</FitRow>
        <FitRow>研修を「学んで終わり」にせず、実務・新規事業まで繋げたい</FitRow>
        <FitRow>戦略・資金調達・AI活用など、社内に相談できる人がいない領域を任せたい</FitRow>
      </FitBox>

      <Eyebrow className="mt-[46px]">FEATURES</Eyebrow>
      <SectionTitle>経営研修｜4つの特徴。</SectionTitle>
      <div className="mt-6 flex flex-col gap-[18px]">
        {FEATURES.map((f) => (
          <FeatureCard key={f.num} num={f.num} numColor={f.color} title={f.title}>
            {f.body}
            {f.ph && (
              <span className="ml-1 inline-block whitespace-nowrap rounded-[5px] border border-dashed border-gold bg-[#FBEFD7] px-[7px] text-[11.5px] font-bold text-gold-d">
                {f.ph}
              </span>
            )}
          </FeatureCard>
        ))}
      </div>

      <Lead className="mt-[18px] text-[12.5px]">
        対象：経営者／幹部／後継者育成　｜　費用：内容・規模に応じてお見積り{" "}
        <span className="ml-1 inline-block whitespace-nowrap rounded-[5px] border border-dashed border-gold bg-[#FBEFD7] px-[7px] text-[11.5px] font-bold text-gold-d">
          要確認：研修の正式名称・料金
        </span>
      </Lead>
      <div className="mt-[18px] text-center">
        <CtaButton location="training" size="sm">研修を相談する</CtaButton>
      </div>
    </Section>
  );
}
