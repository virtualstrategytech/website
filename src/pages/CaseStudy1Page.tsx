import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { LeadCaptureModal } from "../components/LeadCaptureModal";
import { useNavigate } from "react-router-dom";
import { SiteFooter } from "../components/SiteFooter";

export const CaseStudy1Page: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleBackToHome = () => navigate("/");

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
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
                onClick={handleBackToHome}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                style={{ fontSize: "22px" }}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </button>
              <button
                onClick={handleOpenModal}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105"
                style={{
                  fontSize: "26px",
                  paddingLeft: "1.5rem",
                  paddingRight: "1.5rem",
                  paddingTop: "0.75rem",
                  paddingBottom: "0.75rem"
                }}
              >
                Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-5xl mx-auto py-20 px-4">
        {/* Title Section */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-12 mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 text-blue-700 text-sm font-semibold mb-6">
            Case Study 1
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6 leading-tight">
            Strategic Intelligence Acceleration in a Mid-Tier Consulting Firm
          </h1>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-12 space-y-10">
          {/* Context */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-200">
              Context
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A UK-based market research and business strategy firm faced
              growing pressure to deliver faster, deeper insights to clients
              without scaling headcount or increasing operational overhead.
            </p>
          </section>

          {/* Challenge */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-200">
              Challenge
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                Consultants spent over 40% of their time drafting client
                deliverables and fine-tuning prompts to extract actionable
                insights from internal knowledge databases and third-party data.
                Prompt engineering was a manual, inconsistent, and heavily
                dependent on individual expertise - causing delays and variable
                quality. <sup className="text-blue-600">1</sup>
              </p>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-200">
              Solution
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The firm deployed automation agents trained to generate, test, and
              refine prompts iteratively based on project goals, client tone,
              and historical data quality.{" "}
              <sup className="text-blue-600">2</sup> These agents included a
              prompt recommender fine-tuned based on successful past outputs, an
              LLM-integrated QA module to validate insights for factuality and
              relevance, and workflow agents that could autonomously re-route
              prompts based on response quality.{" "}
              <sup className="text-blue-600">3</sup>
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">
                  Prompt Recommender
                </h3>
                <p className="text-sm text-gray-700">
                  Fine-tuned based on successful past outputs
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">
                  LLM-Integrated QA Module
                </h3>
                <p className="text-sm text-gray-700">
                  Validates insights for factuality and relevance
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">
                  Workflow Agents
                </h3>
                <p className="text-sm text-gray-700">
                  Autonomously re-route prompts based on response quality
                </p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-200">
              Results
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    60%
                  </div>
                  <div>
                    <h3 className="font-bold text-green-900 mb-1">
                      Time Reduction
                    </h3>
                    <p className="text-sm text-gray-700">
                      Reduction in time-to-insight from client kickoff to
                      initial presentation draft
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1">
                      Improved Consistency
                    </h3>
                    <p className="text-sm text-gray-700">
                      Consistency improved across deliverables due to automated
                      prompt standardization
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    2x
                  </div>
                  <div>
                    <h3 className="font-bold text-purple-900 mb-1">
                      Upskilling Curve Lowered
                    </h3>
                    <p className="text-sm text-gray-700">
                      New hires reached full productivity in half the time
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    25%
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-900 mb-1">
                      Client Satisfaction
                    </h3>
                    <p className="text-sm text-gray-700">
                      Clients rated outputs as more useful in strategy
                      development, particularly in trend spotting and
                      early-stage scenario modeling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Strategic Impact */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-200">
              Strategic Impact
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-xl">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "Automation agents didn't replace consultants - they extended
                their strategic reach. The 'missing middle' of prompt iteration
                and data wrangling was filled by agents, freeing human advisors
                to focus on storytelling, hypothesis testing, and client
                engagement."
                <sup className="text-blue-600 not-italic">4</sup>
              </p>
            </div>
          </section>

          {/* References */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-200">
              References
            </h2>
            <ol className="space-y-3 text-sm text-gray-600">
              <li className="pl-4">
                1. Kamaruddin, R. I. (2023).{" "}
                <em>ChatGPT and the Future of Management Consulting</em>. MIT
                Sloan School of Management.
              </li>
              <li className="pl-4">
                2. Sikha, V. K., Korada, L., & Syed, M. (2023).{" "}
                <em>
                  Mastering Prompt Engineering: Optimizing Interaction with
                  Generative AI Agents
                </em>
                .
              </li>
              <li className="pl-4">
                3. Liu, Y., et al. (2023).{" "}
                <em>
                  Summary of ChatGPT-Related Research and Perspective Towards
                  the Future of Large Language Models
                </em>
                .
              </li>
              <li className="pl-4">
                4. Daugherty, P. R., & Wilson, H. J. (2023).{" "}
                <em>Human + Machine</em>.
              </li>
            </ol>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={handleOpenModal}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Learn How We Can Help Your Firm
            <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
          </button>
        </div>
      </main>

      <LeadCaptureModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <SiteFooter onContactClick={handleOpenModal} />
    </div>
  );
};
