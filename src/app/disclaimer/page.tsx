import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Disclaimer | WictroniX",
  description: "Legal disclaimer for WictroniX.",
};

export default function Page() {
  return <ClientPage />;
}
