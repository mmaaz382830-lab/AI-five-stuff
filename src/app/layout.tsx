import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/components/Toast";
import BackToTop from "@/components/BackToTop";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Five Stuff AI Reel Studio",
  description: "Create funny Five Stuff reels in seconds. AI-powered scripts, hooks, captions and prompts for creators.",
  // #68: favicon.ico already lives at src/app/favicon.ico — Next.js picks it up automatically.
  // #69: TODO — add apple-touch-icon once public/apple-touch-icon.png is available.
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col text-[#e6eef8]">
        <ToastProvider>
          <Navbar />
          {/* #62 Page fade-in animation wraps every page */}
          <main className="flex-1 flex flex-col animate-fadeIn">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ToastProvider>
      </body>
    </html>
  );
}
