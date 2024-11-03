import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "@/styles/globals.css";
import { Config } from "@/Config";
import { Analytics } from "@vercel/analytics/react";
import { Insights } from "@/components/vercel/SpeedInsights";
import NextTopLoader from "nextjs-toploader";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: Config.info.siteName,
  description: Config.info.description,
  alternates: {
    canonical: Config.info.siteUrl,
    types: {
      "application/rss+xml": [{ url: "feed.xml", title: "RSS 订阅" }],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NextTopLoader />
          <Navbar />
          <main className="flex justify-center items-start w-[100%] mt-20 gap-5">
            {children}
          </main>
        </Providers>
        <Analytics />
        <Insights />
      </body>
    </html>
  );
}
