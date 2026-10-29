"use client";

import GsapButton from "./GsapButton";

const services = [
  {
    title: "Web development",
    line: "A site for a clinic, studio, or company. Services, proof, and a way to book or enquire.",
    border: "border-blue-500",
    cta: "Build a website",
  },
  {
    title: "SaaS projects",
    line: "A product people can sign in to. Accounts, the real workflow, and a first version that ships.",
    border: "border-indigo-500",
    cta: "Build a product",
  },
  {
    title: "AI / SaaS consultation",
    line: "What to build, what to skip, and which model and stack fit, before a quarter goes into the wrong thing.",
    border: "border-purple-500",
    cta: "Book a consult",
  },
  {
    title: "Automation",
    line: "Reminders, support replies, and documents on WhatsApp, Discord, Notion, and calendars.",
    border: "border-emerald-500",
    cta: "Automate this",
  },
];

function goToContact() {
  window.location.hash = "contact";
}

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-800">Services</h2>
          <p className="text-lg text-gray-600">
            Skills are what I use. This is what you can hire me for. The projects below are the work itself.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className={`flex h-full flex-col rounded-2xl border-4 bg-white p-6 shadow-xl ${service.border}`}
            >
              <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
              <p className="mt-3 flex-grow leading-relaxed text-gray-600">{service.line}</p>
              <div className="mt-6">
                <a href="#contact">
                  <GsapButton
                    text={service.cta}
                    startColor="#ffffff"
                    fillColor="#3b82f6"
                    textColor="#3b82f6"
                    fillTextColor="#ffffff"
                    size="small"
                    onClick={goToContact}
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        <article className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-2xl border-4 border-cyan-500 bg-white shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="relative flex min-h-72 flex-col justify-center gap-6 bg-cyan-50 p-8 text-gray-900">
              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(14,116,144,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,116,144,0.18) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="relative">
                <p className="mb-4 inline-flex rounded-full bg-white px-3 py-1 text-sm font-medium text-cyan-800">
                  Voice AI
                </p>
                <h3 className="text-4xl font-bold leading-tight tracking-tight">
                  A receptionist that picks up.
                  <span className="block text-cyan-400">Then books the call.</span>
                </h3>
              </div>
            </div>
            <div className="flex flex-col p-8">
              <p className="mb-2 text-sm font-semibold tracking-wide text-cyan-700 uppercase">
                For the front desk
              </p>
              <p className="leading-relaxed text-gray-600">
                Answers like a receptionist. The usual questions, the hours, the
                services. Then books, moves, or confirms the appointment, and
                hands the call to a person when it should. English, and Indian
                languages.
              </p>
              <ul className="mt-5 space-y-2 text-gray-700">
                <li>Picks up, including after hours</li>
                <li>Books, reschedules, and confirms</li>
                <li>Knows when a human should take over</li>
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-gray-500">
                Same speech work as the multilingual voice app, and the same
                booking problem as the clinic reminder bot.
              </p>
              <div className="mt-6">
                <a href="#contact">
                  <GsapButton
                    text="Build a receptionist"
                    startColor="#ffffff"
                    fillColor="#0e7490"
                    textColor="#0e7490"
                    fillTextColor="#ffffff"
                    onClick={goToContact}
                  />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
