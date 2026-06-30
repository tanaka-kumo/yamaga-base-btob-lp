import { Section, Eyebrow, SectionTitle, Lead } from "@/components/site/section";
import { MediaFrame } from "@/components/site/media-frame";

export function Followup() {
  return (
    <Section>
      <Eyebrow>Follow-up</Eyebrow>
      <SectionTitle>研修の、その先まで。</SectionTitle>
      <div className="md:mt-10 md:grid md:grid-cols-2 md:items-center md:gap-10">
        <MediaFrame
          className="mt-[22px] md:mt-0"
          ratio="16/9"
          src="/assets/img/_DSC1999.jpg"
          alt="bY ツリーの壁面と灯りのある YAMAGA BASE の空間"
        />
        <div>
          <Lead className="mt-6 md:mt-0 md:text-left">
            多くの研修は、終わった瞬間に止まります。私たちは違います。学んだフレームを自社の現場に落とし込み、試し、改善する——その過程を継続コンサルティングで伴走。
            <br />
            学びが「知っている」で終わらず、<b className="text-ink">「成果が出る」まで並走</b>します。
          </Lead>
          <Lead className="mt-2.5 text-[12.5px] md:text-left">
            <span className="inline-block whitespace-nowrap rounded-[5px] border border-dashed border-gold bg-[#FBEFD7] px-[7px] text-[11.5px] font-bold text-gold-d">
              要確認：継続コンサルの形態・契約単位・料金
            </span>
          </Lead>
        </div>
      </div>
    </Section>
  );
}
