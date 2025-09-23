import React from "react";

type Props = {
  onDemoClick?: () => void;
  onNavigate?: (v: "home" | "solutions" | "products") => void;
};

export default function SiteHeader({ onDemoClick, onNavigate }: Props) {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 shadow-lg font-sans">
      {/* left: logo */}
      <a href="#home" className="flex items-center gap-3">
        <img
          src="/Logo/VirtualStrategyTechLogoSVG.svg"
          alt="Virtual Strategy Tech Logo"
          className="h-10 w-auto drop-shadow-lg"
        />
        <span className="text-2xl font-bold text-white tracking-tight">
          Virtual Strategy Tech
        </span>
      </a>

      {/* right: nav */}
      <nav className="hidden md:flex items-center gap-8">
        <button
          className="text-slate-200 hover:text-white text-lg font-medium"
          onClick={() => onNavigate?.("home")}
        >
          About
        </button>
        <button
          className="text-slate-200 hover:text-white text-lg font-medium"
          onClick={() => onNavigate?.("solutions")}
        >
          Solutions
        </button>
        <button
          className="text-slate-200 hover:text-white text-lg font-medium"
          onClick={() => onNavigate?.("products")}
        >
          Products
        </button>
        <button
          onClick={onDemoClick}
          className="rounded-xl px-4 py-2 font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-lg"
        >
          Demo
        </button>
      </nav>
    </header>
  );
}
