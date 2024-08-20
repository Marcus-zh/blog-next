import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "@/styles/globals.css";
import { Config } from "@/Config";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: Config.info.siteName,
  description: Config.info.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="flex justify-center items-start w-[100%] mt-20 gap-4">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
