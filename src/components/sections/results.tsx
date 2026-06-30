import { Section, Eyebrow, SectionTitle } from "@/components/site/section";
import { LogoMarquee } from "@/components/site/logo-marquee";

export function Results() {
  return (
    <Section>
      <Eyebrow>OUR CLIENTS</Eyebrow>
      <SectionTitle>
        これまで、ご一緒して
        <br />
        きた企業様。
      </SectionTitle>
      <div className="mt-6 overflow-hidden">
        <LogoMarquee />
        <p className="mt-3.5 text-center text-[11px] text-[#a39c8c]">
          ※ 掲載は許諾をいただいた企業様のみ{" "}
          <span className="inline-block whitespace-nowrap rounded-[5px] border border-dashed border-gold bg-[#FBEFD7] px-[7px] text-[11.5px] font-bold text-gold-d">
            要確認：許諾企業リスト・ロゴデータ
          </span>
        </p>
      </div>

      <Eyebrow className="mt-[42px]">CASE MOVIE</Eyebrow>
      <SectionTitle>
        取り組みを、
        <br />
        動画でご覧ください。
      </SectionTitle>
      <div className="relative mt-5 aspect-video w-full overflow-hidden rounded-card bg-black shadow-card md:mx-auto md:mt-8 md:max-w-[820px]">
        <iframe
          src="https://www.youtube.com/embed/Bth_DS0HAS0"
          title="YAMAGA BASE 実績動画"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </Section>
  );
}
