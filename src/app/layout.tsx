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
  title: "Bot Chee Wa Wa | Your Group. Your Conversation. Off-Platform.",
  description: "For Facebook Group Admins: maintain real, ongoing conversations with your members outside the algorithm. You built the community — now own the relationship.",
  keywords: ["Facebook group", "community management", "group admin", "Jabrium", "off-platform", "community engagement", "Facebook alternative"],
  openGraph: {
    title: "Bot Chee Wa Wa",
    description: "Your group. Your conversation. Off-platform. Take your Facebook community beyond the feed.",
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
