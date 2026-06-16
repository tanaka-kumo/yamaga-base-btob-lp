import { Section, Eyebrow, SectionTitle, SubTeal } from "@/components/site/section";
import { MediaFrame } from "@/components/site/media-frame";
import { cn } from "@/lib/utils";

function DuoCard({
  lead,
  media,
  label,
  title,
  children,
  small,
}: {
  lead?: boolean;
  media: React.ReactNode;
  label: string;
  title: string;
  children: React.ReactNode;
  small?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-card bg-paper shadow-card", lead && "border-2 border-gold")}>
      {media}
      <div className="p-5">
        <span
          className={cn(
            "inline-block rounded-full px-3.5 py-1 text-[12.5px] font-bold",
            lead ? "bg-gold text-ink" : "bg-teal text-white",
          )}
        >
          {label}
        </span>
        <h3 className="mb-1.5 mt-2.5 text-[17px] font-bold text-ink">{title}</h3>
        <p className="text-[13.5px] leading-[1.8] text-ink-soft">{children}</p>
        {small && <p className="mt-2 text-xs text-[#9a9384]">{small}</p>}
      </div>
    </div>
  );
}

export function Venue() {
  return (
    <Section id="venue" tone="paper">
      <Eyebrow>Two Ways</Eyebrow>
      <SectionTitle>学びの場は、選べます。</SectionTitle>
      <div className="mt-6 flex flex-col gap-[18px]">
        <DuoCard
          lead
          label="① YAMAGA BASE で（合宿型）"
          title="廃校という、大人の秘密基地"
          small="植木ICから約10分／空港から約40分／新幹線新玉名駅から約25分"
          media={
            <MediaFrame
              ratio="16/9"
              className="rounded-none shadow-none"
              src="/assets/img/_DSC1943.jpg"
              alt="廃校を活用した YAMAGA BASE のコワーキング空間"
            />
          }
        >
          熊本県山鹿市の廃校をまるごと。日常を離れ、チームで考え抜く1〜2泊。校舎・体育館・宿泊・食まで同一敷地、移動ゼロで。
        </DuoCard>
        <DuoCard
          label="② 御社へ伺います（出張・オンライン）"
          title="場所を問わず、同じ品質で"
          media={
            <MediaFrame
              ratio="16/9"
              className="rounded-none shadow-none"
              src="/assets/office-building.png"
              alt="都会のオフィスビル"
            />
          }
        >
          御社の拠点でも、オンラインでも。場所を問わず、同じ品質の学びを。県外・多忙な企業にも。
        </DuoCard>
      </div>
      <SubTeal className="mt-6 text-[18px]">
        施設を使うかどうかは、御社の目的しだい。
        <br />
        研修の価値は、場所に縛られません。
      </SubTeal>
    </Section>
  );
}
