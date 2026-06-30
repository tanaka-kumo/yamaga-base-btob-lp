import { Frown, Annoyed, Meh, ArrowDown } from "lucide-react";
import { Section, Eyebrow, SectionTitle, SubTeal } from "@/components/site/section";
import { cn } from "@/lib/utils";

// 3連ペイン（260630_FV案.md）。温度を 困惑→深刻→無感情 で上げる。
const PAINS = [
  {
    Icon: Frown,
    color: "text-tan",
    lines: ["研修はやった。", "でも、現場は何も変わっていない…"],
    label: "学びが“やって終わり”になっている",
  },
  {
    Icon: Annoyed,
    color: "text-gold-d",
    lines: ["何から手をつければ？", "結局、誰も決めきれない…"],
    label: "大きい組織ほど、最初の一歩が出ない",
  },
  {
    Icon: Meh,
    color: "text-ink-soft",
    lines: ["戦略は立てた。", "なのに、数年そのまま…"],
    label: "“わかっている”が“動いている”に変わらない",
  },
];

export function Empathy() {
  return (
    <Section tone="cream-2">
      <Eyebrow>YOUR ISSUES</Eyebrow>
      <SectionTitle>
        研修・人材育成に関する、
        <br />
        こんなお悩みはありませんか？
      </SectionTitle>

      <div className="mt-8 flex flex-col gap-4 md:mt-12 md:grid md:grid-cols-3 md:gap-6">
        {PAINS.map((p) => (
          <div key={p.label} className="rounded-card bg-paper p-6 text-center shadow-card md:p-7">
            <p.Icon className={cn("mx-auto size-10", p.color)} strokeWidth={1.6} aria-hidden />
            <p className="mt-4 text-[14px] leading-[1.9] text-ink-soft">
              「{p.lines[0]}」
              <br />
              「{p.lines[1]}」
            </p>
            <ArrowDown className="mx-auto my-3.5 size-5 text-gold" aria-hidden />
            <p className="text-[15px] font-bold leading-[1.6] text-ink">{p.label}</p>
          </div>
        ))}
      </div>

      <SubTeal className="mt-12 text-[24px] md:text-[30px]">
        ここでのゴールは、「わかった」じゃない。
        <br />
        「動き出した」だ。
      </SubTeal>
    </Section>
  );
}
