import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Terms of Service | WictroniX",
  description: "Terms of Service for WictroniX.",
};

export default function Page() {
  return <ClientPage />;
}
