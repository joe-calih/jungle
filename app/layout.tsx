import type { Metadata } from "next";
import Footer from "@/components/BlogFooter";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

import BackToTopButton from "@/components/BackToTopButton";

// Import Inter font from Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Studio Kenya",
  description: "Studio Kenya media company provides news coverage on a range of topics, including marketing, technology, social media, and business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
      
        <Header/>
      {children}
      <BackToTopButton />
      <Footer/>
      </body>
    </html>
  );
}
