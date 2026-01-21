import React, { useState } from "react";
import HeroVortex from "../components/HeroVortex";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  CheckCircle,
  Cpu,
  Database,
  Lightbulb,
  Rocket,
  Shield,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
  BarChart3,
  Award,
} from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { LeadCaptureModal } from "../components/LeadCaptureModal";

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
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden scroll-smooth min-h-screen">
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

            {/* Nav */}
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

      {/* Subtle grid texture over the dark background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10" />

      {/* HERO (inner vortex = consistent with home colors, lighter load, no orb spheres) */}
      <HeroVortex
        variant="inner"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
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
              Strategic Prompt Engineering
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-slide-up">
            AI Solutions That{" "}
            <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 bg-clip-text text-transparent">
              Elevate Performance
            </span>{" "}
            — Not Replace Teams
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-emerald-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up delay-200">
            Build scalable systems that improve productivity, knowledge
            transfer, and execution speed — while keeping your workforce at the
            center.
          </p>

          {/* CTA */}
          <div className="mb-16 animate-slide-up delay-400">
            <button
              onClick={() => {
                onNavigateToProducts();
                setTimeout(() => {
                  const el = document.getElementById("products-grid");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 250);
              }}
              className="group relative inline-flex items-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105 hover:from-emerald-400 hover:via-blue-500 hover:to-purple-500 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
            >
              <span className="relative z-10 tracking-wide drop-shadow">
                Discover Our Products
              </span>
              <ArrowRight className="w-6 h-6 ml-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          </div>

          {/* Chips */}
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

      {/* ✅ Portfolio Section (LIGHT GREEN TINT so cards pop) */}
      <section
        id="solutions-portfolio"
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-blue-50"
      >
        {/* Subtle background wash */}
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Solution Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions that work together to transform
              your business ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Management */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Product Management
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Build scalable products with automation where it makes sense.
                Improve the creativity of your workforce by making learning
                on-the-job fun and productive.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Scalable products
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Automation where it makes sense
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Anticipate client needs
                </li>
              </ul>
            </div>

            {/* Process Optimization */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-orange-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Process Optimization
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Optimize and enhance business processes through intelligent
                analysis and strategic improvements.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  Process Analysis & Mapping
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  Performance Optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  Efficiency Improvements
                </li>
              </ul>
            </div>

            {/* Data Analytics */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-100 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Data Analytics & Insights
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Transform raw data into actionable insights with AI-powered
                analytics that drive decision-making.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-cyan-500 mr-2" />
                  Real-time Dashboards
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-cyan-500 mr-2" />
                  Custom Reporting
                </li>
              </ul>
            </div>

            {/* Strategy */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-teal-100 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Strategy Consulting
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Align AI initiatives with business objectives for sustainable
                growth and real-world outcomes.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                  Strategic Planning & Roadmapping
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                  Digital Transformation Strategy
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                  Performance Optimization
                </li>
              </ul>
            </div>

            {/* Change */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Change Management
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Drive adoption with smooth organizational transformation and
                measurable rollout progress.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                  Change Impact Assessment
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                  Employee Readiness Tracking
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                  Adoption Analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ “How We Implement Solutions” (the part you liked) */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              How We Implement{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven approach designed to de-risk adoption and drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-sm font-bold text-gray-900 mb-2">
                1. Diagnose
              </div>
              <div className="text-gray-600 text-sm leading-relaxed">
                Identify bottlenecks, inefficiencies, and high-leverage wins.
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                <Workflow className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-sm font-bold text-gray-900 mb-2">
                2. Build
              </div>
              <div className="text-gray-600 text-sm leading-relaxed">
                Implement automation + knowledge workflows with clear ROI.
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-sm font-bold text-gray-900 mb-2">
                3. Deploy
              </div>
              <div className="text-gray-600 text-sm leading-relaxed">
                Roll out safely with tracking + iteration loops.
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-sm font-bold text-gray-900 mb-2">
                4. Scale
              </div>
              <div className="text-gray-600 text-sm leading-relaxed">
                Expand across teams with governance + support.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated ecosystem section (dark) */}
      <section className="relative z-10 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Integrated{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Ecosystem
              </span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Our solutions work together to create a unified, intelligent
              business ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Unified Data Platform
              </h3>
              <p className="text-emerald-100 leading-relaxed text-sm">
                A shared data foundation that enables powerful cross-functional
                insights.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Seamless Integration
              </h3>
              <p className="text-blue-100 leading-relaxed text-sm">
                Works with your existing systems and scales without complexity.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Scalable Architecture
              </h3>
              <p className="text-purple-100 leading-relaxed text-sm">
                Built to grow from startup to enterprise without performance
                tradeoffs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Footer */}
      <section className="relative z-10 bg-gradient-to-br from-emerald-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Ready to{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Your Workforce?
          </h2>

          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover how our AI solutions can boost productivity, improve
            execution speed, and drive measurable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleOpenModal}
              className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 transform hover:scale-105 hover:from-emerald-500 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 min-w-[280px]"
            >
              <span className="relative z-10">Schedule Your Consultation</span>
              <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-500 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </button>

            <button
              onClick={onBackToHome}
              className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300/30 min-w-[280px]"
            >
              <span className="relative z-10">Explore Individual Services</span>
              <Rocket className="w-5 h-5 ml-3 transition-transform duration-500 group-hover:rotate-12" />
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3" />
                <span className="text-sm font-medium">Free consultation</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-3" />
                <span className="text-sm font-medium">
                  Custom implementation
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-3" />
                <span className="text-sm font-medium">Ongoing support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-900 mt-16">
          <SiteFooter theme="light" />
        </div>
      </section>

      <LeadCaptureModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default SolutionsPage;
