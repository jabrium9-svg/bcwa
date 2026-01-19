import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bot Chee Wa Wa | Your Project. Your Pace. Your Vibe Jockey.",
  description: "Connect with skilled humans — vibe jockeys or agencies — who deliver through conversation. No ghosting, no lost context, work at your pace through Jabrium.",
  keywords: ["vibe jockey", "freelancer", "agency", "Jabrium", "async communication", "project help"],
  openGraph: {
    title: "Bot Chee Wa Wa",
    description: "Your project. Your pace. Your vibe jockey. Connect with skilled humans who deliver through conversation.",
    type: "website",
    url: "https://botcheewawa.com",
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
      </body>
    </html>
  );
}
