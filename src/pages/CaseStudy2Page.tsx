import React from "react";
import { ArrowLeft } from "lucide-react";

type CaseStudy2PageProps = {
  onBackToHome: () => void;
};

export const CaseStudy2Page = ({ onBackToHome }: CaseStudy2PageProps) => (
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
        Digital Human Resoureces Transformation in a Global Professional
        Services Network
      </h1>
      <h2 className="text-2xl font-semibold text-white mb-4">Context</h2>
      <p className="text-lg text-blue-100 mb-4">
        A multi-national advisory firm sought to transform its internatl HR
        strategy consulting function into a digital-first model.
      </p>
      <h2 className="text-2xl font-semibold text-white mb-4">Challenge</h2>
      <p className="list-disc pl-6 text-blue-100 mb-4">
        Manual synthesis of employee engagement data, compliance regulations,
        and retention risks consumed extensive time. HR consultants struggled
        with fragmented data sources and often relied on generic templates for
        strategic reports. <sup>1</sup>
      </p>
      <h2 className="text-2xl font-semibold text-white mb-4">Solution</h2>
      <p className="text-lg text-blue-100 mb-4">
        The firm implemented AI agents within its HR advisory tools that used
        prompt engineering automation to translate ambiguous client queries into
        structured workforce diagnostics.<sup>2</sup>
        Agents supported natural language-to-query translations, automated
        report generation, and self-updating risk dashboards.<sup>3</sup>
      </p>
      <h2 className="text-2xl font-semibold text-white mb-4">Results</h2>
      <ul className="min-w-full bg-white rounded-lg shadow my-8">
        <li className="px-4 py-2 text-left font-bold">
          Reduced average project cycle from 6 weeks to 2.5 weeks.
        </li>
        <li className="px-4 py-2 text-left font-bold">
          Delivered personalized, context-specific prompts that improved client
          engagement during workshops.
        </li>
        <li className="px-4 py-2 text-left font-bold">
          HR advisors reported 40% less time on data prep and 2x increase in
          perceived strategic value of their work.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mb-4">
        Strategic Impact
      </h2>
      <p className="text-lg text-blue-100 mb-4">
        Prompt automation agents became embedded co-creators in the firm's HR
        strategy playbook. They enabled fast prototyping of policy
        recommendations and supported clients in workforce transformation
        journeys with more confidence and evidence. <sup>4</sup>
      </p>
      <h2 className="text-2xl font-semibold text-white mb-4">References</h2>
      <ul className="min-w-full bg-white rounded-lg shadow my-8 list-disc pl-6 text-blue-900">
        <li>
          1. Misra, M. M., David, A., & Syed, M. (2023). HR Digital
          Transformation: The Rise of the Digital Workforce, Agents, and
          Co-Pilots.
        </li>
        <li>2. Misra, M. M., David, A., & Syed, M. (2023). Ibid.</li>
        <li>
          3. Superagency Report. (2025). Superagency in the Workplace:
          Empowering People to Unlock AI’s Full Potential.
        </li>
        <li>4. Superagency Report. (2025). Ibid.</li>
      </ul>
    </main>
  </div>
);
