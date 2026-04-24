import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorFollower from "@/components/CursorFollower";
import CustomScrollbar from "@/components/CustomScrollbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WictroniX | The Execution Layer Between Your Ideas and Growth",
  description: "A cross-functional team operating inside your growth objectives with founder-level accountability and agency-level speed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="selection:bg-accent/20 selection:text-accent relative">
      <body className={`${plusJakartaSans.variable} ${geistMono.variable} antialiased font-sans`}>
        <CursorFollower />
        <CustomScrollbar />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
