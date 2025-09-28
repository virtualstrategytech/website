import React from "react";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";

type CaseStudy3PageProps = {
  onBackToHome: () => void;
  onOpenModal?: () => void;
};

export const CaseStudy3Page = ({
  onBackToHome,
  onOpenModal,
}: CaseStudy3PageProps) => (
  <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
    {/* Header */}
    <header
      className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40"
      style={{ height: "calc(6rem * 1.3)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex justify-between items-center"
          style={{ height: "calc(6rem * 1.3)" }}
        >
          {/* Logo */}
          <div className="flex items-start">
            <img
              src="/Logo/VirtualStrategyTechLogoSVG.svg"
              alt="Virtual Strategy Tech - Productivity Reimagined"
              className="h-32 w-auto object-contain -mt-1"
            />
          </div>
          {/* Navigation */}
          <div className="flex items-center space-x-6">
            <button
              onClick={onBackToHome}
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              style={{ fontSize: "22px" }}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Use Cases
            </button>
            {onOpenModal && (
              <button
                onClick={onOpenModal}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105"
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
            )}
          </div>
        </div>
      </div>
    </header>
    <main className="max-w-4xl mx-auto py-20 px-4 text-left">
      <h1 className="text-4xl font-bold text-blue-400 mb-8">
        Financial Services Advisory and Boutique Consulting Firms
      </h1>
      <h2 className="text-2xl font-semibold text-white mb-4">Context</h2>
      <p className="text-lg text-blue-100 mb-4">
        A consortium of boutique consulting firms specializing in financial
        services advisory sought scalable ways to offer high-impact insights to
        clients in wealth management, fintech, and regulatory strategy.
      </p>
      <h2 className="text-2xl font-semibold text-white mb-4">Challenge</h2>
      <p className="text-lg text-blue-100 mb-4">
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
      <table className="min-w-full bg-blue-800 text-white rounded-lg shadow my-8">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-bold bg-blue-600 text-white rounded-t-lg border-b-2 border-white">
              Result
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 bg-blue-800">
              <ul className="list-disc pl-5">
                <li>Reduced proposal and reporting turnaround by 65%.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 bg-blue-800">
              <ul className="list-disc pl-5">
                <li>
                  Improved subscription retention through data-driven
                  personalization.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 bg-blue-800">
              <ul className="list-disc pl-5">
                <li>
                  Expanded service bandwidth without hiring additional analysts.
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-semibold text-white mb-4">
        Strategic Impact
      </h2>
      <p className="text-lg text-blue-100 mb-4">
        Boutique firms leveled up their competitiveness with larger firms,
        offering faster delivery and deeper insights through semi-autonomous AI
        support.<sup>3</sup>
      </p>
      <h2 className="text-2xl font-semibold text-white mb-4">References</h2>
      <ul className="list-disc pl-6 text-blue-100 mb-8">
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
    <div className="mt-auto">
      <SiteFooter theme="dark" />
    </div>
  </div>
);
