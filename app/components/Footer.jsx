"use client";

import { motion } from "framer-motion";

const RESUME =
  "https://drive.google.com/file/d/1zC_cOOF1YzwwJQgd-NTtnMGX6O7qmgH_/view?usp=sharing";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white text-gray-800">
      <div className="flex flex-col items-center gap-4 px-4 py-6">
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <SocialIcon
            href="https://x.com/Agam_io"
            label="Twitter/X"
            svgPath="M18.244 2H21l-6.537 7.467L22 22h-6.406l-5.01-6.093L4.6 22H2l7.02-8.015L2 2h6.594l4.49 5.611L18.244 2zm-2.243 18h2.127L8.084 4H5.842l10.159 16z"
            color="from-blue-400 to-blue-600"
          />
          <SocialIcon
            href="https://www.linkedin.com/in/agamjeet-padda/"
            label="LinkedIn"
            svgPath="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.983 2.12 4.983 3.5zM.24 8.25h4.52V24H.24zM8.47 8.25h4.33v2.13h.06c.6-1.13 2.06-2.33 4.24-2.33 4.54 0 5.38 2.99 5.38 6.88V24h-4.71v-6.89c0-1.64-.03-3.75-2.29-3.75-2.29 0-2.64 1.79-2.64 3.64V24H8.47z"
            color="from-blue-600 to-blue-800"
          />
          <SocialIcon
            href="https://github.com/Agamjeet"
            label="GitHub"
            svgPath="M12 .5C5.73.5.9 5.33.9 11.6c0 4.88 3.17 9.02 7.57 10.48.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.08.67-3.73-1.31-3.73-1.31-.5-1.27-1.22-1.6-1.22-1.6-1-.69.08-.68.08-.68 1.11.08 1.7 1.14 1.7 1.14.98 1.68 2.58 1.19 3.2.91.1-.71.38-1.19.68-1.46-2.46-.28-5.05-1.23-5.05-5.47 0-1.21.43-2.19 1.14-2.97-.11-.28-.5-1.43.11-2.98 0 0 .95-.31 3.12 1.13.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.17-1.44 3.12-1.13 3.12-1.13.61 1.55.22 2.7.11 2.98.71.78 1.14 1.76 1.14 2.97 0 4.25-2.6 5.18-5.07 5.46.39.33.73.98.73 1.98 0 1.43-.01 2.58-.01 2.94 0 .29.2.63.76.52A10.7 10.7 0 0023.1 11.6C23.1 5.33 18.27.5 12 .5z"
            color="from-gray-600 to-gray-800"
          />
        </motion.div>
        <p className="text-center text-sm text-gray-500">
          Agamjeet Singh Padda
          <span className="mx-2 text-gray-300" aria-hidden="true">
            /
          </span>
          <a
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-300 underline-offset-4 hover:text-gray-900"
          >
            Resume
          </a>
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, svgPath, color }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`btn btn-circle h-14 w-14 border-0 bg-gradient-to-r text-white shadow-md ${color}`}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d={svgPath} />
      </svg>
    </motion.a>
  );
}
