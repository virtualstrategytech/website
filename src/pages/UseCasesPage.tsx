import React, { useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Search } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { LeadCaptureModal } from "../components/LeadCaptureModal";
import HeroVortex from "../components/HeroVortex";

interface UseCasesPageProps {
  onBackToHome: () => void;
  onNavigateToCaseStudy1: () => void;
  onNavigateToCaseStudy2: () => void;
  onNavigateToCaseStudy3: () => void;
  onNavigateToResearchStudy: () => void;
}

export const UseCasesPage: React.FC<UseCasesPageProps> = ({
  onBackToHome,
  onNavigateToCaseStudy1,
  onNavigateToCaseStudy2,
  onNavigateToCaseStudy3,
  onNavigateToResearchStudy,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden scroll-smooth min-h-screen flex flex-col">
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
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-1.5 rounded-lg font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105"
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

      {/* HERO (lighter but consistent, no orb) */}
      <HeroVortex
        variant="inner"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-100 text-lg font-medium mb-8 shadow-lg animate-fade-in">
            <BookOpen className="w-5 h-5 mr-2" />
            <span
              style={{
                fontSize: "22px",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              Use Cases
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-slide-up">
            Explore Real-World{" "}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
              Use Cases
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up delay-200">
            See how these solutions drive results in real organizations. Dive
            into case studies and research to discover these innovative
            strategies.
          </p>

          {/* HERO CARDS */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
            {/* Case Studies */}
            <div
              className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 w-80 cursor-pointer"
              onClick={() => scrollToId("case-study-summaries")}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Case Studies
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                See how clients achieved measurable results with intelligent
                upskilling and automation.
              </p>
              <button
                className="inline-flex items-center px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToId("case-study-summaries");
                }}
              >
                View Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Research */}
            <div
              className="group bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 w-80 cursor-pointer"
              onClick={() => scrollToId("research-study-summaries")}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Research
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Explore research on prompt engineering upskilling and workforce
                performance elevation.
              </p>
              <button
                className="inline-flex items-center px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-md transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToId("research-study-summaries");
                }}
              >
                View Research
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </HeroVortex>

      {/* BODY */}
      <div className="relative z-10 bg-white py-20 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-7xl mx-auto">
          {/* CASE STUDIES */}
          <div id="case-study-summaries" className="text-left mb-10">
            <h2 className="text-4xl font-bold text-gray-700 mb-6">
              Case Study Summaries
            </h2>
            <h3 className="text-3xl font-bold text-gray-700 mb-6">
              Prompt Engineering Agents in Consulting
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 w-80 mx-auto flex flex-col">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                Strategic Intelligence Acceleration in a Mid-Tier Consulting Firm
              </h3>
              <p className="text-gray-700 mb-4 flex-1">
                A UK-based strategy firm accelerated insight delivery without scaling headcount by deploying upskilling agents.
              </p>
              <button
                className="inline-flex items-center px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-md transition-all"
                onClick={onNavigateToCaseStudy1}
              >
                Read here
              </button>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 w-80 mx-auto flex flex-col">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                Digital HR Transformation in a Global Professional Services Network
              </h3>
              <p className="text-gray-700 mb-4 flex-1">
                A multinational firm modernized HR strategy delivery with embedded, on-demand upskilling support.
              </p>
              <button
                className="inline-flex items-center px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-md transition-all"
                onClick={onNavigateToCaseStudy2}
              >
                Read here
              </button>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 w-80 mx-auto flex flex-col">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                Financial Services Advisory and Boutique Consulting Firms
              </h3>
              <p className="text-gray-700 mb-4 flex-1">
                Boutique firms scaled client insight delivery with prompt engineering upskilling workflows.
              </p>
              <button
                className="inline-flex items-center px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-md transition-all"
                onClick={onNavigateToCaseStudy3}
              >
                Read here
              </button>
            </div>
          </div>

          {/* RESEARCH */}
          <div id="research-study-summaries" className="mt-20">
            <h2 className="text-4xl font-bold text-gray-700 mb-6">
              Research Study Summaries
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
              <div className="group bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 w-80 mx-auto flex flex-col">
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  Research Study: Prompt Engineering for Small Business Strategy Consulting Firms
                </h3>
                <p className="text-gray-700 mb-4 flex-1">
                  How prompt engineering upskilling improves deliverable speed, quality, and innovation for consulting teams.
                </p>
                <button
                  className="inline-flex items-center px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-md transition-all"
                  onClick={onNavigateToResearchStudy}
                >
                  Read here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 bg-transparent text-blue-100 mt-auto">
        <SiteFooter theme="dark" />
      </div>

      <LeadCaptureModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default UseCasesPage;