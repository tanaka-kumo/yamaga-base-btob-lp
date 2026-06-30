import { Section, Eyebrow, SectionTitle, Lead } from "@/components/site/section";

const STEPS = [
  { no: "01", t: "お問い合わせ" },
  { no: "02", t: "ヒアリング" },
  { no: "03", t: "プログラム設計" },
  { no: "04", t: "実施（合宿・研修）" },
  { no: "05", t: "フォローアップ・実装伴走" },
];

export function Process() {
  return (
    <Section id="flow" tone="paper">
      <Eyebrow>FLOW</Eyebrow>
      <SectionTitle>
        はじめ方は、
        <br />
        かんたんです。
      </SectionTitle>
      <div className="mt-6 flex flex-col gap-2.5 md:mt-10 md:flex-row md:gap-3">
        {STEPS.map((s) => (
          <div
            key={s.no}
            className="flex items-center gap-3.5 rounded-2xl bg-paper px-[18px] py-4 shadow-card md:flex-1 md:flex-col md:items-center md:gap-2 md:px-3 md:py-6 md:text-center"
          >
            <span className="w-[34px] flex-none text-center font-[family-name:var(--font-montserrat)] text-2xl font-extrabold italic text-gold md:w-auto md:text-3xl">
              {s.no}
            </span>
            <span className="text-[15px] font-bold text-ink md:text-[13.5px]">{s.t}</span>
          </div>
        ))}
      </div>
      <Lead className="mt-4 text-[12.5px]">
        費用：内容・規模・期間に応じてお見積り{" "}
        <span className="inline-block whitespace-nowrap rounded-[5px] border border-dashed border-gold bg-[#FBEFD7] px-[7px] text-[11.5px] font-bold text-gold-d">
          要確認：費用の見せ方
        </span>
      </Lead>
    </Section>
  );
}
