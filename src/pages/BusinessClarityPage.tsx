import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LeadCaptureModal } from "../components/LeadCaptureModal";
import {
  ArrowLeft,
  Users,
  TrendingUp,
  CheckCircle,
  Clock,
  Shield,
  Target,
  ArrowRight
} from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import HeroVortex from "../components/HeroVortex";

export const ProductDevelopmentPage: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
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
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl animate-pulse duration-4000"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-teal-500/20 rounded-full blur-xl animate-pulse delay-1000 duration-4000"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-500/20 rounded-full blur-xl animate-pulse delay-2000 duration-4000"></div>

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
          <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-200 text-lg font-medium mb-8 animate-fade-in">
            <Users className="w-5 h-5 mr-2" />
            <span style={{ fontSize: "22px" }}>Business Clarity</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-slide-up">
            Turn Business Questions
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Into Decision Ready Analytics
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-emerald-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up delay-200">
            And Upskill Your Team With Prompt Engineering Lessons And Quizzes As
            You Do It
          </p>

          {/* CTA Button */}
          <div className="mb-11 animate-slide-up delay-400">
            <button
              onClick={handleOpenModal}
              className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-700 via-teal-600 to-green-700 rounded-xl shadow-2xl hover:shadow-emerald-800/30 transition-all duration-500 transform hover:scale-105 min-w-[280px]"
            >
              <span className="relative z-10">Schedule Your Free Demo</span>
              <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-500 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-500 to-green-600 rounded-xl opacity-0 group-hover:opacity-25 transition-opacity duration-500"></div>
            </button>
          </div>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 text-emerald-200 animate-slide-slide delay-600">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Clock className="w-6 h-6 text-emerald-400" />
              <span className="text-xl font-medium">Strategic Clarity</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <TrendingUp className="w-6 h-6 text-teal-400" />
              <span className="text-xl font-medium">
                Assumptions & Constraints
              </span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="text-xl font-medium">
                Decision Success Metrics
              </span>
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
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Cases
              </span>
            </h2>
            <p className="text-xl sm:text-xl md:text-3xl text-gray-900 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up delay-200">
              Turn messy business questions into a decision-ready brief in
              minutes—problem, options, success metric, and next steps.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger-in">
            {/* Pricing change decision (left) */}
            <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Pricing change decision
                    </h3>
                    <p className="text-sm mt-1">
                      <span className="font-semibold text-gray-900">
                        Input:
                      </span>{" "}
                      <span className="italic text-gray-700">
                        “Should we raise prices by 15% on our Pro plan?”
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 border-t border-emerald-100 pt-4">
                <h4 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">
                  Output
                </h4>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>1-sentence problem statement + decision to make</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>
                      Success metric (net revenue retention / churn tolerance)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>
                      Assumptions/constraints (competitive landscape, contracts)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>
                      2–3 options with tradeoffs + recommended next step & 7‑day
                      experiment
                    </span>
                  </li>
                </ul>

                <h4 className="text-sm font-semibold text-gray-900 mb-2">
                  Why it’s valuable
                </h4>
                <p className="text-base text-gray-800">
                  A manager can be confident with a tough decision.
                </p>
              </div>
            </div>

            {/* Go-to-market focus (center) */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Go-to-market focus
                    </h3>
                    <p className="text-sm mt-1">
                      <span className="font-semibold text-gray-900">
                        Input:
                      </span>{" "}
                      <span className="italic text-gray-700">
                        “Which segment should we focus on in Q2?”
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
                      Segment comparison rubric (TAM, urgency, ACV, cycle,
                      competition)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>
                      Decision + success metric (pipeline created / win rate)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>
                      Next steps (landing page test, 10 interviews, offer
                      positioning)
                    </span>
                  </li>
                </ul>

                <h4 className="text-sm font-semibold text-gray-900 mb-2">
                  Why it’s valuable
                </h4>
                <p className="text-base text-gray-800">
                  A crisp, defensible direction that your team can execute.
                </p>
              </div>
            </div>

            {/* Customer retention strategy (right) */}
            <div className="group bg-gradient-to-br from-teal-50 to-cyan-40 p-8 rounded-2xl border border-teal-100 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Customer retention strategy
                    </h3>
                    <p className="text-sm mt-1">
                      <span className="font-semibold text-gray-900">
                        Input:
                      </span>{" "}
                      <span className="italic text-gray-700">
                        “Churn increased this quarter — what should we do
                        first?”
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 border-t border-teal-100 pt-4">
                <h4 className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2">
                  Output
                </h4>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                    <span>
                      Root-cause hypotheses (pricing, onboarding, product,
                      support)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                    <span>The “first diagnostic” decision tree</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                    <span>
                      Prioritized action list (what to investigate this week)
                    </span>
                  </li>
                </ul>

                <h4 className="text-sm font-semibold text-gray-900 mb-2">
                  Why it’s valuable
                </h4>
                <p className="text-base text-gray-800">
                  Turns vague panic into a structured, prioritized plan.
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
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Transform your business problem in four steps
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-stagger-in">
            {/* Step 1: Lead Capture */}
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-emerald-500/25">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-emerald-400/50 to-teal-400/50 transform translate-x-10"></div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-3">
                  Frame the Problem
                </h3>
                <p className="text-emerald-100 leading-relaxed text-sm">
                  Convert the question into a crisp problem statement with scope
                  and constraints
                </p>
              </div>
            </div>

            {/* Step 2: Intelligent Scoring */}
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-teal-500/25">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-teal-400/50 to-cyan-400/50 transform translate-x-10"></div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-3">
                  Define Success
                </h3>
                <p className="text-teal-100 leading-relaxed text-sm">
                  Establish 1–3 success metrics + targets (what “good” looks
                  like).
                </p>
              </div>
            </div>

            {/* Step 3: CRM Integration */}
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-cyan-500/25">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-400/50 to-blue-400/50 transform translate-x-10"></div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-3">
                  Generate Options
                </h3>
                <p className="text-cyan-100 leading-relaxed text-sm">
                  Produce 3–5 decision options with tradeoffs, risks,
                  assumptions.
                </p>
              </div>
            </div>

            {/* Step 4: Automated Follow-up */}
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/25">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-3">
                  Decision Brief
                </h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  Deliver a one-page recommendation with next steps + what to
                  measure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative z-10 bg-gradient-to-br from-emerald-50 to-teal-50 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Measurable{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
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
              <div className="text-2xl font-bold text-emerald-600 mb-2">
                Decision Cycle Time
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Faster Response
              </div>
              <div className="text-sm text-gray-600">
                Days from question to decision
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all duration-500 hover:scale-105">
              <div className="text-2xl font-bold text-teal-600 mb-2">
                Rework Rate
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Revisited Decisions
              </div>
              <div className="text-sm text-gray-600">
                % of Decisions revisited due to unclear scope or assumptions
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all duration-500 hover:scale-105">
              <div className="text-2xl font-bold text-cyan-600 mb-2">
                Stakeholder Alignment Time
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Time Savings
              </div>
              <div className="text-sm text-gray-600">
                # of Meetings or revisions to reach approval
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all duration-500 hover:scale-105">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                Decision Quality Score
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Risk Handling
              </div>
              <div className="text-sm text-gray-600">
                Internal rubric: clarity, assumptions and measurability
              </div>
            </div>
          </div>

          {/* Key Benefits List */}
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                NovAIn Decision Platform
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Less Ambiguity, Faster Decisions
                    </h4>
                    <p className="text-gray-600">
                      Clear problem and constraints
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Alignment Without Chaos
                    </h4>
                    <p className="text-gray-600">Shared definition of "done"</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Decision Options you can Defend
                    </h4>
                    <p className="text-gray-600">
                      Trade-ffs and assumptions are explicit
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Better Prioritization
                    </h4>
                    <p className="text-gray-600">
                      Knowing what matters and why
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Lower Execution Risk
                    </h4>
                    <p className="text-gray-600">Risks are surfaced early</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Repeatable Decision Muscle
                    </h4>
                    <p className="text-gray-600">
                      Teams learn the same structure every time
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
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                Beta Pilot
              </span>{" "}
              to Transform Analytics!
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-stagger-in">
              <button
                onClick={handleOpenModal}
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-700 via-teal-600 to-green-700 rounded-xl shadow-2xl hover: shadow-emerald-800/30 transition-all duration-500 transform hover:scale-105 min-w-[280px]"
              >
                <span className="relative z-10">Schedule Your Free Demo</span>
                <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-500 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-500 to-green-600 rounded-xl opacity-0 group-hover:opacity-25 transition-opacity duration-500"></div>
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
