import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nadoo AI Lab | Create Your World",
  description: "AI 도구, 자동화 파이프라인, 콘텐츠 솔루션을 연구하고 개발하는 Nadoo AI Lab입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="dark">
      <body className="antialiased min-h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
