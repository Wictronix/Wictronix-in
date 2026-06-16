import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Our Services | Website Development Company India & B2B Marketing",
  description: "WictroniX offers comprehensive services including Website Development, B2B Marketing, SEO/GEO, and Cross-Functional Growth for Business.",
};

export default function Page() {
  return <ClientPage />;
}
