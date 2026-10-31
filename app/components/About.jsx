"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">About Me</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              I&apos;m <strong>Agamjeet Singh Padda</strong> — Agam, Agamjeet, or Agam Jeet Singh.
              I run <strong>buildwithagam</strong>.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              I&apos;m an AI engineer and freelance developer. I work remotely with clients
              worldwide — startups, clinics, and companies that need a site, a product,
              automation, or a voice receptionist that books calls.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              English is the working language. Time zones are fine. Email is enough to start.
              Specializing in AI, data science, and software development, I focus on automating
              complex tasks and shipping the thing your team can actually use.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="avatar">
              <div className="w-64 rounded-full ring ring-blue-500 ring-offset-4 ring-offset-white overflow-hidden shadow-2xl">
                <Image src="/me-4.jpeg" alt="Agamjeet Singh Padda, also known as Agam" width={256} height={256} className="h-64 w-64 object-cover object-[center_20%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


