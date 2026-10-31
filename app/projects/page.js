import PageShell from "../components/PageShell";
import Projects from "../components/Projects";
import { pages } from "../lib/site";

const page = pages.find((item) => item.path === "/projects");

export const metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `${page.title} | buildwithagam`,
    description: page.description,
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <Projects />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
