import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LeadCaptureModal } from "../components/LeadCaptureModal";
import {
  ArrowLeft,
  Users,
  Zap,
  TrendingUp,
  Target,
  CheckCircle,
  BarChart3,
  ArrowRight,
  BookOpen,
  Brain
} from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import HeroVortex from "@/components/HeroVortex";

export const UpskillingProAgentsPage: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Handler for "Explore Other Solutions" button

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
                onClick={() => navigate("/products")}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                style={{ fontSize: "22px" }}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Products
              </button>
              <button
                onClick={handleOpenModal}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-1.5 rounded-lg font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105"
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
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/20 via-emerald-500/12 to-indigo-600/20 backdrop-blur-sm border border-blue-600/30 rounded-full text-emerald-200 text-lg font-medium mb-8 animate-fade-in">
                <Brain className="w-5 h-5 mr-2 text-emerald-200" />
                <span style={{ fontSize: "22px" }}>Analytics Translator</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-slide-up">
                Translate Business Questions{" "}
                <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 bg-clip-text text-transparent">
                  Into Analytics Specifications
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-semibold animate-slide-up delay-200">
                And Upskill Your Team With Prompt Engineering Lessons And
                Quizzes As You Do It
              </p>
              {/* CTA Button */}
              <div className="mb-16 animate-slide-up delay-400">
                <button
                  onClick={handleOpenModal}
                  className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:from-blue-500 hover:via-emerald-400 hover:to-indigo-500 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                >
                  <span className="relative z-10">See Demo / Join Beta</span>
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-indigo-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Key Benefits */}
              <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 text-blue-200 animate-slide-up delay-600">
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                  <span className="text-xl font-medium">Business Clarity</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <TrendingUp className="w-6 h-6 text-indigo-400" />
                  <span className="text-xl font-medium">
                    Analytics Specifications
                  </span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <Zap className="w-6 h-6 text-purple-400" />
                  <span className="text-xl font-medium">Tracking Plan</span>
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
              Use{" "}
              <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 bg-clip-text text-transparent">
                Cases
              </span>
            </h2>
            <p className="text-xl sm:text-xl md:text-3xl text-gray-900 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up delay-200">
              Analytics Translator Module — Translate business questions into
              KPI definitions, event taxonomy, and a tracking plan your team can
              implement immediately.
            </p>
          </div>

          {/* Features Grid (Use Cases) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger-in">
            {/* Funnel + conversion tracking */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-xl hover:shadow-blue-400/10 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Funnel and conversion tracking
                    </h3>
                    <p className="text-base mt-1">
                      <span className="font-semibold text-gray-900">
                        Input:
                      </span>{" "}
                      <span className="italic text-gray-700">
                        “Where are users dropping off in onboarding?”
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 border-t border-blue-100 pt-4">
                <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                  Output
                </h4>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>
                      KPI definitions (activation rate, step drop-off rate,
                      time-to-value)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>
                      event taxonomy (signup_completed,
                      onboarding_step_completed, first_value_event)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>
                      tracking plan (properties required, user_id/session_id
                      rules, QA checks)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>
                      dashboard spec (funnel by channel/device, time-to-value
                      distribution)
                    </span>
                  </li>
                </ul>

                <h4 className="text-base font-semibold text-gray-900 mb-2">
                  Why it’s valuable
                </h4>
                <p className="text-base text-gray-800">
                  Product and engineering can implement immediately.
                </p>
              </div>
            </div>

            {/* Feature adoption measurement */}
            <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl border border-indigo-200 hover:shadow-xl hover:shadow-indigo-400/10 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Feature adoption measurement
                    </h3>
                    <p className="text-base mt-1">
                      <span className="font-semibold text-gray-900">
                        Input:
                      </span>{" "}
                      <span className="italic text-gray-700">
                        “Did our new feature actually improve retention?”
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 border-t border-indigo-100 pt-4">
                <h4 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">
                  Output
                </h4>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <span>
                      “adoption” definition (eligible users, usage thresholds)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <span>
                      cohort design (adopters vs non-adopters; pre/post windows)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <span>
                      events/properties needed (feature_used, feature_depth,
                      user_segment)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <span>
                      dashboard spec (adoption curve + retention lift + segment
                      breakdown)
                    </span>
                  </li>
                </ul>

                <h4 className="text-base font-semibold text-gray-900 mb-2">
                  Why it’s valuable
                </h4>
                <p className="text-base text-gray-800">
                  Prevents false wins and unnecessary metrics.
                </p>
              </div>
            </div>

            {/* Revenue / pricing analytics */}
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 hover:shadow-xl hover:shadow-purple-400/10 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Revenue and pricing analytics
                    </h3>
                    <p className="text-base mt-1">
                      <span className="font-semibold text-gray-900">
                        Input:
                      </span>{" "}
                      <span className="italic text-gray-700">
                        “Which plan drives the highest lifetime value?”
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 border-t border-purple-100 pt-4">
                <h4 className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-2">
                  Output
                </h4>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <span>
                      KPI definitions (ARPA, gross margin proxy, LTV, payback
                      period)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <span>
                      event taxonomy (plan_selected, upgrade, downgrade, cancel,
                      payment_failed)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <span>
                      tracking QA checklist (revenue normalization, refunds,
                      currency handling)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <span>
                      dashboards (MRR waterfall, cohort LTV, churn by plan)
                    </span>
                  </li>
                </ul>

                <h4 className="text-base font-semibold text-gray-900 mb-2">
                  Why it’s valuable
                </h4>
                <p className="text-base text-gray-800">
                  Gives finance/product a shared truth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500"
        style={{ background: "#020C2C" }}
      >
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
              Transform your analytics capabilities in four steps
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
                  Translate the Business Goal
                </h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  Define a measurable question: what are we trying to prove?
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
                  Define KPIs and Metric Logic
                </h3>
                <p className="text-indigo-100 leading-relaxed text-sm">
                  Define numerator, denominator, filters, segments and time
                  windows
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
                  Map Instrumentation
                </h3>
                <p className="text-purple-100 leading-relaxed text-sm">
                  Map events and properties, data sources, tracking plan and QA
                  checks.
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
                  Output Specification
                </h3>
                <p className="text-pink-100 leading-relaxed text-sm">
                  Define dashboard and reporting requirements
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
            <h2 className="text-2xl sm:text-5xl font-bold text-gray-900 mb-6">
              Measurable{" "}
              <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 bg-clip-text text-transparent">
                Results
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Impact our NovAIn Decision Platform can have on your Productivity
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-stagger-in">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all duration-500 hover:scale-105">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                Dashboard
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Time-to-first Dashboard
              </div>
              <div className="text-sm text-gray-600">
                #Days from goal setting to usable reporting
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all duration-500 hover:scale-105">
              <div className="text-2xl font-bold text-indigo-600 mb-2">
                Metrics
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Metric Consistency
              </div>
              <div className="text-sm text-gray-600">
                % of Teams using the same definition of a KPI
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all duration-500 hover:scale-105">
              <div className="text-2xl font-bold text-purple-600 mb-2">
                Coverage
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Tracking Coverage
              </div>
              <div className="text-sm text-gray-600">
                % Required of events or properties instrumented
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all duration-500 hover:scale-105">
              <div className="text-2xl font-bold text-emerald-600 mb-2">
                Error Rate
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Data QA Error Rate
              </div>
              <div className="text-sm text-gray-600">
                # of Broken events, missing properties, or mismatched
                definitions
              </div>
            </div>
          </div>

          {/* Key Benefits List */}
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                NovAIn Decision Platform
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      No More KPI Confusion
                    </h4>
                    <p className="text-gray-600">
                      Single source of truth definitions
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Faster Analytics Execution
                    </h4>
                    <p className="text-gray-600">
                      Clear specifications reduce back-and-forth communication
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Better Stakeholder Trust
                    </h4>
                    <p className="text-gray-600">
                      Numbers mean the same thing to everyone
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Clarity in "What to Build" for Engineering Teams
                    </h4>
                    <p className="text-gray-600">
                      Events and properties are listed explicitly
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      More Actionable Dashboards
                    </h4>
                    <p className="text-gray-600">
                      Not superficial charts, but meaningful, decision-ready
                      views
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Foundation for Experiments and Machine Learning
                    </h4>
                    <p className="text-gray-600">
                      Clean data and consistent metrics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section (muted teal-blue -> footer gradient; green accent #10B981) */}
      <div
        id="cta"
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 text-white transition-all duration-500"
        style={{
          background:
            "linear-gradient(180deg, #06323f 0%, #054055 45%, #020C2C 100%)"
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="absolute top-10 left-10 w-28 h-28 bg-white/6 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-8 right-12 w-36 h-36 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Join our{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-[#10B981] bg-clip-text text-transparent">
                Beta Pilot
              </span>{" "}
              to Transform Analytics!
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-stagger-in">
              <button
                onClick={handleOpenModal}
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:from-blue-500 hover:via-emerald-400 hover:to-indigo-500 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              >
                <span className="relative z-10">Schedule Your Free Demo</span>
                <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-indigo-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20 animate-fade-in-up">
              <div className="flex items-center justify-center gap-8 text-blue-200">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-teal-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">
                    Tailored to your requirements
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter onContactClick={handleOpenModal} />
      <LeadCaptureModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};
