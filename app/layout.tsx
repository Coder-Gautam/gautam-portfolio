import type { Metadata } from "next";
import { Space_Mono, DM_Sans } from "next/font/google";
import AnimatedCursor from "@/components/AnimatedCursor";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Gautam Choudhary - Web Developer | React & Next.js",
  description:
    "Portfolio of Gautam Choudhary, a Web Developer from Jaipur specializing in React.js, Next.js, WordPress, and modern UI/UX.",
  keywords: ["Web Developer", "React Developer", "Next.js", "Frontend Developer", "Jaipur", "Portfolio"],
  authors: [{ name: "Gautam Choudhary" }],
  creator: "Gautam Choudhary",
  openGraph: {
    title: "Gautam Choudhary - Web Developer",
    description: "Building fast, accessible, and beautiful web experiences.",
    url: "https://gautamchoudhary.dev",
    type: "website",
  },
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
      className={`${spaceMono.variable} ${dmSans.variable} scroll-smooth antialiased`}
    >
      <body className="bg-bg-primary text-text-primary font-sans min-h-screen flex flex-col selection:bg-accent selection:text-white">
        <AnimatedCursor />
        {children}
      </body>
    </html>
  );
}
