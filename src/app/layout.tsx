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
  metadataBase: new URL("https://zobitools.com"),
  title: {
    default: "ZobiTools – Free Online Tools for Developers & Creators",
    template: "%s | Free Online Tools for Developers & Creators",
  },
  description: "ZobiTools offers free online tools including IP Address Checker, Slug Generator, JSON Format & Viewer, and Timestamp Converter along with helpful articles about web tools.",
  alternates: {
    canonical: "https://zobitools.com",
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
