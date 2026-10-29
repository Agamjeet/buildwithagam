"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import GsapButton from "./GsapButton";
import AnimatedBackground from "./AnimatedBackground";

const EMAIL = "paddaagamjeetsingh@gmail.com";

function EmailPopup({ onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-900/50 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="email-popup-title"
        className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <h3 id="email-popup-title" className="text-2xl font-bold text-gray-800">
          Email me
        </h3>
        <p className="mt-4 break-all text-lg font-semibold text-blue-700 select-all">
          {EMAIL}
        </p>
        <div className="mt-6 flex justify-center">
          <GsapButton
            text="Open mail app"
            startColor="#dbeafe"
            fillColor="#3b82f6"
            textColor="#1d4ed8"
            fillTextColor="#ffffff"
            onClick={() => {
              window.location.href = `mailto:${EMAIL}`;
            }}
          />
        </div>
        <div className="mt-4 flex items-center justify-center gap-4 text-sm">
          <button type="button" onClick={copyEmail} className="font-semibold text-blue-700">
            {copied ? "Copied" : "Copy email"}
          </button>
          <button type="button" onClick={onClose} className="text-gray-500">
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function Contact() {
  const [emailOpen, setEmailOpen] = useState(false);

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 py-20">
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-white">Let&apos;s Connect</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hi —
            I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card border border-white/20 bg-white/10 shadow-xl backdrop-blur-md">
            <div className="card-body items-center text-center">
              <h3 className="card-title mb-2 text-white">Email Me</h3>
              <p className="mb-4 text-sm text-white/70">
                Quickest way to get in touch
              </p>
              <GsapButton
                text="Send Email"
                startColor="#ffffff"
                fillColor="#3b82f6"
                textColor="#3b82f6"
                fillTextColor="#ffffff"
                onClick={() => setEmailOpen(true)}
              />
            </div>
          </div>

          <div className="card border border-white/20 bg-white/10 shadow-xl backdrop-blur-md">
            <div className="card-body items-center text-center">
              <h3 className="card-title mb-2 text-white">Connect on LinkedIn</h3>
              <p className="mb-4 text-sm text-white/70">
                Let&apos;s network professionally
              </p>
              <a href="https://www.linkedin.com/in/agamjeet-padda/" target="_blank" rel="noopener noreferrer">
                <GsapButton
                  text="Visit LinkedIn"
                  startColor="#ffffff"
                  fillColor="#0a66c2"
                  textColor="#0a66c2"
                  fillTextColor="#ffffff"
                  onClick={() => {
                    window.open("https://www.linkedin.com/in/agamjeet-padda/", "_blank", "noopener,noreferrer");
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {emailOpen ? <EmailPopup onClose={() => setEmailOpen(false)} /> : null}
    </section>
  );
}
