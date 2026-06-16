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
  metadataBase: new URL('https://www.wictronix.in'),
  title: {
    default: "WictroniX | Website Development Company India & B2B Marketing",
    template: "%s | WictroniX",
  },
  description: "WictroniX is an execution-first agency offering B2B Marketing, Website Development, and SEO/GEO in India. We bridge the gap between ideas and growth.",
  keywords: ["Website Development Company India", "Cross-Functional Growth for Business", "B2B Marketing", "Content Marketing Company India", "SEO GEO Company India"],
  openGraph: {
    title: "WictroniX | Website Development Company India & B2B Marketing",
    description: "WictroniX is an execution-first agency offering B2B Marketing, Website Development, and SEO/GEO in India.",
    url: 'https://www.wictronix.in',
    siteName: 'WictroniX',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'WictroniX Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "WictroniX | Website Development Company India",
    description: "WictroniX is an execution-first agency offering B2B Marketing, Website Development, and SEO/GEO in India.",
    images: ['/logo.png'],
  },
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