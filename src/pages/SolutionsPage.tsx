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
  Award,
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

      {/* Hero Section (LIGHT animated, consistent with home) */}
      <HeroVortex
        variant="inner"
        backgroundColor="#070A12"
        baseHue={245}
        particleCount={900}
        rangeY={800}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600/40 to-indigo-600/40 border border-white/15 text-emerald-100 text-lg font-medium mb-8 shadow-lg animate-fade-in">
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
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Elevate Performance
            </span>{" "}
            — Not Replace Performers
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-blue-100/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Build scalable systems that improve productivity, knowledge
            transfer, and execution speed — while keeping your workforce
            motivated
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16 animate-bounce-in">
            <button
              onClick={() => {
                onNavigateToProducts();
                setTimeout(() => {
                  const el = document.getElementById("products-grid");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-indigo-600 rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
            >
              <span className="relative z-10 tracking-wide drop-shadow">
                Discover Our Products
              </span>
              <ArrowRight className="w-6 h-6 ml-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          </div>

          {/* Value props */}
          <div className="flex flex-wrap justify-center gap-4 text-blue-100 animate-fade-in-up">
            <div className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-full border border-white/20">
              <Zap className="w-6 h-6 text-emerald-400" />
              <span className="text-xl font-medium">End-to-End Automation</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-full border border-white/20">
              <TrendingUp className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-medium">Scalable Growth</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-full border border-white/20">
              <Shield className="w-6 h-6 text-purple-400" />
              <span className="text-xl font-medium">Enterprise Security</span>
            </div>
          </div>
        </div>
      </HeroVortex>

      {/* Solutions Overview Section (more color so sections don’t blend) */}
      <div
        id="solutions-portfolio"
        className="relative z-10 bg-gradient-to-br from-white via-emerald-50/40 to-blue-50/60 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500 border-t border-emerald-100/60"
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
              Comprehensive automation and upskilling solutions designed to
              transform how your organization operates, learns, and scales.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger-in">
            {/* Product Management */}
            <div className="group bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 border border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Product Management
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Build scalable products with automation where it makes sense to
                reduce cost and accelerate delivery.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
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

            {/* Upskilling AI Agents */}
            <div className="group bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 border border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Upskilling AI Agents
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Elevate performance with AI learning companions that deliver
                personalized, on-demand training.
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

            {/* Knowledge Base Intelligence */}
            <div className="group bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 border border-purple-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Knowledge Base Intelligence
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Transform organizational knowledge into an intelligent system
                that delivers instant answers and insights.
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

            {/* Intelligent Workflow Automation */}
            <div className="group bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Intelligent Workflow Automation
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Streamline operations with AI-powered workflows that adapt to
                your processes and scale efficiently.
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

            {/* Data Analytics & Insights */}
            <div className="group bg-gradient-to-br from-cyan-50 to-white rounded-3xl p-8 border border-cyan-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Data Analytics & Insights
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Turn raw data into actionable insights with AI-powered analytics
                that drive decision-making.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-cyan-500 mr-2" />
                  KPI Dashboards
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-cyan-500 mr-2" />
                  Forecasting Models
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-cyan-500 mr-2" />
                  ROI Measurement
                </li>
              </ul>
            </div>

            {/* Change Management */}
            <div className="group bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-8 border border-indigo-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Change Management
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Navigate transformation with adoption tracking and rollout
                support that drives measurable progress.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
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
      </div>

      {/* Implementation Process Section (adds strong demarcation + color) */}
      <section
        id="implementation-process"
        className="relative z-10 bg-gradient-to-b from-emerald-50 via-emerald-100/60 to-white py-24 px-4 sm:px-6 lg:px-8 border-t border-emerald-100/70"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-[32rem] w-[32rem] rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              How We Implement{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A proven rollout plan designed to de-risk adoption, deliver
              results fast, and scale cleanly across your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-stagger-in">
            <div className="group bg-white/80 backdrop-blur rounded-2xl border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-lg font-semibold text-emerald-700 mb-2">
                  1. Diagnose
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Identify bottlenecks, inefficiencies, and high-leverage wins
                  with a clear ROI case.
                </p>
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  <Workflow className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-lg font-semibold text-blue-700 mb-2">
                  2. Build
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Implement automation + knowledge workflows with governance and
                  a clean handoff.
                </p>
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur rounded-2xl border border-purple-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-lg font-semibold text-purple-700 mb-2">
                  3. Deploy
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Roll out safely with training, feedback loops, and adoption
                  tracking that sticks.
                </p>
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur rounded-2xl border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-6">
                  <Rocket className="w-6 h-6 text-amber-600" />
                </div>
                <div className="text-lg font-semibold text-amber-700 mb-2">
                  4. Scale
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Expand across teams with playbooks, change management, and
                  ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Benefits Section */}
      <div className="relative z-10 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Integrated{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Ecosystem
              </span>
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              A unified foundation that connects automation, knowledge, and
              learning to unlock compounding impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-emerald-400/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-emerald-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                AI-First Execution
              </h3>
              <p className="text-purple-100 leading-relaxed text-sm">
                Deploy AI where it drives measurable throughput and reduces
                operational drag.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-blue-400/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Knowledge Intelligence
              </h3>
              <p className="text-purple-100 leading-relaxed text-sm">
                Make your knowledge base queryable, reliable, and useful in
                real-time.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-purple-400/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Workforce Enablement
              </h3>
              <p className="text-purple-100 leading-relaxed text-sm">
                Upskill teams with prompt engineering + systems thinking baked
                into workflows.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-emerald-400/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-emerald-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Scalable Architecture
              </h3>
              <p className="text-purple-100 leading-relaxed text-sm">
                Built to grow with your business without compromising
                performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 bg-gradient-to-br from-white via-emerald-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Ready to{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Your Workforce?
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover how our comprehensive AI solutions can revolutionize your
              operations, boost productivity, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-stagger-in">
              <button
                onClick={handleOpenModal}
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-indigo-600 rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
              >
                <span className="relative z-10 tracking-wide drop-shadow">
                  Book a Demo
                </span>
                <ArrowRight className="w-6 h-6 ml-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />

      {/* Lead Capture Modal */}
      <LeadCaptureModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};
