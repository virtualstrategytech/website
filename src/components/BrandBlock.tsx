import React from "react";

interface BrandBlockProps {
  theme?: "light" | "dark";
}

export default function BrandBlock({ theme = "dark" }: BrandBlockProps) {
  const isLight = theme === "light";

  return (
    <a
      href="/"
      className="inline-flex items-center gap-3 no-underline group transition-all duration-300"
      aria-label="Virtual Strategy Tech — Where analytics meets clarity"
    >
      <div className="relative">
        <img
          src="/Logo/VirtualStrategyTechLogoSVGTransparent.svg"
          alt="Virtual Strategy Tech logo"
          className={`h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 ${
            isLight ? "" : "filter brightness-0 invert"
          }`}
          loading="eager"
          decoding="async"
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-semibold text-lg tracking-wide group-hover:from-blue-300 group-hover:via-purple-400 group-hover:to-cyan-300 transition-all duration-300">
          Virtual Strategy Tech
        </span>
        <span
          className={`text-sm font-medium ${
            isLight ? "text-gray-600" : "text-blue-200"
          }`}
        >
          Where analytics meets clarity
        </span>
      </div>
    </a>
  );
}
