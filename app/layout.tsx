import type { Metadata } from "next";
import Footer from "@/components/BlogFooter";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

// Import Inter font from Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Semdeals",
  description: "Generated by create next app",
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
      <Footer/>
      </body>
    </html>
  );
}