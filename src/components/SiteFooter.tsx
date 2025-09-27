import React from "react";
import { FaLinkedin } from "react-icons/fa";
import BrandBlock from "./BrandBlock";

interface SiteFooterProps {
  theme?: "light" | "dark";
}

const SiteFooter: React.FC<SiteFooterProps> = ({ theme = "dark" }) => {
  const isLight = theme === "light";

  return (
    <footer className="bg-transparent w-full py-8 px-4 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content - Single Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand Block */}
          <div className="flex-shrink-0">
            <BrandBlock theme={theme} />
          </div>

          {/* Right Side: Links + Social + Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Navigation Links */}
            <div className="flex items-center gap-3 text-xs">
              <a
                href="/contact"
                className={`${
                  isLight
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-blue-200/80 hover:text-white"
                } transition-colors duration-300`}
              >
                Contact
              </a>
              <span className={isLight ? "text-gray-400" : "text-blue-200/40"}>
                •
              </span>
              <a
                href="/privacy-policy"
                className={`${
                  isLight
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-blue-200/80 hover:text-white"
                } transition-colors duration-300`}
              >
                Privacy
              </a>
              <span className={isLight ? "text-gray-400" : "text-blue-200/40"}>
                •
              </span>
              <a
                href="/terms"
                className={`${
                  isLight
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-blue-200/80 hover:text-white"
                } transition-colors duration-300`}
              >
                Terms
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/virtual-strategy-tech"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 ${
                  isLight
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-blue-200/80 hover:text-white"
                } transition-colors duration-300`}
                aria-label="Follow us on LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
                <span className="text-xs">LinkedIn</span>
              </a>

              {/* Copyright inline */}
              <span
                className={`${
                  isLight ? "text-gray-400" : "text-blue-200/40"
                } hidden sm:inline`}
              >
                •
              </span>
              <span
                className={`text-xs ${
                  isLight ? "text-gray-500" : "text-blue-200/60"
                }`}
              >
                © {new Date().getFullYear()} VST
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
