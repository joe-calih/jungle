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
  title: "Jungle Foundation - Consume Kenyan by Choice",
  description: "Jungle Foundation is a non profit incentive that aims towards a noble course of positively impacting the society.",
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
