import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "WictroniX | B2B Cross-Functional Growth & Website Development India",
  description: "WictroniX is an execution-first agency offering B2B Marketing, Website Development, and SEO/GEO in India. We bridge the gap between ideas and growth.",
};

export default function Page() {
  return <ClientPage />;
}
