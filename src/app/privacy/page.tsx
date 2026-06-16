import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Privacy Policy | WictroniX",
  description: "Privacy Policy for WictroniX.",
};

export default function Page() {
  return <ClientPage />;
}
