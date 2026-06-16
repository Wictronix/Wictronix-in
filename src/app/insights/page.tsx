import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Insights | Content Marketing Company India & B2B Growth Strategy",
  description: "Read the latest insights from WictroniX on B2B Marketing, SEO GEO, Website Development, and cross-functional growth strategies.",
};

export default function Page() {
  return <ClientPage />;
}
