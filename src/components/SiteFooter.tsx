import React from "react";
import { FaLinkedin } from "react-icons/fa";
import BrandBlock from "./BrandBlock";

const SiteFooter: React.FC = () => (
  <footer className="bg-transparent w-full pt-6 pb-3 px-4 mt-16">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <BrandBlock />
      <div className="text-xs text-white opacity-80 text-center sm:text-right">
        &copy; {new Date().getFullYear()} Virtual Strategy Tech. All rights
        reserved.
        <a
          href="/contact"
          className="text-blue-100 hover:text-blue-400 text-sm"
        >
          Contact
        </a>
        <a
          href="/privacy-policy"
          className="text-blue-100 hover:text-blue-400 text-sm"
        >
          Privacy Policy
        </a>
        <a
          href="https://www.linkedin.com/company/yourcompany"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-100 hover:text-blue-400 text-sm"
        >
          <FaLinkedin className="inline-block" /> LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
