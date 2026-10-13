import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header, Footer } from "@/components/Shell";
import "./globals.css";
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });
const sourceSans = Source_Sans_3({ variable: "--font-source-sans", subsets: ["latin"] });
export const metadata: Metadata = {
  title: { default: "TrendDrop | Never Miss a Viral TikTok Again", template: "%s | TrendDrop" },
  description: "Get the top 3 most viral TikToks in your niche delivered to your inbox every single morning. $19/month. Cancel anytime.",
  authors: [{ name: "FortuneCreations, LLC" }],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}>
    <body className="flex min-h-full flex-col font-sans"><Header />{children}<Footer /><Analytics /></body></html>);
}
