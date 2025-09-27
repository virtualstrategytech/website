import React from "react";
import { FaLinkedin } from "react-icons/fa";
import BrandBlock from "./BrandBlock";

interface SiteFooterProps {
  theme?: "light" | "dark";
}

const SiteFooter: React.FC<SiteFooterProps> = ({ theme = "dark" }) => {
  const isLight = theme === "light";

  return (
    <footer className="bg-transparent w-full py-8 px-4 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-6">
          {/* Brand Block */}
          <div className="flex-shrink-0">
            <BrandBlock theme={theme} />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href="/contact"
              className={`${
                isLight
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-blue-200 hover:text-white"
              } transition-colors duration-300 font-medium`}
            >
              Contact
            </a>
            <a
              href="/privacy-policy"
              className={`${
                isLight
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-blue-200 hover:text-white"
              } transition-colors duration-300 font-medium`}
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className={`${
                isLight
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-blue-200 hover:text-white"
              } transition-colors duration-300 font-medium`}
            >
              Terms of Service
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/virtual-strategy-tech"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 ${
                isLight
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-blue-200 hover:text-white"
              } transition-colors duration-300 font-medium`}
              aria-label="Follow us on LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10">
          <div className="text-center">
            <p
              className={`text-sm ${
                isLight ? "text-gray-500" : "text-blue-200/80"
              }`}
            >
              &copy; {new Date().getFullYear()} Virtual Strategy Tech. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
