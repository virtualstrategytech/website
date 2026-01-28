import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { LeadCaptureModal } from "../components/LeadCaptureModal";

type CaseStudy1PageProps = {
  onBackToHome: () => void;
};

export const CaseStudy1Page = ({ onBackToHome }: CaseStudy1PageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
                Back to Home
              </button>
              <button
                onClick={handleOpenModal}
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
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto py-20 px-4 text-left">
        <h1 className="text-4xl font-bold text-blue-400 mb-8">
          Strategic Intelligence Acceleration in a Mid-Tier Consulting Firm
        </h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Context</h2>
        <p className="text-lg text-blue-100 mb-4">
          A UK-based market research and business strategy firm faced growing
          pressure to deliver faster, deeper insights to clients without scaling
          headcount or increasing operational overhead.
        </p>
        <h2 className="text-2xl font-semibold text-white mb-4">Challenge</h2>
        <ul className="list-disc pl-6 text-blue-100 mb-4">
          <li>
            Consultants spent over 40% of their time drafting client
            deliverables and fine-tuning prompts to extract actionable insights
            from internal knowledge databases and third-party data. Prompt
            engineering was a manual, inconsistent, and heavily dependent on
            individual expertise - causing delays and variable quality.{" "}
            <sup>1</sup>
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-white mb-4">Solution</h2>
        <p className="text-lg text-blue-100 mb-4">
          The firm deployed automation agents trained to generate, test, and
          refine prompts iteratively based on project goals, client tone, and
          historical data quality. <sup>2</sup> These agents included a prompt
          recommender fine-tuned based on successful past outputs, an
          LLM-integrated QA module to validate insights for factuality and
          relevance, and workflow agents that could autonomously re-route
          prompts based on response quality. <sup>3</sup>
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
                    60% reduction in time-to-insight from client kickoff to
                    initial presentation draft.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 bg-blue-800">
                <ul className="list-disc pl-5">
                  <li>
                    Consistency improved across deliverables due to automated
                    prompt standardization.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 bg-blue-800">
                <ul className="list-disc pl-5">
                  <li>
                    Upskilling curve lowered: new hires reached full
                    productivity in half the time.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 bg-blue-800">
                <ul className="list-disc pl-5">
                  <li>
                    Clients rated outputs as 25% more useful in strategy
                    development, particularly in trend spotting and early-stage
                    scenario modeling.
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
          Automation agents didn't replace consultants - they extended their
          strategic reach. The "missing middle" of prompt iteration and data
          wrangling was filled by agents, freeing human advisors to focus on
          storytelling, hypothesis testing, and client engagement.<sup>4</sup>
        </p>
        <h2 className="text-2xl font-semibold text-white mb-4">References</h2>
        <ul className="list-disc pl-6 text-blue-100 mb-8">
          <li>
            1. Kamaruddin, R. I. (2023). ChatGPT and the Future of Management
            Consulting. MIT Sloan School of Management.
          </li>
          <li>
            2. Sikha, V. K., Korada, L., & Syed, M. (2023). Mastering Prompt
            Engineering: Optimizing Interaction with Generative AI Agents.
          </li>
          <li>
            3. Liu, Y., et al. (2023). Summary of ChatGPT-Related Research and
            Perspective Towards the Future of Large Language Models.
          </li>
          <li>4. Daugherty, P. R., & Wilson, H. J. (2023). Human + Machine.</li>
        </ul>
      </main>

      <LeadCaptureModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};
