import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Zap,
  TrendingUp,
  Target,
  Lightbulb,
  Settings,
  Rocket,
  Menu,
  X,
  Brain,
  Sparkles,
  BookOpenCheck,
  ShieldCheck,
  Cpu,
  Settings2,
  ListChecks,
  HelpCircle,
  Activity,
  BadgePercent
} from "lucide-react";
import { LeadCaptureModal } from "../components/LeadCaptureModal";
import { ImageBanner } from "../components/ImageBanner";
import { useLeadTracking } from "../hooks/useLeadTracking";
import HeroVortex from "../components/HeroVortex";
import { SiteFooter } from "../components/SiteFooter";

export function HomePage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { trackLead } = useLeadTracking({});

  const handleCTAClick = (source: string) => {
    setIsModalOpen(true);
    trackLead({
      name: "",
      email: "",
      source
    });
  };

  const handleNavigateToPage = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden scroll-smooth">
      {/* Header/Navigation */}
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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                style={{ fontSize: "22px" }}
              >
                Home
              </a>
              <button
                onClick={() => handleNavigateToPage("/products")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                style={{ fontSize: "22px" }}
              >
                Product
              </button>
              <button
                onClick={() => handleNavigateToPage("/use-cases")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                style={{ fontSize: "22px" }}
              >
                Use Cases
              </button>
              <button
                onClick={() => handleCTAClick("header-cta")}
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
            </nav>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Home
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavigateToPage("/products");
                  }}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-left"
                >
                  Products
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavigateToPage("/use-cases");
                  }}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  style={{ fontSize: "18px" }}
                >
                  Case Studies
                </button>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105"
                  style={{ fontSize: "16px", fontWeight: "600" }}
                >
                  Demo
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM36 6V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>

      {/* Floating Elements (orbs) */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse duration-4000"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-1000 duration-4000"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-2000 duration-4000"></div>

      {/* Hero Content */}
      <HeroVortex
        variant="home"
        backgroundColor="black"
        baseHue={220}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-900 via-emerald-700 to-indigo-900 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-100 text-lg font-medium mb-8 shadow-lg animate-fade-in">
            <Lightbulb className="w-5 h-5 mr-2" />
            <Brain className="w-5 h-5 mr-2 text-emerald-300" />
            <span
              style={{
                fontSize: "22px",
                fontWeight: 600,
                letterSpacing: "0.02em"
              }}
            >
              Strategic Prompt Engineering
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-slide-up">
            From Strategy to Prompt: Teach Teams{" "}
            <span className="bg-gradient-to-r from-blue-500 via-emerald-400 to-indigo-400 bg-clip-text text-transparent inline-block pb-1">
              Prompt Engineering
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up delay-200">
            On-the-job strategy and analytics prompt engineering learning that
            sticks
          </p>

          {/* CTA Button */}
          <div className="mb-16 animate-slide-up delay-400">
            <button
              onClick={() => handleCTAClick("hero-cta")}
              className="group relative inline-flex items-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105 hover:from-blue-500 hover:via-emerald-400 hover:to-indigo-500 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
            >
              <span className="relative z-10 tracking-wide drop-shadow">
                Demo Prompt Lesson
              </span>
              <ArrowRight className="w-6 h-6 ml-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-indigo-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 text-blue-200 animate-slide-up delay-600">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Target className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-medium">Strategic Clarity</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Lightbulb className="w-6 h-6 text-indigo-400" />
              <span className="text-xl font-medium">Prompt Mastery</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Rocket className="w-6 h-6 text-purple-400" />
              <span className="text-xl font-medium">Personal Fulfillment</span>
            </div>
          </div>
        </div>
      </HeroVortex>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

      {/* Value Proposition Section */}
      <div className="relative z-10 bg-white py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 bg-clip-text text-transparent">
                Upskilling Pro
              </span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-900 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up delay-200">
              A knowledge-as-a-service agency: translating strategy questions
              into prompt engineering lessons and quizzes for on-the-job
              learning.
            </p>
            <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 bg-clip-text text-transparent inline-block pb-1">
              Elevating performance rather than replacing performers
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center my-12">
            <button
              onClick={() => navigate("/products")}
              className="group relative inline-flex items-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105 hover:from-emerald-400 hover:via-blue-500 hover:to-purple-500 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
            >
              <span className="relative z-10 tracking-wide drop-shadow">
                Discover Our Products
              </span>
              <ArrowRight className="w-6 h-6 ml-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* NovAIn Beta Launch Section */}
      <section
        className="relative z-20 w-full py-28 px-4 flex flex-col items-center shadow-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #020C2C 0%, #031234 50%, #020C2C 100%)"
        }}
      >
        {/* Decorative blobs */}
        {/* Remove these two orb divs */}
        {/*
        <div className="absolute -top-24 -left-24 w-[32rem] h-[32rem] bg-gradient-to-br from-emerald-300 via-cyan-300 to-emerald-400 rounded-full blur-[120px] opacity-80 pointer-events-none z-0"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none z-0"></div>
        */}

        {/* Beta Badge */}
        <span
          className="mb-8 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-emerald-400 to-cyan-400 text-white font-extrabold text-lg tracking-widest shadow-xl border-2 border-white/10 z-10 uppercase"
          style={{ letterSpacing: "0.2em", fontSize: "1.25rem" }}
        >
          Beta Launch
        </span>

        {/* Logo */}
        <div className="rounded-3xl shadow-2xl p-0 mb-10 flex items-center justify-center z-10">
          <img
            src="/Logo/Navy-NovAIn_SVGpadded_logo.svg"
            alt="NovAIn Prompt Engineering Coach Logo"
            className="h-80 w-auto object-contain drop-shadow-2xl"
            style={{ filter: "drop-shadow(0 0 60px #06b6d4cc)" }}
          />
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-3 text-white tracking-tight z-10 font-sans">
          Meet{" "}
          <span className="bg-gradient-to-r from-blue-500 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            NovAIn
          </span>
          :
          <br />
          <span className="text-3xl font-semibold text-cyan-100">
            Your Prompt Engineering Coach
          </span>
        </h2>

        <p className="text-2xl text-cyan-100 max-w-2xl text-center mb-8 z-10 font-sans leading-relaxed">
          A dual-agent collaborative system for learning strategy and prompt
          engineering
          <br />
          <br />
          <span className="text-emerald-200 font-semibold">
            Join our Beta and help us shape the future of stable, reliable,
            agentic flow!
          </span>
        </p>

        {/* CTA */}
        <div className="mb-12 z-10">
          <button className="px-10 py-5 rounded-2xl font-bold text-xl bg-gradient-to-r from-cyan-500 via-emerald-400 to-blue-500 text-white shadow-2xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 font-sans">
            Join our Beta Launch!
          </button>
        </div>

        {/* How NovAIn Works */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-center items-stretch gap-8 mb-14 z-10">
          {/* Step 1 */}
          <div className="flex-1 bg-white/10 rounded-2xl p-10 flex flex-col items-center shadow-lg border border-cyan-800/30">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-emerald-400 to-blue-500 mb-5 shadow-lg">
              <Lightbulb className="w-9 h-9 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1 text-center font-sans">
              Business Strategy Lens
            </h3>
            <p className="text-cyan-50 text-lg text-center mb-1 font-sans font-bold">
              Elicits strategy question
            </p>
            <p className="text-cyan-200 text-md text-center font-sans font-bold">
              Confirms understanding of strategy or business challenge and
              delivers a lesson to solve it
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex-1 bg-white/10 rounded-2xl p-10 flex flex-col items-center shadow-lg border border-cyan-800/30">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 mb-5 shadow-lg">
              <Sparkles className="w-9 h-9 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1 text-center font-sans">
              Prompt Design Lens
            </h3>
            <p className="text-cyan-50 text-base text-center mb-1 font-sans font-bold">
              Translates it into a prompt
            </p>
            <p className="text-cyan-200 text-md text-center font-sans font-bold">
              Answers the question through a business or prompt engineering lens
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex-1 bg-white/10 rounded-2xl p-10 flex flex-col items-center shadow-lg border border-cyan-800/30">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-emerald-400 mb-5 shadow-lg">
              <BookOpenCheck className="w-9 h-9 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1 text-center font-sans">
              Optional Quiz
            </h3>
            <p className="text-cyan-50 text-base text-center mb-1 font-sans font-bold">
              Reinforces Learning
            </p>
            <p className="text-cyan-200 text-md text-center font-sans font-bold">
              Receive graded feedback including a "model answer".
            </p>
          </div>
        </div>

        {/* Why It Works */}
        <div className="w-full max-w-3xl bg-white/95 rounded-2xl shadow-xl p-12 z-10">
          <h3 className="text-2xl font-bold text-center mb-6 font-sans">
            <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              Why It Works
            </span>
          </h3>
          <ul className="space-y-5 text-gray-900 text-lg font-sans">
            <li className="flex items-start gap-3">
              <span className="mt-1 w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 via-emerald-400 to-blue-500 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </span>
              <span>
                <span className="font-semibold">
                  Learner-centred, step-by-step clarity:
                </span>{" "}
                Strategy first, prompt second.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 via-emerald-400 to-blue-500 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </span>
              <span>
                <span className="font-semibold">
                  Context-embedded learning:
                </span>{" "}
                Prompts reflect contextual strategy questions
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 via-emerald-400 to-blue-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </span>
              <span>
                <span className="font-semibold">Immediate skill transfer:</span>{" "}
                Learners move from concept to action immediately without
                training courses
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 via-emerald-400 to-blue-500 flex items-center justify-center">
                <BookOpenCheck className="w-5 h-5 text-white" />
              </span>
              <span>
                <span className="font-semibold">
                  Quiz reinforcement (optional):
                </span>{" "}
                Solidifies knowledge and builds confidence for use of prompt
                engineering.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 via-emerald-400 to-blue-500 flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </span>
              <span>
                <span className="font-semibold">
                  Elevanted on-the-job performance:
                </span>{" "}
                Creative use of AI where the learner remains in control
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 via-emerald-400 to-blue-500 flex items-center justify-center">
                <Settings2 className="w-5 h-5 text-white" />
              </span>
              <span>
                <span className="font-semibold">
                  LLM reasoning on upstream is based on strict rubric & quality
                  gate
                </span>{" "}
                Producing intelligent, but stable and predictable results
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 via-emerald-400 to-blue-500 flex items-center justify-center">
                <ListChecks className="w-5 h-5 text-white" />
              </span>
              <span>
                <span className="font-semibold">
                  Obtain step-by-step clarity from strategy to prompt:
                </span>{" "}
                Lessons are short, actionable and useful for solving your
                specific problem.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 via-emerald-400 to-blue-500 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-white" />
              </span>
              <span>
                <span className="font-semibold">
                  Learn not just what works but why:
                </span>{" "}
                Build deeper understanding for building your prompt skills
                without a data engineering background
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 via-emerald-400 to-blue-500 flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </span>
              <span>
                <span className="font-semibold">
                  Agent Activity and Monitoring Dashboard:
                </span>{" "}
                Track agent actions and monitor performance for tracking what is
                working and what needs improvement.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 via-emerald-400 to-blue-500 flex items-center justify-center">
                <BadgePercent className="w-5 h-5 text-white" />
              </span>
              <span>
                <span className="font-semibold">
                  Front-end branding (white-label solution):
                </span>{" "}
                Seamlessly integrate your own brand label to the agent solution
                and dashboard.
              </span>
            </li>
          </ul>
          <div className="mt-10 text-center text-cyan-900 font-semibold text-xl font-sans">
            Join the limited Beta pilot and help us build the strategy and
            prompt engineering coach!
          </div>
        </div>
      </section>

      {/* Upskilling Agents vs. Workforce Automation Section */}
      <div
        id="upskilling-comparison"
        className="relative z-10 bg-white py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Upskilling Agents vs.{" "}
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Workforce Automation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We are building{" "}
              <span className="font-semibold text-gray-900">
                Human-AI collaboration{" "}
              </span>
              that increases capability - not headcount reduction. Teams learn
              while solving real business problems without need for external
              training.
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 animate-stagger-in">
            {/* Traditional Workforce Automation */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-200 transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mr-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-red-800">
                  Traditional Workforce Automation
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-red-700">
                    Optimizes for task replacement, not skill development
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-red-700">
                    Creates brittle workflows that break when context changes
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-red-700">
                    Pushes expertise into tools, pulling real work away from
                    people
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-red-700">
                    Increases dependency and "black box" decision risks
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-red-700">
                    Reduces engagement by removing autonomy and pursuit of
                    mastery
                  </span>
                </div>
              </div>
            </div>

            {/* Our Upskilling Agents Approach */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border-2 border-emerald-200 transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-800">
                  Our Upskilling Agents Approach
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-emerald-700">
                    <strong>Keeps humans in control</strong> with guided
                    reasoning and clear{}
                    outputs
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-emerald-700">
                    <strong>Builds reusable playbooks</strong> (decision briefs,
                    prompts, KPIs,) in the flow of work
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-emerald-700">
                    <strong>Improves quality</strong> through structure,
                    feedback and consistency
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-emerald-700">
                    <strong>Increases speed</strong> without sacrificing
                    judgement creativity.
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-emerald-700">
                    <strong>Creates a culture of continuous learning</strong>{" "}
                    tied to tangible outcomes
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-3xl border border-blue-200 mb-16 animate-fade-in-up transform transition-all duration-500 hover:shadow-xl">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              The Power of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Human-AI Collaboration
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-stagger-in">
              {/* Employee Growth */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 cursor-pointer transform transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Accelerated Growth
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Learn the right approach on-the-job with reusable prompts
                    and short lessons.
                  </p>
                </div>
              </div>

              {/* Increased Morale */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 cursor-pointer transform transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Stronger Morale
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Less busy work, more empowerment towards mastery. People
                    feel supported - not replaced.
                  </p>
                </div>
              </div>

              {/* Improved Productivity */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 cursor-pointer transform transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Higher Throughput
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Quicker and more accurate analysis means more work gets done
                    in less time.
                  </p>
                </div>
              </div>

              {/* Innovation Culture */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 cursor-pointer transform transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Innovation Culture
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Teams spend time on thinking and experimentation, rather
                    than formatting and grunt work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div
            className="bg-gradient-to-r from-gray-900 to-blue-900 p-12 rounded-3xl text-white text-center animate-fade-in-up transform transition-all duration-500 hover:shadow-2xl"
            style={{ background: "#020C2C" }}
          >
            <h3 className="text-3xl font-bold mb-8">
              Proven Results That Speak for Themselves
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 animate-stagger-in">
              <div className="border-r border-white/20 last:border-r-0 md:border-r md:last:border-r-0 transform transition-all duration-500 hover:scale-110">
                <div className="text-2xl font-bold text-blue-400 mb-2">
                  Productivity Uplift
                </div>
                <div className="text-lg font-semibold mb-1">
                  Less rework, clearer next steps
                </div>
              </div>

              <div className="border-r border-white/20 last:border-r-0 md:border-r md:last:border-r-0 transform transition-all duration-500 hover:scale-110">
                <div className="text-2xl font-bold text-emerald-400 mb-2">
                  Retention Lift
                </div>
                <div className="text-lg font-semibold mb-1">
                  Engagement with on-the-job learning
                </div>
              </div>

              <div className="transform transition-all duration-500 hover:scale-110">
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  Faster Innovation
                </div>
                <div className="text-lg font-semibold mb-1">
                  Shorter path from idea to execution
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-xl mb-6 text-blue-100">
                Our upskilling agents don't just automate outputs, they{" "}
                <strong> standardize decision quality</strong> to help teams
                improve over time.
              </p>

              <button
                onClick={() => handleCTAClick("comparison-cta")}
                className="group bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-500 hover:via-emerald-400 hover:to-indigo-500 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                Schedule Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 inline transition-transform duration-500 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        id="testimonials"
        className="relative z-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.4%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM36 6V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        {/* Floating Accent Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl animate-pulse duration-6000"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-indigo-200/30 rounded-full blur-2xl animate-pulse delay-1000 duration-6000"></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-purple-200/30 rounded-full blur-2xl animate-pulse delay-2000 duration-6000"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-blue-300/20 rounded-full blur-2xl animate-pulse delay-3000 duration-6000"></div>

        <div className="max-w-7xl mx-auto">
          {/* Trust Indicators */}
          <div className="mt-16 text-center animate-fade-in-up">
            <h3 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 bg-clip-text text-transparent">
                Trusted
              </span>{" "}
              <span className="text-gray-900">by industry leaders</span>
            </h3>
            <ImageBanner />
          </div>
        </div>
      </div>

      {/* Final Call to Action Section */}
      <div
        id="cta"
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 text-white transition-all duration-500"
        style={{
          background:
            "linear-gradient(180deg, #06323f 0%, #054055 45%, #020C2C 100%)"
        }} /* Option 3: muted teal-blue into footer */
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* subtle background orbs (soft, low-opacity) */}
          <div className="absolute top-10 left-10 w-28 h-28 bg-white/6 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-8 right-12 w-36 h-36 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 animate-fade-in-up">
            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-[#10B981] bg-clip-text text-transparent">
                Transform{" "}
              </span>
              Your Workforce?
            </h2>
            <p className="text-xl sm:text-2xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join our Beta Pilot and help shape the future of decision-making!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-stagger-in">
              {/* Primary CTA */}
              <button
                onClick={() => handleCTAClick("final-cta-primary")}
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-[#10B981] to-indigo-600 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:from-blue-500 hover:via-[#10B981] hover:to-indigo-500 focus:outline-none focus:ring-4 focus:ring-blue-500/50 min-w-[280px]"
              >
                <span className="relative z-10">Demo Prompt Lesson</span>
                <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-500 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-[#10B981] to-indigo-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => handleCTAClick("final-cta-secondary")}
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-200 bg-white/10 backdrop-blur-sm border-2 border-blue-400/30 rounded-xl hover:bg-white/20 hover:border-blue-300/50 transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/30 min-w-[280px]"
              >
                <span className="relative z-10">
                  Request a Customized Solution
                </span>
                <Lightbulb className="w-5 h-5 ml-3 transition-transform duration-500 group-hover:rotate-12" />
              </button>
            </div>

            {/* Trust Elements */}
            <div className="mt-12 pt-8 border-t border-white/20 animate-fade-in-up">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-200">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">
                    Tailored to your knowledgebase requirements
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Footer */}
      <div className="relative z-10 bg-transparent transition-all duration-500 text-blue-100 mt-auto">
        <SiteFooter onContactClick={() => handleCTAClick("footer-contact")} />
        <LeadCaptureModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}
