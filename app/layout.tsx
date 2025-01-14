import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Việt Nam - Vô Địch",
  description: "Lời chúc năm mới 2025 của Thành-dz =))",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/pictures/icon2.png" type="image/png" />
        <meta property="og:title" content={(metadata.title as string) || "Việt Nam - Vô Địch"} />
        <meta property="og:description" content={metadata.description || "Lời chúc năm mới 2025 của Thành-dz =))"} />
        <meta property="og:image" content="/pictures/icon1.png" />
        <meta property="og:url" content="https://happy-new-year-thanh-pd.vercel.app/" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
