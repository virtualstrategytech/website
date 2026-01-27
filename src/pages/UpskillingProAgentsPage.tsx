import React from "react";
import {
  ArrowLeft,
  Users,
  Zap,
  TrendingUp,
  Target,
  CheckCircle,
  BarChart3,
  Rocket,
  ArrowRight,
  BookOpen,
  Brain,
  MessageSquare,
  Cpu,
} from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import HeroVortex from "@/components/HeroVortex";

interface UpskillingAgentsPageProps {
  onBackToHome: () => void;
  onOpenModal: () => void;
}

export const UpskillingProAgentsPage: React.FC<UpskillingAgentsPageProps> = ({
  onBackToHome,
  onOpenModal,
}) => {
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

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse duration-4000"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-1000 duration-4000"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-2000 duration-4000"></div>

      {/* Hero Section */}
      <HeroVortex
        variant="inner"
        backgroundColor="#070A12"
        baseHue={555}
        particleCount={1100}
        rangeY={100}
        className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="max-w-6xl w-full mx-auto text-center">
          <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
            <div className="max-w-6xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200 text-lg font-medium mb-8 animate-fade-in">
                <Brain className="w-5 h-5 mr-2" />
                <span style={{ fontSize: "22px" }}>
                  Prompt Engineering Coaching
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-slide-up">
                Elevate Your Workforce with{" "}
                <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 bg-clip-text text-transparent">
                  Upskilling Pro Agents
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up delay-200">
                Transform your team's capabilities with AI-driven learning
                companions that accelerate skill development, boost
                productivity, and unlock human potential through personalized,
                on-demand education.
              </p>

              {/* CTA Button */}
              <div className="mb-16 animate-slide-up delay-400">
                <button
                  onClick={onOpenModal}
                  className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:from-blue-500 hover:via-emerald-400 hover:to-indigo-500 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                >
                  <span className="relative z-10">Schedule Your Free Demo</span>
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-indigo-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Key Benefits */}
              <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 text-blue-200 animate-slide-up delay-600">
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                  <span className="text-xl font-medium">
                    Personalized Learning
                  </span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <TrendingUp className="w-6 h-6 text-indigo-400" />
                  <span className="text-xl font-medium">
                    Productivity Gains
                  </span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <Zap className="w-6 h-6 text-purple-400" />
                  <span className="text-xl font-medium">Instant Knowledge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroVortex>

      {/* Key Features Section */}
      <div className="relative z-10 bg-white py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Powerful{" "}
              <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our upskilling pro agents provide comprehensive learning solutions
              that adapt to your team's unique needs and accelerate professional
              development.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger-in">
            {/* Personalized Learning Paths */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Personalized Learning Paths
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AI-driven curriculum that adapts to individual learning styles,
                skill levels, and career goals, ensuring maximum engagement and
                knowledge retention.
              </p>
            </div>

            {/* Real-time Knowledge Assistance */}
            <div className="group bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Real-time Knowledge Assistance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Instant access to relevant information and guidance while
                working, providing contextual learning that enhances
                productivity and decision-making.
              </p>
            </div>

            {/* Skill Gap Analysis */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Skill Gap Analysis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive assessment of current capabilities versus required
                skills, with targeted recommendations for professional
                development and growth.
              </p>
            </div>

            {/* Interactive Learning Modules */}
            <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Interactive Learning Modules
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Engaging, hands-on learning experiences with simulations, case
                studies, and practical exercises that reinforce knowledge
                through application.
              </p>
            </div>

            {/* Progress Tracking & Analytics */}
            <div className="group bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Progress Tracking & Analytics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Detailed insights into learning progress, skill development, and
                performance improvements with actionable recommendations for
                continued growth.
              </p>
            </div>

            {/* Collaborative Learning Environment */}
            <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-100 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Collaborative Learning Environment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Foster team-based learning with peer-to-peer knowledge sharing,
                group challenges, and collaborative problem-solving exercises.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative z-10 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              How It{" "}
              <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transform your workforce capabilities in four simple steps
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-stagger-in">
            {/* Step 1: Assessment & Onboarding */}
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/25">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-400/50 to-indigo-400/50 transform translate-x-10"></div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-3">
                  Assessment & Onboarding
                </h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  Comprehensive skill assessment to identify current
                  capabilities and learning objectives for each team member.
                </p>
              </div>
            </div>

            {/* Step 2: Personalized Learning Plan */}
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-indigo-500/25">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-indigo-400/50 to-purple-400/50 transform translate-x-10"></div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-3">
                  Personalized Learning Plan
                </h3>
                <p className="text-indigo-100 leading-relaxed text-sm">
                  AI creates customized learning paths tailored to individual
                  roles, goals, and preferred learning styles.
                </p>
              </div>
            </div>

            {/* Step 3: Interactive Learning */}
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-purple-500/25">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-400/50 to-pink-400/50 transform translate-x-10"></div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-3">
                  Interactive Learning
                </h3>
                <p className="text-purple-100 leading-relaxed text-sm">
                  Engage with dynamic content, simulations, and real-world
                  scenarios that reinforce learning through practice.
                </p>
              </div>
            </div>

            {/* Step 4: Continuous Improvement */}
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-pink-500/25">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-3">
                  Continuous Improvement
                </h3>
                <p className="text-pink-100 leading-relaxed text-sm">
                  Ongoing support, progress tracking, and adaptive learning that
                  evolves with your team's growing expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative z-10 bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Measurable{" "}
              <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 bg-clip-text text-transparent">
                Results
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the transformative impact our upskilling pro agents have on
              your workforce and business performance.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-stagger-in">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all duration-500 hover:scale-105">
              <div className="text-4xl font-bold text-blue-600 mb-2">2.4×</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Faster Learning
              </div>
              <div className="text-sm text-gray-600">
                Skill acquisition speed
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all duration-500 hover:scale-105">
              <div className="text-4xl font-bold text-indigo-600 mb-2">87%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Employee Retention
              </div>
              <div className="text-sm text-gray-600">
                Improved job satisfaction
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all duration-500 hover:scale-105">
              <div className="text-4xl font-bold text-purple-600 mb-2">65%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Productivity Increase
              </div>
              <div className="text-sm text-gray-600">
                Enhanced work efficiency
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all duration-500 hover:scale-105">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                92%
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Knowledge Retention
              </div>
              <div className="text-sm text-gray-600">
                Long-term skill retention
              </div>
            </div>
          </div>

          {/* Key Benefits List */}
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Upskilling Pro Agents
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Adaptive Learning Technology
                    </h4>
                    <p className="text-gray-600">
                      AI-powered system that adjusts to individual learning pace
                      and style for optimal knowledge absorption.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Real-world Application
                    </h4>
                    <p className="text-gray-600">
                      Practical learning experiences that directly apply to
                      daily work challenges and responsibilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Continuous Support
                    </h4>
                    <p className="text-gray-600">
                      24/7 access to learning resources and instant assistance
                      when facing new challenges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Measurable Progress
                    </h4>
                    <p className="text-gray-600">
                      Clear metrics and analytics that demonstrate skill
                      development and performance improvements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Team Collaboration
                    </h4>
                    <p className="text-gray-600">
                      Foster knowledge sharing and collaborative learning across
                      your entire organization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Future-Ready Skills
                    </h4>
                    <p className="text-gray-600">
                      Prepare your workforce for emerging technologies and
                      evolving industry requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative z-10 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div className="max-w-4xl mx-auto text-center">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>

          <div className="relative z-10 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to{" "}
              <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 bg-clip-text text-transparent">
                Elevate
              </span>{" "}
              Your Team?
            </h2>
            <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join innovative companies that are transforming their workforce
              with AI-powered upskilling. See measurable improvements in
              productivity, retention, and employee satisfaction.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-stagger-in">
              <button
                onClick={onOpenModal}
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:from-blue-500 hover:via-emerald-400 hover:to-indigo-500 focus:outline-none focus:ring-4 focus:ring-blue-500/50 min-w-[280px]"
              >
                <span className="relative z-10">Schedule Your Free Demo</span>
                <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-500 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-indigo-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </button>

              <button
                onClick={onBackToHome}
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-200 bg-white/10 backdrop-blur-sm border-2 border-blue-400/30 rounded-xl hover:bg-white/20 hover:border-blue-300/50 transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/30 min-w-[280px]"
              >
                <span className="relative z-10">Explore Other Solutions</span>
                <Rocket className="w-5 h-5 ml-3 transition-transform duration-500 group-hover:rotate-12" />
              </button>
            </div>

            {/* Trust Elements */}
            <div className="mt-12 pt-8 border-t border-white/20 animate-fade-in-up">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-200">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">Free 30-day trial</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-indigo-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">No setup fees</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">
                    24/7 support included
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter theme="dark" />
    </div>
  );
};
