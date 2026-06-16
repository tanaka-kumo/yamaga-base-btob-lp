import Image from "next/image";
import { cn } from "@/lib/utils";

type Ratio = "16/9" | "4/3" | "1/1" | "5/4" | "16/7" | "3/2";

const RATIO_CLASS: Record<Ratio, string> = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "5/4": "aspect-[5/4]",
  "16/7": "aspect-[16/7]",
  "3/2": "aspect-[3/2]",
};

// モック .media：角丸 var(--radius-card)・shadow-card・arch-tint地・object-cover。
export function MediaFrame({
  src,
  seed,
  alt,
  ratio = "16/9",
  priority = false,
  className,
}: {
  /** 公開アセットの絶対パス（例 /assets/img/_DSC1968.jpg） */
  src?: string;
  /** 旧：picsum 仮当て用シード（src 未指定時のフォールバック） */
  seed?: string;
  alt: string;
  ratio?: Ratio;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-card bg-arch-tint shadow-card",
        RATIO_CLASS[ratio],
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 480px) 100vw, 460px"
          priority={priority}
          className="object-cover"
        />
      ) : (
        // TODO: 差し替え — 本番写真（src を指定）
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://picsum.photos/seed/${seed ?? "yamaga"}/1200/700`}
          alt={alt}
          data-placeholder="true"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}
