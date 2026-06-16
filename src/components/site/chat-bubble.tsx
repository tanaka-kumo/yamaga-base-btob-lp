import Image from "next/image";

// 共感セクションのチャット吹き出し（モック .chat）。
// トリミング後イラストは縦長。アイコン枠を縦長・下揃えにし、吹き出しはテキストにフィット。
export function ChatBubble({
  src,
  alt,
  no,
  imgW,
  imgH,
  children,
}: {
  src: string;
  alt: string;
  no: string;
  imgW: number;
  imgH: number;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-end gap-2">
      <div className="w-[78px] flex-none">
        <Image
          src={src}
          alt={alt}
          width={imgW}
          height={imgH}
          loading="lazy"
          className="block h-auto w-full object-contain"
        />
      </div>
      <div className="relative mb-1 rounded-[16px_16px_16px_4px] bg-paper px-4 py-2.5 text-[13.5px] leading-[1.7] text-ink-soft shadow-card before:absolute before:-left-[7px] before:bottom-1.5 before:border-[7px] before:border-transparent before:border-l-0 before:border-r-paper before:content-['']">
        <span className="mr-[7px] font-[family-name:var(--font-montserrat)] text-[13px] font-extrabold italic text-tan">
          {no}
        </span>
        {children}
      </div>
    </div>
  );
}
