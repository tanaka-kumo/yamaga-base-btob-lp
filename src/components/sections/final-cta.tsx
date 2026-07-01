import { Section } from "@/components/site/section";
import { CtaPanel } from "@/components/site/cta-panel";
import { CtaButton } from "@/components/site/cta-button";

export function FinalCta() {
  return (
    <Section width="narrow">
      <CtaPanel center className="md:p-10">
        <h3 className="text-[26px] font-bold leading-[1.35]">
          「学んで終わり」を、
          <br />
          卒業しよう。
        </h3>
        <p className="mx-auto mt-3.5 text-[13.5px] leading-[1.8] text-white/80">
          研修も、新規事業も、合宿も。まずは御社の課題をお聞かせください。最適な組み合わせを一緒に設計します。
        </p>
        <div className="mt-[18px]">
          <CtaButton location="final" dataCta="free-consult">無料相談を予約する</CtaButton>
        </div>
        <p className="mt-2.5 text-center text-[12px] font-medium text-white/70">
          30分・オンライン可・無料
        </p>
      </CtaPanel>
    </Section>
  );
}
