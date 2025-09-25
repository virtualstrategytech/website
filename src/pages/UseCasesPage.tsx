import React from "react";
import { ArrowLeft, ArrowRight, BookOpen, Search } from "lucide-react";

interface UseCasesPageProps {
  onBackToHome: () => void;
  onOpenModal: () => void;
  onNavigateToCaseStudies: () => void;
  onNavigateToResearch: () => void;
}

export const UseCasesPage: React.FC<UseCasesPageProps> = ({
  onBackToHome,
  onOpenModal,
  onNavigateToCaseStudies,
  onNavigateToResearch,
}) => (
  <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen font-sans relative overflow-hidden scroll-smooth">
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
          <div className="flex items-center">
            <img
              src="/Logo/VirtualStrategyTechLogoSVG.svg"
              alt="Virtual Strategy Tech - Productivity Reimagined"
              className="h-36 w-auto object-contain"
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
              onClick={onOpenModal}
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

    {/* Hero Section */}
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
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
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Use Cases
          </span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up delay-200">
          See how our solutions drive results in real organizations. Dive into
          case studies and research to discover proven strategies and
          innovation.
        </p>
        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
          {/* Case Studies Card */}
          <div
            className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 w-80 cursor-pointer"
            onClick={onNavigateToCaseStudies}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Case Studies
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              See how our clients achieved measurable results and transformed
              their business with our solutions.
            </p>
            <button className="inline-flex items-center px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md transition-all">
              View Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          {/* Research Card */}
          <div
            className="group bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 w-80 cursor-pointer"
            onClick={onNavigateToResearch}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Research</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Explore our latest research, insights, and innovation in AI,
              automation, and workforce transformation.
            </p>
            <button className="inline-flex items-center px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-md transition-all">
              View Research
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UseCasesPage;
