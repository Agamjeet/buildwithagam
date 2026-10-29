'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import RadialFillButton from './GsapButton';

const projects = [
  {
    id: 9,
    title: "IndicCore",
    featured: "main",
    mark: "I",
    kicker: "AI-powered govt exam prep",
    headline: "Crack any govt exam.",
    headlineMuted: "On your first try.",
    description: "An analytics-first mock test platform for UPSC, SSC, and State PSC aspirants. It goes beyond a score to show why marks are lost — weak topics, guessing patterns, and elimination mistakes — so the next revision is obvious. <span class='font-bold text-blue-600'>Recognised in YourStory's VibeCode30 2026 among the top 30 AI products in India</span>.",
    technologies: ["AI", "Analytics", "Mock Tests", "EdTech"],
    github: null,
    live: "https://www.indiccore.com"
  },
  {
    id: 10,
    title: "Grow Red",
    featured: "next",
    mark: "G",
    kicker: "Reddit growth",
    headline: "Grow on Reddit.",
    headlineMuted: "Demo for now.",
    accent: "red",
    description: "A Reddit growth app you can open and sign in to. <span class='font-bold text-red-600'>Demo website for now</span>.",
    technologies: ["Reddit", "Growth"],
    github: null,
    live: "https://reddit-git-main-agamjeet-7688s-projects.vercel.app/#login"
  },
  { 
    id: 1, 
    title: "QuizKraft",
    featured: "next",
    accent: "blue",
    description: "An interactive quiz platform that makes learning fun and engaging. Create, share, and take quizzes with a modern, user-friendly interface, including AI-powered quiz generation. <span class='font-bold text-blue-600'>Demo website for now</span>.", 
    image: "/quiz.png",
    technologies: ["React", "Node.js", "MongoDB", "Auth.js", "Stripe.js", "OpenAI API"],
    github: null,
    live: "https://quizkraft-git-main-agamjeet-7688s-projects.vercel.app/dashboard/text-to-quiz"
  },
  {
    id: 11,
    title: "Mr. White Dental Studio",
    featured: "next",
    accent: "teal",
    mark: "M",
    kicker: "Dental clinic",
    headline: "Your perfect smile",
    headlineMuted: "starts here.",
    description: "A clinic website for Mr. White Dental Studio in Old Washermanpet, Chennai. It covers treatments, the clinic gallery, patient stories, and appointment booking. <span class='font-bold text-cyan-700'>Live website</span>.",
    technologies: ["Clinic Website", "Appointments", "Chennai"],
    github: null,
    live: "https://mr-white-dental-studio.vercel.app/"
  },
  { 
    id: 2, 
    title: "Discord E-commerce Support Bot", 
    description: "A Discord bot developed in collaboration with an e-commerce company to provide automated customer support. The bot is trained on the company's database using <span class='font-bold text-purple-600'>embeddings and AI</span> to deliver accurate and context-aware responses.", 
    image: "/discord.png",
    technologies: ["Discord.js", "Node.js", "MongoDB", "OpenAI API", "Embeddings"],
    github: "https://github.com/Agamjeet/disco_bot",
    live: null
  },
  { 
    id: 3, 
    title: "Notion Project Automation Bot", 
    description: "A Notion automation bot developed in collaboration with an <span class='font-bold text-green-600'>educator in Singapore</span> to streamline project management. Automatically generates and populates Notion pages for technical projects using <span class='font-bold text-orange-600'>AI (Gemini, Claude)</span> and PDF design documents. The bot reads project requirements, creates comprehensive documentation including background info, engineering designs, project plans, and daily content - <span class='font-bold text-red-600'>turning hours of manual work into minutes of automated processing</span>.", 
    image: "/notion.png",
    technologies: ["Python", "Notion API", "Claude AI", "Gemini AI", "PDF Processing"],
    github: "https://github.com/Agamjeet/notion-bot-",
    live: null
  },
  { 
    id: 4, 
    title: "WhatsApp Reminder Bot", 
    description: "A WhatsApp bot that sends event reminders from an iCloud calendar and collects responses. Developed in collaboration with a <span class='font-bold text-blue-600'>doctor and currently being used in their clinic</span> to automate appointment scheduling and confirmation workflows.", 
    image: "/whatsapp.png",
    technologies: ["JavaScript", "Node.js", "WhatsApp Web", "iCloud Calendar"],
    github: "https://github.com/Agamjeet/whatsapp_bot",
    live: null
  },
  { 
    id: 5, 
    title: "TextSnap Chrome Extension", 
    description: "A fun Chrome extension that transforms any selected text into beautiful images with multiple themes. Select text on any website, right-click, and create stunning visual content in seconds. <span class='font-bold text-purple-600'>Commercial product available for purchase</span> - perfect for social media sharing and content creation.", 
    image: "/T.png",
    technologies: ["Chrome Extension", "JavaScript", "CSS", "HTML"],
    github: null,
    live: "https://agams.gumroad.com/l/textsnap"
  },
  { 
    id: 6, 
    title: "Local Llama AI Assistant", 
    description: "A Streamlit web application that combines chat functionality with <span class='font-bold text-orange-600'>Llama 3.2 and OCR capabilities</span> using Llama 3.2 Vision for text extraction from images.", 
    image: "/llama.png",
    technologies: ["Python", "Streamlit", "Ollama", "Llama 3.2", "OCR"],
    github: "https://github.com/Agamjeet/local_llama",
    live: null
  },
  { 
    id: 7, 
    title: "Multilingual STT & TTS", 
    description: "A Streamlit web application that provides multilingual Speech-to-Text and Text-to-Speech capabilities using <span class='font-bold text-blue-600'>Google Cloud APIs with support for 10+ Indian languages</span>.", 
    image: "/tts.png",
    technologies: ["Python", "Streamlit", "Google Cloud", "STT", "TTS"],
    github: "https://github.com/Agamjeet/STT-TTS",
    live: null
  },
  { 
    id: 8, 
    title: "Don't Press The Button", 
    description: "A digital detox app inspired by the <span class='font-bold text-red-600'>Red Button Experiment</span>. Challenge yourself to resist the urge to check your phone and build real patience through mindful awareness.", 
    image: "/app.jpg",
    technologies: ["React Native", "Expo", "AsyncStorage", "JavaScript"],
    github: "https://github.com/Agamjeet/Dont-Press",
    live: null
  }
];

// Helper function to render description with highlights
const renderDescription = (description) => {
  const parts = description.split(/(<span[^>]*>.*?<\/span>)/g);
  return parts.map((part, index) => {
    if (part.startsWith('<span')) {
      const match = part.match(/<span[^>]*class=['"]([^'"]*)['"][^>]*>(.*?)<\/span>/);
      if (match) {
        const [, className, text] = match;
        return (
          <span key={index} className={className}>
            {text}
          </span>
        );
      }
    }
    return part;
  });
};

function ProjectLinks({ project }) {
  return (
    <div className="flex gap-3 mt-auto">
      {project.github && (
        <RadialFillButton
          text="GitHub"
          startColor="#f8f9fa"
          fillColor="#24292e"
          textColor="#24292e"
          fillTextColor="#ffffff"
          size="small"
          onClick={() => window.open(project.github, '_blank')}
        />
      )}
      {project.live && (
        <RadialFillButton
          text="Live Demo"
          startColor="#f8f9fa"
          fillColor="#0066cc"
          textColor="#0066cc"
          fillTextColor="#ffffff"
          size="small"
          onClick={() => window.open(project.live, '_blank')}
        />
      )}
    </div>
  );
}

function FeaturedProject({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-10 overflow-hidden rounded-2xl border-4 border-blue-500 bg-white shadow-xl"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative flex min-h-72 flex-col justify-center gap-8 bg-[#f7f9fc] p-8 text-gray-900">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.18) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                {project.mark}
              </span>
              <span className="text-lg font-semibold">{project.title}</span>
            </div>
            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
              Featured
            </span>
          </div>
          <div className="relative">
            <p className="mb-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              {project.kicker}
            </p>
            <h3 className="text-4xl font-bold leading-tight tracking-tight">
              {project.headline}
              <span className="block text-gray-400">{project.headlineMuted}</span>
            </h3>
          </div>
        </div>

        <div className="flex flex-col p-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Main project
          </p>
          <h3 className="mb-4 text-3xl font-bold text-gray-800">{project.title}</h3>
          <div className="mb-6 flex-grow leading-relaxed text-gray-600">
            {renderDescription(project.description)}
          </div>
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700"
              >
                {tech}
              </span>
            ))}
          </div>
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.article>
  );
}

const featuredAccents = {
  red: {
    border: "border-red-500",
    panel: "bg-red-50",
    mark: "bg-red-600",
    badge: "bg-red-600",
    kicker: "text-red-700",
    muted: "text-red-300",
    label: "text-red-600",
    chip: "bg-red-50 text-red-700",
    line: "rgba(248,113,113,0.2)",
  },
  blue: {
    border: "border-blue-500",
    panel: "bg-blue-50",
    mark: "bg-blue-600",
    badge: "bg-blue-600",
    kicker: "text-blue-700",
    muted: "text-blue-300",
    label: "text-blue-600",
    chip: "bg-blue-50 text-blue-700",
    line: "rgba(59,130,246,0.2)",
  },
  teal: {
    border: "border-cyan-600",
    panel: "bg-cyan-50",
    mark: "bg-cyan-700",
    badge: "bg-cyan-700",
    kicker: "text-cyan-800",
    muted: "text-cyan-400",
    label: "text-cyan-700",
    chip: "bg-cyan-50 text-cyan-800",
    line: "rgba(14,116,144,0.18)",
  },
};

function NextFeatured({ project }) {
  const accent = featuredAccents[project.accent] || featuredAccents.blue;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`flex h-full flex-col overflow-hidden rounded-2xl border-4 bg-white shadow-xl ${accent.border}`}
    >
      {project.image ? (
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <Image
            src={project.image}
            alt={project.title}
            width={640}
            height={192}
            className="h-full w-full object-cover object-center"
          />
        </div>
      ) : (
        <div className={`relative flex min-h-48 flex-col justify-center gap-4 p-6 text-gray-900 ${accent.panel}`}>
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              backgroundImage: `linear-gradient(to right, ${accent.line} 1px, transparent 1px), linear-gradient(to bottom, ${accent.line} 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg font-bold text-white ${accent.mark}`}>
                {project.mark}
              </span>
              <span className="text-lg font-semibold">{project.title}</span>
            </div>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${accent.badge}`}>
              Featured
            </span>
          </div>
          <div className="relative">
            <p className={`mb-2 text-sm font-medium ${accent.kicker}`}>{project.kicker}</p>
            <h3 className="text-3xl font-bold leading-tight">
              {project.headline}
              <span className={`block ${accent.muted}`}>{project.headlineMuted}</span>
            </h3>
          </div>
        </div>
      )}

      <div className="flex flex-grow flex-col p-6">
        <p className={`mb-2 text-sm font-semibold uppercase tracking-wide ${accent.label}`}>
          Featured
        </p>
        <h3 className="mb-3 text-2xl font-bold text-gray-800">{project.title}</h3>
        <div className="mb-4 flex-grow leading-relaxed text-gray-600">
          {renderDescription(project.description)}
        </div>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`rounded-full px-3 py-1 text-sm ${accent.chip}`}
            >
              {tech}
            </span>
          ))}
        </div>
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const featured = projects.find((project) => project.featured === "main");
  const nextFeatured = projects.filter((project) => project.featured === "next");
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on recently.
          </p>
        </div>

        {featured ? <FeaturedProject project={featured} /> : null}

        {nextFeatured.length > 0 ? (
          <div className="mb-10 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
            {nextFeatured.map((project) => (
              <NextFeatured key={project.id} project={project} />
            ))}
          </div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col ${
                project.id === 1 ? 'border-4 border-blue-500 hover:border-purple-500' :
                project.id === 2 ? 'border-4 border-indigo-500 hover:border-indigo-600' :
                project.id === 3 ? 'border-4 border-emerald-500 hover:border-emerald-600' :
                project.id === 4 ? 'border-4 border-green-500 hover:border-green-600' :
                project.id === 5 ? 'border-4 border-orange-500 hover:border-orange-600' :
                project.id === 6 ? 'border-4 border-amber-500 hover:border-amber-600' :
                project.id === 7 ? 'border-4 border-cyan-500 hover:border-cyan-600' :
                project.id === 8 ? 'border-4 border-red-500 hover:border-red-600' :
                'border-2 border-gray-200'
              }`}
            >
              {/* Project Image */}
              <div className="h-48 bg-gray-100 overflow-hidden relative">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={192}
                    className={`w-full h-full object-center hover:scale-105 transition-transform duration-300 ${[2, 3, 4, 5, 6, 7, 8].includes(project.id) ? 'object-contain' : 'object-cover'}`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500" style={{display: project.image ? 'none' : 'flex'}}>
                  <span className="text-white text-lg font-semibold">Project Image</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <div className="text-gray-600 mb-4 leading-relaxed flex-grow">
                  {renderDescription(project.description)}
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ProjectLinks project={project} />
              </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}