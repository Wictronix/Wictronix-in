import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "About WictroniX | Website Development & Content Marketing Company India",
  description: "Learn about WictroniX, a cross-functional growth team focused on execution, Website Development, and B2B Marketing for startups and MNCs.",
};

export default function Page() {
  return <ClientPage />;
}
