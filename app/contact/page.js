import Contact from "../components/Contact";
import PageShell from "../components/PageShell";
import { pages } from "../lib/site";

const page = pages.find((item) => item.path === "/contact");

export const metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${page.title} | buildwithagam`,
    description: page.description,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <Contact />
    </PageShell>
  );
}
