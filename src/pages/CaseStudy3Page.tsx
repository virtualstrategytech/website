import React from "react";
import { ArrowLeft } from "lucide-react";
import { CaseStudy3Page } from "./pages/CaseStudy3Page";

const CaseStudy3Page = ({ onBackToHome }) => (
  <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen font-sans">
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
      <button
        onClick={onBackToHome}
        className="flex items-center text-blue-700 font-medium px-6 py-4"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Use Cases
      </button>
    </header>
    <main className="max-w-4xl mx-auto py-20 px-4 text-left">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Financial Services Advisory and Boutique Consulting Firms
      </h1>
      <h2 className="text-2xl font-semibold text-white mb-4">Context</h2>
      <p className="text-lg text-blue-100 mb-4">
        A consortium of boutique consulting firms specializing in financial
        services advisory sought scalable ways to offer high-impact insights to
        clients in wealth management, fintech, and regulatory strategy.
      </p>
      <h2 className="text-2xl font-semibold text-white mb-4">Challenge</h2>
      <p className="list-disc pl-6 text-blue-100 mb-4">
        High-value insights required time-intensive manual work, especially in
        drafting client-specific financial models, scenario narratives, and
        compliance interpretations.<sup>1</sup>
      </p>

      <h2 className="text-2xl font-semibold text-white mb-4">Solution</h2>
      <p className="text-lg text-blue-100 mb-4">
        Prompt engineering agents were introduced to generate tailored analysis
        prompts based on sector, client profile, and recent regulatory updates.
        Agents supported natural language-to-query translations, automated
        report generation, and self-updating risk dashboards. <sup>2</sup>
      </p>
      <h2 className="text-2xl font-semibold text-white mb-4">Results</h2>
      <ul className="min-w-full bg-white rounded-lg shadow my-8">
        <li className="px-4 py-2 text-left font-bold">
          Reduced proposal and reporting turnaround by 65%.
        </li>
        <li className="px-4 py-2 text-left font-bold">
          Improved subscription retention through data-driven personalization.
        </li>
        <li className="px-4 py-2 text-left font-bold">
          Expanded service bandwidth without hiring additional analysts.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold text-white mb-4">
        Strategic Impact
      </h2>
      <p className="text-lg text-blue-100 mb-4">
        Boutique firms leveled up their competitiveness with larger firms,
        offering faster delivery and deeper insights through semi-autonomous AI
        support.<sup>3</sup>
      </p>
      <h2 className="text-2xl font-semibold text-white mb-4">References</h2>
      <ul className="min-w-full bg-white rounded-lg shadow my-8 list-disc pl-6 text-blue-900">
        <li>
          1. Liu, H. Y., & Hayton, R. J. (2024). Firm-level Adoption of AI and
          Automation Technologies: Case Studies Report.
        </li>
        <li>
          2. Sikha, V. K., Korada, L., & Siramgari, D. (2023). Mastering Prompt
          Engineering: Optimizing Interaction with Generative AI Agents.
        </li>
        <li>
          3. Kamaruddin, R. I. (2023). ChatGPT and the Future of Management
          Consulting. MIT Sloan School of Management.
        </li>
      </ul>
    </main>
  </div>
);

export const CaseStudy3Page;
