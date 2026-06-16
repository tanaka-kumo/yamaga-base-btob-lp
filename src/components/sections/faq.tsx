import { Section, Eyebrow, SectionTitle } from "@/components/site/section";

const QA = [
  { q: "施設を使わず自社で実施できますか？", a: "はい。御社拠点・オンラインでも可能です。" },
  { q: "研修後のフォローはありますか？", a: "はい。継続コンサルで実装・改善まで伴走します。" },
  { q: "研修以外（資金調達・マーケ・AI等）も相談できますか？", a: "はい、幅広く対応します。" },
  { q: "新規事業の相談だけでも可能ですか？", a: "はい、研修なしでも承ります。" },
  { q: "まず相談だけでも大丈夫ですか？", a: "もちろんです。お気軽にどうぞ。" },
];

export function Faq() {
  return (
    <Section id="faq" tone="cream-2">
      <Eyebrow>FAQ</Eyebrow>
      <SectionTitle>よくあるご質問。</SectionTitle>
      <div className="mt-[22px]">
        {QA.map((item, i) => (
          <details key={i} className="mt-2.5 overflow-hidden rounded-[14px] bg-paper shadow-card [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-start gap-2.5 px-[18px] py-4 text-sm font-bold text-ink">
              <span className="flex-none font-[family-name:var(--font-montserrat)] font-extrabold text-gold-d">Q</span>
              {item.q}
            </summary>
            <div className="px-[18px] pb-4 pl-10 text-[13px] leading-[1.8] text-ink-soft">{item.a}</div>
          </details>
        ))}
      </div>
    </Section>
  );
}
