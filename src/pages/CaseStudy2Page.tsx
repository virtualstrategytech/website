import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { LeadCaptureModal } from "../components/LeadCaptureModal";
import { useNavigate } from "react-router-dom";
import { SiteFooter } from "../components/SiteFooter";

export const CaseStudy2Page: React.FC = () => {
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
            Case Study 2
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6 leading-tight">
            Digital Human Resources Transformation in a Global Professional
            Services Network
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
              A multi-national advisory firm sought to transform its internal HR
              strategy consulting function into a digital-first model.
            </p>
          </section>

          {/* Challenge */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-200">
              Challenge
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                Manual synthesis of employee engagement data, compliance
                regulations, and retention risks consumed extensive time. HR
                consultants struggled with fragmented data sources and often
                relied on generic templates for strategic reports.{" "}
                <sup className="text-blue-600">1</sup>
              </p>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-200">
              Solution
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The firm implemented AI agents within its HR advisory tools that
              used prompt engineering automation to translate ambiguous client
              queries into structured workforce diagnostics.
              <sup className="text-blue-600">2</sup> Agents supported natural
              language-to-query translations, automated report generation, and
              self-updating risk dashboards.
              <sup className="text-blue-600">3</sup>
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">
                  Natural Language-to-Query
                </h3>
                <p className="text-sm text-gray-700">
                  Translation of ambiguous queries into structured diagnostics
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">
                  Automated Report Generation
                </h3>
                <p className="text-sm text-gray-700">
                  AI-powered synthesis of strategic HR reports
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">
                  Self-Updating Dashboards
                </h3>
                <p className="text-sm text-gray-700">
                  Real-time risk monitoring and workforce analytics
                </p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-200">
              Results
            </h2>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    58%
                  </div>
                  <div>
                    <h3 className="font-bold text-green-900 mb-1">
                      Project Cycle Reduction
                    </h3>
                    <p className="text-sm text-gray-700">
                      Reduced average project cycle from 6 weeks to 2.5 weeks
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
                      Enhanced Client Engagement
                    </h3>
                    <p className="text-sm text-gray-700">
                      Delivered personalized, context-specific prompts that
                      improved client engagement during workshops
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
                      Strategic Value Increase
                    </h3>
                    <p className="text-sm text-gray-700">
                      HR advisors reported 40% less time on data prep and 2x
                      increase in perceived strategic value of their work
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
                "Prompt automation agents became embedded co-creators in the
                firm's HR strategy playbook. They enabled fast prototyping of
                policy recommendations and supported clients in workforce
                transformation journeys with more confidence and evidence."
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
                1. Misra, M. M., David, A., & Syed, M. (2023).{" "}
                <em>
                  HR Digital Transformation: The Rise of the Digital Workforce,
                  Agents, and Co-Pilots
                </em>
                .
              </li>
              <li className="pl-4">
                2. Misra, M. M., David, A., & Syed, M. (2023). Ibid.
              </li>
              <li className="pl-4">
                3. Superagency Report. (2025).{" "}
                <em>
                  Superagency in the Workplace: Empowering People to Unlock AI's
                  Full Potential
                </em>
                .
              </li>
              <li className="pl-4">4. Superagency Report. (2025). Ibid.</li>
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
