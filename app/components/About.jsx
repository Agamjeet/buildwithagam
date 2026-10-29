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
              I&apos;m an AI engineer and freelance data scientist passionate about building innovative solutions
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Specializing in AI, data science, and software development, I focus on automating complex tasks and optimizing systems. I aim to create impactful AI-powered applications and SaaS products while pursuing entrepreneurship. Outside of tech, I love traveling and exploring new places.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="avatar">
              <div className="w-64 rounded-full ring ring-blue-500 ring-offset-4 ring-offset-white overflow-hidden shadow-2xl">
                <Image src="/me-4.jpeg" alt="Agamjeet Singh" width={256} height={256} className="h-64 w-64 object-cover object-[center_20%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


