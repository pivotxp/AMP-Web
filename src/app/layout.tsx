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
  title: "Athlete Mode Performance | Elite Training",
  description: "Elite speed, strength, and athletic development for youth athletes and high-level personal training for adults in Waxhaw, NC.",
  openGraph: {
    title: "Athlete Mode Performance | Elite Training",
    description: "Elite speed, strength, and athletic development for youth athletes and high-level personal training for adults.",
    url: "https://web-eight-rose-57.vercel.app",
    siteName: "Athlete Mode Performance",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Athlete Mode Performance Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Athlete Mode Performance | Elite Training",
    description: "Elite speed, strength, and athletic development for youth athletes and high-level personal training for adults.",
    images: ["/images/og-image.png"],
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
