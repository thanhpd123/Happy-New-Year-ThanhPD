import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quà-Của-Bảnh",
  description: "Lời chúc năm mới 2025 của Thành-CR7 =))",
  openGraph: {
    title: "Quà-Của-Bảnh",
    description: "Lời chúc năm mới 2025 của Thành-CR7 =))",
    images: [
      {
        url: "/pictures/pic2.jpg",
      },
    ],
  },
  icons: {
    icon: "/pictures/icon2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
