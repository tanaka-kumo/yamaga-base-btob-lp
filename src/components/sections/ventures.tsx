import { Section, Eyebrow, SectionTitle } from "@/components/site/section";
import { BizCard } from "@/components/site/biz-card";

export function Ventures() {
  return (
    <Section id="ventures" tone="cream-2">
      <Eyebrow>New Business</Eyebrow>
      <SectionTitle>学びを、挑戦に変える。</SectionTitle>
      <div className="mt-6 flex flex-col gap-[18px]">
        <BizCard tone="gold" src="/assets/illust/biz-incubation-trim.png" alt="インキュベーションのイラスト" label="新規事業開発支援" title="インキュベーション">
          構想・検証・立ち上げを伴走。資金調達やマーケティングの知見も含めて。
        </BizCard>
        <BizCard tone="green" src="/assets/illust/biz-regional-trim.png" alt="地域から挑戦をのイラスト" label="地方創生事業支援" title="地域から挑戦を">
          地域の資源・課題を事業へ。食農・地域発信などの実践知をもとに後押し。
        </BizCard>
      </div>
    </Section>
  );
}
