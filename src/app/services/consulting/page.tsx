import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Consulting Services | Cross-Functional Growth for Business",
  description: "Strategic consulting by WictroniX to align your tech and marketing. Execution-first consulting for startups and enterprises.",
};

export default function Page() {
  return <ClientPage />;
}
