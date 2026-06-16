import { Check, User } from "lucide-react";

// 「こんな方へおすすめ」ボックス（モック .fitbox）：金枠＋濃チャコールのタブ＋緑チェック行。
export function FitBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="relative mt-[30px] rounded-2xl border-2 border-gold bg-paper px-[18px] pb-5 pt-[30px]">
      <div className="absolute -top-[17px] left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-panel px-[22px] py-2 text-sm font-bold text-white">
        <User className="size-4" />
        {title}
      </div>
      {children}
    </div>
  );
}

export function FitRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-3 flex items-start gap-2.5 rounded-xl bg-[#F4F1EA] px-3.5 py-3">
      <span className="mt-0.5 grid size-[22px] flex-none place-items-center rounded-full bg-green">
        <Check className="size-3" strokeWidth={3.2} color="#fff" />
      </span>
      <span className="text-[13.5px] font-medium leading-[1.6] text-ink">{children}</span>
    </div>
  );
}
