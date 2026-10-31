import PageShell from "../components/PageShell";
import Services from "../components/Services";
import { pages } from "../lib/site";

const page = pages.find((item) => item.path === "/services");

export const metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `${page.title} | buildwithagam`,
    description: page.description,
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <Services />
    </PageShell>
  );
}
