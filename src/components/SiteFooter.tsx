import React from "react";
import { FaLinkedin } from "react-icons/fa";
import BrandBlock from "./BrandBlock";

interface SiteFooterProps {
  theme?: "light" | "dark";
  grayLinks?: boolean;
  onContactClick?: () => void; // NEW PROP
}

export const SiteFooter: React.FC<SiteFooterProps> = ({
  theme = "dark",
  grayLinks = false,
  onContactClick
}) => {
  const isLight = theme === "light";
  const useGrayLinks = grayLinks || isLight;

  const handleContactClick = () => {
    // removed preventDefault and ensure click reaches page (fix overlay/click-blocking)
    onContactClick?.();
  };

  return (
    <footer
      className={`relative z-50 w-full pt-16 pb-4 px-4 ${
        isLight ? "bg-white" : "bg-[#020C2C]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-2">
          <div className="flex-shrink-0">
            <BrandBlock theme={theme} />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-6 text-base">
              <button
                type="button"
                onClick={handleContactClick}
                className={`${
                  useGrayLinks
                    ? "text-gray-400 hover:text-gray-900"
                    : "text-blue-100 hover:text-white font-semibold"
                } transition-colors duration-300 cursor-pointer`}
              >
                Contact
              </button>
              <a
                href="/privacy-policy"
                className={`${
                  useGrayLinks
                    ? "text-gray-400 hover:text-gray-900"
                    : "text-blue-100 hover:text-white font-semibold"
                } transition-colors duration-300`}
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className={`${
                  useGrayLinks
                    ? "text-gray-400 hover:text-gray-900"
                    : "text-blue-100 hover:text-white font-semibold"
                } transition-colors duration-300`}
              >
                Terms of Service
              </a>
            </div>

            <div className="flex items-center">
              <a
                href="https://www.linkedin.com/company/virtual-strategy-tech"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${
                  useGrayLinks
                    ? "text-gray-400 hover:text-gray-900"
                    : "text-blue-100 hover:text-white font-semibold"
                } transition-colors duration-300 text-base`}
                aria-label="Follow us on LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-2 mb-0">
          <span
            className={`text-sm ${isLight ? "text-gray-500" : "text-blue-200"}`}
          >
            &copy; {new Date().getFullYear()} Virtual Strategy Tech. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
