import { Metadata } from "next";
import ClientPage from "./ClientPage";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const capitalizedSlug = resolvedParams.slug.charAt(0).toUpperCase() + resolvedParams.slug.slice(1).replace(/-/g, ' ');
  return {
    title: `${capitalizedSlug} | WictroniX`,
    description: `Learn more about ${capitalizedSlug} at WictroniX, your partner for B2B Marketing and Website Development in India.`,
  };
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <ClientPage params={params} />;
}
