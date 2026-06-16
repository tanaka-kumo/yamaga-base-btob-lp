import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WebVitals } from "@/components/web-vitals";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700", "900"],
});

// 英語ラベル・装飾数字（FEATURE 01 等）用。Montserrat（normal/italic）。
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "法人向け｜YAMAGA BASE",
  description:
    "世界水準の経営学を、自社のチームに。経営研修・新規事業開発・地方創生支援。熊本・山鹿の YAMAGA BASE（やまがBASE株式会社）。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSansJP.variable} ${montserrat.variable} antialiased`}>
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
        <WebVitals />
      </body>
    </html>
  );
}
