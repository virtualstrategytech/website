import React from "react";

export default function BrandBlock() {
  return (
    <a
      href="/"
      className="inline-flex items-center gap-3 no-underline"
      aria-label="Virtual Strategy Tech — Productivity Reimagined"
    >
      <img
        src="/Logo/mark.svg"
        alt="Virtual Strategy Tech logo"
        className="h-8 w-8"
        loading="eager"
        decoding="async"
      />
      <div className="flex flex-col leading-tight">
        <span className="text-white font-semibold text-base">
          Virtual Strategy Tech
        </span>
        <span className="text-slate-400 text-xs">Productivity Reimagined.</span>
      </div>
    </a>
  );
}
