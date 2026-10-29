"use client"
import GsapButton from "./GsapButton";

const links = [
  ["#about", "About"],
  ["#skills", "Skills"],
  ["#services", "Services"],
  ["#projects", "Projects"],
];

export default function Navbar() {
  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-base-100/70 backdrop-blur-md shadow-sm transition-shadow duration-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden hover:scale-105 transition-transform"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-base-100/90 backdrop-blur-md rounded-box w-52 animate-fade-in"
          >
            {links.map(([href, label]) => (
              <li key={href}><NavLink href={href}>{label}</NavLink></li>
            ))}
          </ul>
        </div>
        <a
          className="btn btn-ghost text-xl font-bold hover:scale-105 transition-transform"
          href="#top"
        >
          Agamjeet Singh
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {links.map(([href, label]) => (
            <li key={href}><NavLink href={href}>{label}</NavLink></li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <a href="#contact" className="hover:scale-105 transition-transform">
          <GsapButton
            text="Contact"
            startColor="#ffffff"
            fillColor="#3b82f6"
            textColor="#3b82f6"
            fillTextColor="#ffffff"
            size="small"
          />
        </a>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="relative px-2 py-1 transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </a>
  );
}
