import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorFollower from "@/components/CursorFollower";
import CustomScrollbar from "@/components/CustomScrollbar";
import FloatingContact from "@/components/FloatingContact";
import Preloader from "@/components/Preloader";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en" data-scroll-behavior="smooth" className="selection:bg-accent/20 selection:text-accent relative overflow-x-clip">
      <body className={`${quicksand.className} ${quicksand.variable} antialiased overflow-x-clip`}>
        <Preloader />
        <CursorFollower />
        <CustomScrollbar />
        <SmoothScroll>{children}</SmoothScroll>
        <FloatingContact />
      </body>
    </html>
  );
}