import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LeadCaptureModal } from "../components/LeadCaptureModal";
import {
  ArrowLeft,
  TrendingUp,
  CheckCircle,
  Clock,
  BarChart3,
  ArrowRight,
  Settings,
  Calendar,
  Workflow
} from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import HeroVortex from "@/components/HeroVortex";

export const SmartTicketSchedulingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden scroll-smooth">
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
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse duration-4000"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000 duration-4000"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-2000 duration-4000"></div>

      {/* Hero Section */}
      <HeroVortex
        variant="inner"
        backgroundColor="#070A12"
        baseHue={555}
        particleCount={1100}
        rangeY={1000}
        className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="max-w-6xl w-full mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-purple-200 text-lg font-medium mb-8 animate-fade-in">
            <Settings className="w-5 h-5 mr-2" />
            <span style={{ fontSize: "22px" }}>ML Readiness (Beta)</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-slide-up">
            Turn Analytics Specifications{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Into Machine Learning Requirements
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up delay-200">
            And Upskill Your Team With Prompt Engineering Lessons and Quizzes As
            You Do It
          </p>

          {/* CTA Button in Hero Section */}
          <div className="mb-16 animate-slide-up delay-400">
            <button
              onClick={handleOpenModal}
              className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-fuchsia-700 via-pink-600 to-fuchsia-500 rounded-xl shadow-2xl shadow-fuchsia-700/40 hover:shadow-fuchsia-800/45 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-fuchsia-600/40 border border-fuchsia-600/10"
            >
              <span className="relative z-10">Schedule Your Free Demo</span>
              <ArrowRight className="w-5 h-5 ml-3 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-800 via-pink-600 to-fuchsia-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300 filter blur-sm"></div>
            </button>
          </div>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 text-purple-200 animate-slide-up delay-600">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Clock className="w-6 h-6 text-purple-400" />
              <span className="text-xl font-medium">ML Requirements</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <TrendingUp className="w-6 h-6 text-pink-400" />
              <span className="text-xl font-medium">Validation Gates</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Calendar className="w-6 h-6 text-indigo-400" />
              <span className="text-xl font-medium">
                Reduced Hallucinations
              </span>
            </div>
          </div>
        </div>
      </HeroVortex>

      {/* Key Features / Use Cases Section */}
      <div className="relative z-10 bg-white py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Use{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Cases
              </span>
            </h2>
            <p className="text-xl sm:text-xl md:text-3xl text-gray-900 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up delay-200">
              Decide if a problem should be ML, what data you need, and how to
              ship safely—before wasting time or budget.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger-in">
            {/* Support ticket triage / routing */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Workflow className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Support ticket triage / routing
                  </h3>
                  <p className="text-base mt-1">
                    <span className="font-semibold text-gray-900">Input:</span>{" "}
                    <span className="italic text-gray-700">
                      “Can we auto-route tickets to the right team and reduce
                      response time?”
                    </span>
                  </p>
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
                      ML suitability verdict (rule-based vs ML vs hybrid)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <span>
                      data requirements checklist (labeled historical tickets,
                      categories, SLA outcomes)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <span>
                      baseline plan (keyword rules → simple classifier →
                      human-in-the-loop)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <span>
                      evaluation plan (accuracy + SLA impact + escalation rate)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <span>
                      deployment risks (privacy, sensitive data, drift, feedback
                      loops)
                    </span>
                  </li>
                </ul>

                <h4 className="text-base font-semibold text-gray-900 mb-2">
                  Why it’s valuable
                </h4>
                <p className="text-base text-gray-800">
                  Avoids expensive ML projects that fail in production.
                </p>
              </div>
            </div>

            {/* Demand forecasting */}
            <div className="group bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl border border-pink-100 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Demand forecasting
                  </h3>
                  <p className="text-base mt-1">
                    <span className="font-semibold text-gray-900">Input:</span>{" "}
                    <span className="italic text-gray-700">
                      “Can we predict next month’s demand to plan
                      inventory/staffing?”
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-4 border-t border-pink-100 pt-4">
                <h4 className="text-sm font-semibold text-pink-600 uppercase tracking-wider mb-2">
                  Output
                </h4>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                    <span>
                      feasibility (data volume, seasonality, known drivers)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                    <span>
                      candidate approaches (moving average → ARIMA/Prophet → ML
                      regression)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                    <span>
                      required features (promotions, holidays, pricing, supply
                      constraints)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                    <span>
                      evaluation plan (MAPE/SMAPE + business cost of error)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                    <span>
                      monitoring plan (drift checks, re-train cadence)
                    </span>
                  </li>
                </ul>

                <h4 className="text-base font-semibold text-gray-900 mb-2">
                  Why it’s valuable
                </h4>
                <p className="text-base text-gray-800">
                  Frames ML in business cost terms, not hype.
                </p>
              </div>
            </div>

            {/* Churn prediction */}
            <div className="group bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Churn prediction
                  </h3>
                  <p className="text-base mt-1">
                    <span className="font-semibold text-gray-900">Input:</span>{" "}
                    <span className="italic text-gray-700">
                      “Can we predict churn and intervene early?”
                    </span>
                  </p>
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
                      definition of churn (time window, contract terms,
                      inactivity vs cancel)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <span>
                      label + feature requirements (usage signals, support
                      signals, billing events)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <span>
                      baseline + intervention design (risk tiers + playbooks)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <span>
                      evaluation plan (precision/recall + lift in retention +
                      intervention ROI)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <span>
                      ethics/risks (bias, unfair targeting, false positives)
                    </span>
                  </li>
                </ul>

                <h4 className="text-base font-semibold text-gray-900 mb-2">
                  Why it’s valuable
                </h4>
                <p className="text-base text-gray-800">
                  Stops teams from building models with no action path.
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Transform your data science capabilities in four steps
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-stagger-in">
            {/* Step 1: Ticket Creation */}
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-purple-500/25">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-400/50 to-pink-400/50 transform translate-x-10"></div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-3">
                  ML Necessity Check
                </h3>
                <p className="text-purple-100 leading-relaxed text-sm">
                  Confirm whether rules or analytics is enough or if ML is
                  justified.
                </p>
              </div>
            </div>

            {/* Step 2: Intelligent Routing */}
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-pink-500/25">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-pink-400/50 to-indigo-400/50 transform translate-x-10"></div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-3">
                  Use Case Definition
                </h3>
                <p className="text-pink-100 leading-relaxed text-sm">
                  Define precision target, decision it powers, value hypothesis
                  and constraints
                </p>
              </div>
            </div>

            {/* Step 3: Automated Scheduling */}
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-indigo-500/25">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-indigo-400/50 to-blue-400/50 transform translate-x-10"></div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-3">
                  Data Readiness Audit
                </h3>
                <p className="text-indigo-100 leading-relaxed text-sm">
                  Define availability, quality, labeling strategy, leakage risks
                  and governance needs
                </p>
              </div>
            </div>

            {/* Step 4: Resolution & Analytics */}
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/25">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-3">
                  Experiment Plan
                </h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  Define baseline approach, evaluation metrics, rollout plan and
                  monitoring plan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative z-10 bg-gradient-to-br from-purple-50 to-pink-50 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Measurable{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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
              <div className="text-2xl font-bold text-purple-600 mb-2">
                Readiness Score
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Data Quality Rubric
              </div>
              <div className="text-sm text-gray-600">
                Rubric across volume, labels, governance and feasibility
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all duration-500 hover:scale-105">
              <div className="text-2xl font-bold text-pink-600 mb-2">
                Benchmarking
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Baseline Performance
              </div>
              <div className="text-sm text-gray-600">
                Define simple baseline before implementing ML
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all duration-500 hover:scale-105">
              <div className="text-2xl font-bold text-indigo-600 mb-2">
                Proof of Concept
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Time to Proof of Concept
              </div>
              <div className="text-sm text-gray-600">
                Weeks from first use case to first measurable experiment
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all duration-500 hover:scale-105">
              <div className="text-2xl font-bold text-emerald-600 mb-2">
                Model Risk
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Failure Modes
              </div>
              <div className="text-sm text-gray-600">
                Monitoring coverage, drift checks and failure
              </div>
            </div>
          </div>

          {/* Key Benefits List */}
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                NovAIn Decision Platform
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Avoid Improper Use of ML
                    </h4>
                    <p className="text-gray-600">
                      Only pursue ML when it actually adds value
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Clear Return on Investment
                    </h4>
                    <p className="text-gray-600">
                      Risk is known upfront with value hypothesis and
                      constraints defined early
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Faster POC without Rework
                    </h4>
                    <p className="text-gray-600">
                      Data and evaluation are planned properly
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Better Governance Posture
                    </h4>
                    <p className="text-gray-600">
                      Privacy, security, auditability are considered early
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Safer Deployment
                    </h4>
                    <p className="text-gray-600">
                      Monitoring of failure modes are part of the plan
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Reusable ML Playbook
                    </h4>
                    <p className="text-gray-600">
                      Repeatable framework for future use cases
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
              Ready to{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-[#10B981] bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Your Model Approach?
            </h2>
            <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join our Beta Pilot and help shape the future of decision-making!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-stagger-in">
              <button
                onClick={handleOpenModal}
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-fuchsia-700 via-pink-600 to-fuchsia-500 rounded-xl shadow-2xl shadow-fuchsia-700/40 hover:shadow-fuchsia-800/45 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-fuchsia-600/40 border border-fuchsia-600/10"
              >
                <span className="relative z-10">Schedule Your Free Demo</span>
                <ArrowRight className="w-5 h-5 ml-3 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-800 via-pink-600 to-fuchsia-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300 filter blur-sm"></div>
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
    </main>
  );
};
