import React, { useState } from "react";
import {
  ArrowLeft,
  Users,
  Zap,
  TrendingUp,
  Target,
  CheckCircle,
  Shield,
  BarChart3,
  Rocket,
  ArrowRight,
  Workflow,
  Brain,
  Database,
  Cpu,
  Lightbulb,
} from "lucide-react";

import { SiteFooter } from "../components/SiteFooter";
import { LeadCaptureModal } from "../components/LeadCaptureModal";
import HeroVortex from "../components/HeroVortex";

interface SolutionsPageProps {
  onBackToHome: () => void;
  onNavigateToProducts: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onBackToHome,
  onNavigateToProducts,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden scroll-smooth">
      {/* Header with Back Button */}
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

      {/* Floating decorative orbs removed for a cleaner hero */}

      {/* Hero Section (Wrapped in HeroVortex for lightweight premium look) */}
      <HeroVortex
        variant="inner"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Strategic Prompt Engineering Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-700 via-blue-700 to-purple-700 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-100 text-lg font-medium mb-8 shadow-lg animate-fade-in">
            <Lightbulb className="w-5 h-5 mr-2" />
            <Brain className="w-5 h-5 mr-2 text-emerald-300" />
            <span
              style={{
                fontSize: "22px",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              Strategic Prompt Engineering Solutions
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-slide-up">
            AI Solutions That{" "}
            <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 bg-clip-text text-transparent">
              Elevate Performance
            </span>{" "}
            — Not Replace Performers
          </h1>

          {/* Subheading */}
          <p className="font-sans text-2xl text-blue-100 mb-12 max-w-4xl mx-auto font-normal leading-snug">
            Build scalable systems that improve productivity, knowledge transfer, and
            execution speed — while keeping your workforce motivated
          </p>

          {/* CTA Button */}
          <div className="mb-16 animate-slide-up delay-400">
            <button
              onClick={() => {
                onNavigateToProducts(); // Navigate to ProductsPage
                setTimeout(() => {
                  const el = document.getElementById("products-grid");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
              className="group relative inline-flex items-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105 hover:from-emerald-400 hover:via-blue-500 hover:to-purple-500 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
            >
              <span className="relative z-10 tracking-wide drop-shadow">
                Discover Our Products
              </span>
              <ArrowRight className="w-6 h-6 ml-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 text-emerald-200 animate-slide-up delay-600">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Zap className="w-6 h-6 text-emerald-400" />
              <span className="text-xl font-medium">End-to-End Automation</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <TrendingUp className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-medium">Scalable Growth</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Shield className="w-6 h-6 text-purple-400" />
              <span className="text-xl font-medium">Enterprise Security</span>
            </div>
          </div>
        </div>
      </HeroVortex>

      {/* Solutions Overview Section */}
      <div
        id="solutions-portfolio"
        className="relative z-10 bg-white py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Solution Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive automation and upskilling solutions designed to transform
              how your organization operates, learns, and scales.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Solution 1 */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Intelligent Workflow Automation
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Streamline operations with AI-powered workflow automation that adapts
                to your business processes and scales efficiently.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                  Process Optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                  Automated Routing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                  Performance Analytics
                </li>
              </ul>
            </div>

            {/* Solution 2 */}
            <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Upskilling AI Agents
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Empower your workforce with AI learning companions that provide
                personalized training and on-demand knowledge support.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Personalized Learning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Skill Assessments
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Progress Tracking
                </li>
              </ul>
            </div>

            {/* Solution 3 */}
            <div className="group bg-gradient-to-br from-purple-50 to-fuchsia-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Knowledge Base Intelligence
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transform your organizational knowledge into an intelligent system
                that delivers instant answers and insights to your teams.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                  Smart Search
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                  Context Retrieval
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                  Knowledge Sync
                </li>
              </ul>
            </div>
          </div>

          {/* Implementation Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                How We Implement Solutions
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A proven approach designed to de-risk adoption and drive results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">1. Diagnose</h4>
                <p className="text-sm text-gray-600">
                  Identify bottlenecks, inefficiencies, and high-leverage wins.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">2. Build</h4>
                <p className="text-sm text-gray-600">
                  Implement automation + knowledge workflows with clear ROI.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">3. Deploy</h4>
                <p className="text-sm text-gray-600">
                  Roll out safely with tracking + iteration loops.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">4. Scale</h4>
                <p className="text-sm text-gray-600">
                  Expand across teams with governance + support.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-900">
          <SiteFooter theme="light" />
        </div>
      </div>

      {/* Lead Capture Modal */}
      <LeadCaptureModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default SolutionsPage;