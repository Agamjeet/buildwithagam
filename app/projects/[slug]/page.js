import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../components/Breadcrumbs";
import PageShell from "../../components/PageShell";
import { PERSON_NAME, SITE_URL } from "../../lib/site";
import { getProject, plainText, projects } from "../../lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} by ${PERSON_NAME}`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | buildwithagam`,
      description: project.summary,
      url: `/projects/${project.slug}`,
    },
  };
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${SITE_URL}/projects/${project.slug}`,
    creator: { "@type": "Person", name: PERSON_NAME, url: SITE_URL },
    keywords: project.technologies.join(", "),
  };

  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-4 py-28">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path: `/projects/${project.slug}` },
          ]}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <p className="text-sm font-semibold text-blue-700">{project.kicker || "Project"}</p>
        <h1 className="mt-2 text-4xl font-bold text-gray-900">{project.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">{plainText(project.description)}</p>
        {project.image ? (
          <div className="relative mt-8 h-64 overflow-hidden rounded-2xl bg-gray-100">
            <Image src={project.image} alt={`${project.title} by ${PERSON_NAME}`} fill className="object-contain" />
          </div>
        ) : null}
        <ul className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-800">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
              Open live site
            </a>
          ) : null}
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
              View source
            </a>
          ) : null}
          <a href="/contact" className="text-gray-800 underline">
            Hire for similar work
          </a>
        </div>
      </article>
    </PageShell>
  );
}
