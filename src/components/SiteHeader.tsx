// src/components/SiteHeader.tsx
import React from "react";

type Props = {
  onDemoClick?: () => void;
  variant?: "home" | "solutions";
  onBackToHome?: () => void;
};

export default function SiteHeader({
  onDemoClick,
  variant = "home",
  onBackToHome,
}: Props) {
  return (
    <header
      className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40"
      style={{ height: "calc(6rem * 1.3)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex justify-between items-center"
          style={{ height: "calc(6rem * 1.3)" }}
        >
          {/* Logo: always visible, identical sizing */}
          <div className="flex items-center">
            <img
              src="https://virtualstrategytech.com/Logo/VirtualStrategyTechLogoSVG.svg"
              alt="Virtual Strategy Tech — Productivity Reimagined"
              className="h-36 w-auto object-contain"
            />
          </div>

          {/* Navigation: Home gets full nav, Solutions gets Back to Home + Demo */}
          <div className="flex items-center gap-10">
            {variant === "home" ? (
              <nav className="hidden md:flex items-center space-x-8">
                <a
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  style={{ fontSize: "22px" }}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  style={{ fontSize: "22px" }}
                >
                  Services
                </a>
                <a
                  href="#solutions"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  style={{ fontSize: "22px" }}
                >
                  Solutions
                </a>
                <a
                  href="#use-cases"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  style={{ fontSize: "22px" }}
                >
                  Use Cases
                </a>
                <button
                  onClick={onDemoClick}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105"
                  style={{
                    fontSize: "26px",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                  }}
                >
                  Demo
                </button>
              </nav>
            ) : (
              <nav className="hidden md:flex items-center space-x-8">
                <button
                  onClick={onBackToHome}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium bg-transparent border-none"
                  style={{
                    fontSize: "22px",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                  }}
                >
                  &larr; Back to Home
                </button>
                <button
                  onClick={onDemoClick}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105"
                  style={{
                    fontSize: "26px",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                  }}
                >
                  Demo
                </button>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
