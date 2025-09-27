import React from "react";
import { FaLinkedin } from "react-icons/fa";

const SiteFooter: React.FC = () => (
  <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-blue-100 pt-6 pb-3 px-4 mt-16">
    <div className="max-w-7xl mx-auto min-h-[80px] flex flex-col md:flex-row md:justify-between items-center gap-4">
      {/* Logo and tagline */}
      <div className="flex flex-col items-center md:items-start mb-2 md:mb-0">
        <img
          src="/Logo/VirtualStrategyTechLogoSVG.svg"
          alt="Virtual Strategy Tech"
          className="h-8 w-auto mb-1"
        />
        <span className="block tracking-tight opacity-90 text-blue-100">
          Where strategy meets prompt engineering.
        </span>
      </div>
      {/* Links */}
      <nav className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
        <a
          href="/about"
          className="hover:underline hover:text-emerald-300 transition-colors"
        >
          About
        </a>
        <a
          href="/contact"
          className="hover:underline hover:text-emerald-300 transition-colors"
        >
          Contact
        </a>
        <a
          href="/privacy-policy"
          className="hover:underline hover:text-emerald-300 transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="https://www.linkedin.com/company/virtual-strategy-tech"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-emerald-300 transition-colors"
        >
          <FaLinkedin className="w-4 h-4" />
          LinkedIn
        </a>
      </nav>
    </div>
  </footer>
);

export default SiteFooter;
