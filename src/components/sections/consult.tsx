import { Section } from "@/components/site/section";
import { CtaPanel, FreeBadge } from "@/components/site/cta-panel";
import { CtaButton } from "@/components/site/cta-button";

// SECTION 05：無料オンライン個別相談（メインCTA・濃色パネル）。
export function Consult() {
  return (
    <Section width="narrow">
      <CtaPanel className="md:p-9">
        <div className="border-b border-white/15 pb-3 text-xs text-white/70">
          御社に合うか、まず話してみる
        </div>
        <h3 className="mt-4 text-[26px] font-bold leading-[1.35]">
          無料オンライン
          <br />
          個別相談
          <FreeBadge />
        </h3>
        <p className="mt-3 text-[13.5px] leading-[1.8] text-white/80">
          説明会の日程を待たず、御社の課題に合わせて1対1で。オンラインで気軽にご相談いただけます。
        </p>
        <div className="mt-[18px]">
          <CtaButton location="consult_main">オンライン相談を予約する</CtaButton>
        </div>
        <p className="mt-3.5 text-[11px] leading-[1.6] text-white/55">
          ※ お問い合わせ窓口は準備中のため、現在は既存サイトの問い合わせ先へご案内します。
        </p>
      </CtaPanel>
    </Section>
  );
}
