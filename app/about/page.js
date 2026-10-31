import About from "../components/About";
import PageShell from "../components/PageShell";
import { pages } from "../lib/site";

const page = pages.find((item) => item.path === "/about");

export const metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${page.title} | buildwithagam`,
    description: page.description,
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <PageShell>
      <div className="bg-white py-28">
        <About />
      </div>
    </PageShell>
  );
}
