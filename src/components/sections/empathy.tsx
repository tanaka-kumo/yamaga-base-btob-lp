import { Section, Eyebrow, SectionTitle, Lead, SubTeal } from "@/components/site/section";
import { ChatBubble } from "@/components/site/chat-bubble";

// 画像は透明余白をトリミング済み（*-trim.png）。w/h はトリミング後の実寸。
const ISSUES = [
  { no: "01", img: "/assets/illust/empathy-1-trim.png", w: 373, h: 633, text: "幹部・後継者を育てたいが、経営を体系的に学べる場が県内に乏しい。" },
  { no: "02", img: "/assets/illust/empathy-2-trim.png", w: 335, h: 612, text: "戦略を腰を据えて考え抜く時間と、壁打ち相手がいない。" },
  { no: "03", img: "/assets/illust/empathy-3-trim.png", w: 338, h: 624, text: "新しい事業を生みたいが、社内に0→1を伴走できる知見がない。" },
  { no: "04", img: "/assets/illust/empathy-4-trim.png", w: 409, h: 628, text: "研修は単発で終わり、学びが実務にも継続にもつながらない。" },
];

export function Empathy() {
  return (
    <Section tone="cream-2">
      <Eyebrow>YOUR ISSUES</Eyebrow>
      <SectionTitle>
        その学び、半年後も
        <br />
        会社に残っていますか。
      </SectionTitle>
      <Lead className="mt-6">
        研修はやった。でも現場は変わらない——
        <br />
        そんな経験はありませんか。
      </Lead>
      <div className="mt-6 flex flex-col gap-3.5">
        {ISSUES.map((it) => (
          <ChatBubble key={it.no} src={it.img} no={it.no} imgW={it.w} imgH={it.h} alt="悩む経営者のイラスト">
            {it.text}
          </ChatBubble>
        ))}
      </div>
      <SubTeal className="mt-7">
        「学んで終わり」から、
        <br />
        「学んで動き出す」へ。
      </SubTeal>
    </Section>
  );
}
