import React from "react";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
type CaseStudy2PageProps = {
  onBackToHome: () => void;
  onOpenModal?: () => void;
};

export const CaseStudy2Page = ({
  onBackToHome,
  onOpenModal,
}: CaseStudy2PageProps) => {
  return (
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
      <main className="flex-grow max-w-4xl mx-auto py-20 px-4 text-left">
        <h1 className="text-4xl font-bold text-blue-400 mb-8">
          Digital Human Resources Transformation in a Global Professional
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
          prompt engineering automation to translate ambiguous client queries
          into structured workforce diagnostics.<sup>2</sup>
          Agents supported natural language-to-query translations, automated
          report generation, and self-updating risk dashboards.<sup>3</sup>
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
                  <li>
                    Reduced average project cycle from 6 weeks to 2.5 weeks.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 bg-blue-800">
                <ul className="list-disc pl-5">
                  <li>
                    Delivered personalized, context-specific prompts that
                    improved client engagement during workshops.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 bg-blue-800">
                <ul className="list-disc pl-5">
                  <li>
                    HR advisors reported 40% less time on data prep and 2x
                    increase in perceived strategic value of their work.
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
          Prompt automation agents became embedded co-creators in the firm's HR
          strategy playbook. They enabled fast prototyping of policy
          recommendations and supported clients in workforce transformation
          journeys with more confidence and evidence. <sup>4</sup>
        </p>
        <h2 className="text-2xl font-semibold text-white mb-4">References</h2>
        <ul className="list-disc pl-6 text-blue-100 mb-8">
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
      <div className="mt-auto">
        <SiteFooter grayLinks />
      </div>
    </div>
  );
};
