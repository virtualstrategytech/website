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

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen font-sans">
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
                alt="Virtual Strategy Tech"
                className="h-32 w-auto object-contain -mt-1"
              />
            </div>
            {/* Navigation */}
            <div className="flex items-center space-x-4">
              <button
                onClick={onBackToHome}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium"
                style={{ fontSize: "20px" }}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </button>

              <button
                onClick={handleOpenModal}
                className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md hover:shadow-lg transition-all duration-300"
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

      {/* Hero Section (LIGHT animated) */}
      <HeroVortex
        variant="inner"
        backgroundColor="#070A12"
        baseHue={245}
        particleCount={1200}
        rangeY={800}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-3 rounded-full bg-gradient-to-r from-blue-600/40 to-indigo-600/40 border border-white/15 text-blue-100 text-lg font-medium mb-8 shadow-lg animate-fade-in">
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
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Use Cases
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-blue-100/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            See how these solutions drive results in real organizations. Dive
            into case studies and research to discover the strategies behind
            intelligent upskilling and automation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
            <button
              className="inline-flex items-center px-5 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-md hover:shadow-lg transition-all"
              onClick={handleOpenModal}
            >
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>

            <button
              className="inline-flex items-center px-5 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md hover:shadow-lg transition-all"
              onClick={() => {
                const section = document.getElementById(
                  "detailed-case-studies",
                );
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </HeroVortex>

      {/* Use Cases Grid Section */}
      <section
        id="detailed-case-studies"
        className="relative z-10 bg-gradient-to-br from-white via-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Case Studies{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                & Research
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore how intelligent automation and upskilling agents drive
              measurable outcomes across real scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 overflow-hidden">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Case Studies
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  See how clients achieved measurable results with intelligent
                  upskilling and automation.
                </p>

                <div className="space-y-3">
                  <button
                    onClick={onNavigateToCaseStudy1}
                    className="w-full inline-flex items-center justify-center px-6 py-4 rounded-2xl text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    View Case Study 1
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>

                  <button
                    onClick={onNavigateToCaseStudy2}
                    className="w-full inline-flex items-center justify-center px-6 py-4 rounded-2xl text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    View Case Study 2
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>

                  <button
                    onClick={onNavigateToCaseStudy3}
                    className="w-full inline-flex items-center justify-center px-6 py-4 rounded-2xl text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    View Case Study 3
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 overflow-hidden">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Research
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Explore research on prompt engineering upskilling and
                  workforce performance elevation.
                </p>
                <button
                  onClick={onNavigateToResearchStudy}
                  className="w-full inline-flex items-center justify-center px-6 py-4 rounded-2xl text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View Research
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      <LeadCaptureModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};
