import React, { useState } from "react";
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
} from "lucide-react";
import { LeadCaptureModal } from "./components/LeadCaptureModal";
import { ImageBanner } from "./components/ImageBanner";
import { ProductDevelopmentPage } from "./pages/ProductDevelopmentPage";
import { useLeadTracking } from "./hooks/useLeadTracking";
import HeroVortex from "./components/HeroVortex";
import { UpskillingProAgentsPage } from "./pages/UpskillingProAgentsPage";
import { SmartTicketSchedulingPage } from "./pages/SmartTicketSchedulingPage";
import { SolutionsPage } from "./pages/SolutionsPage";
import ProductsPage from "./pages/ProductsPage";
import { CaseStudy1Page } from "./pages/CaseStudy1Page";
import { CaseStudy2Page } from "./pages/CaseStudy2Page";
import { CaseStudy3Page } from "./pages/CaseStudy3Page";
import { ResearchPageStudy1 } from "./pages/ResearchPageStudy1";
import { UseCasesPage } from "./pages/UseCasesPage";
import { SiteFooter } from "./components/SiteFooter";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<
    | "home"
    | "ai-lead-capture"
    | "upskilling-agents"
    | "support-ticket-management"
    | "solutions"
    | "products"
    | "product-development"
    | "use-cases"
    | "case-studies"
    | "research"
    | "case-study-1"
    | "case-study-2"
    | "case-study-3"
    | "research-study-1"
  >("home");

  const { trackLead } = useLeadTracking({
    // Configure your integrations here
    // hubspot: { apiKey: 'your-key', portalId: 'your-portal' },
    // calcom: { apiKey: 'your-key', userId: 'your-user-id' }
  });

  const handleCTAClick = (source: string) => {
    setIsModalOpen(true);
    trackLead({
      name: "",
      email: "",
      source,
    });
  };

  // Handle page navigation
  const handleNavigateToPage = (
    page:
      | "home"
      | "product-development"
      | "upskilling-agents"
      | "support-ticket-management"
      | "solutions"
      | "products"
      | "use-cases"
      | "case-studies"
      | "case-study-1"
      | "case-study-2"
      | "case-study-3"
      | "research"
      | "research-study-1"
  ) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Navigation handlers

  // Render different pages based on current page state
  if (currentPage === "product-development") {
    return (
      <>
        <ProductDevelopmentPage
          onBackToHome={() => handleNavigateToPage("home")}
          onOpenModal={() => setIsModalOpen(true)}
        />
        <LeadCaptureModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  }

  if (currentPage === "upskilling-agents") {
    return (
      <>
        <UpskillingProAgentsPage
          onBackToHome={() => handleNavigateToPage("home")}
          onOpenModal={() => setIsModalOpen(true)}
        />
        <LeadCaptureModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  }

  if (currentPage === "research") {
    return (
      <ResearchPageStudy1
        onBackToHome={() => handleNavigateToPage("use-cases")}
        onOpenModal={() => setIsModalOpen(true)}
      />
    );
  }

  if (currentPage === "use-cases") {
    return (
      <UseCasesPage
        onBackToHome={() => handleNavigateToPage("home")}
        onOpenModal={() => setIsModalOpen(true)}
        onNavigateToCaseStudy1={() => handleNavigateToPage("case-study-1")}
        onNavigateToCaseStudy2={() => handleNavigateToPage("case-study-2")}
        onNavigateToCaseStudy3={() => handleNavigateToPage("case-study-3")}
        onNavigateToResearchStudy={() =>
          handleNavigateToPage("research-study-1")
        }
      />
    );
  }

  if (currentPage === "support-ticket-management") {
    return (
      <>
        <SmartTicketSchedulingPage
          onBackToHome={() => handleNavigateToPage("home")}
          onOpenModal={() => setIsModalOpen(true)}
        />
        <LeadCaptureModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  }

  if (currentPage === "solutions") {
    return (
      <SolutionsPage
        onBackToHome={() => handleNavigateToPage("home")}
        onOpenModal={() => setIsModalOpen(true)}
        onNavigateToProducts={() => handleNavigateToPage("products")}
      />
    );
  }

  if (window.location.pathname === "/smart-ticket-scheduling") {
    return (
      <SmartTicketSchedulingPage
        onBackToHome={() => handleNavigateToPage("home")}
        onOpenModal={() => setIsModalOpen(true)}
      />
    );
  }

  if (currentPage === "products") {
    return (
      <>
        <ProductsPage
          onBackToHome={() => handleNavigateToPage("home")}
          onOpenModal={() => setIsModalOpen(true)}
          onNavigateToProductPage={handleNavigateToPage}
        />
        <LeadCaptureModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  }

  if (currentPage === "case-study-1") {
    return (
      <CaseStudy1Page onBackToHome={() => handleNavigateToPage("use-cases")} />
    );
  }
  if (currentPage === "case-study-2") {
    return (
      <CaseStudy2Page onBackToHome={() => handleNavigateToPage("use-cases")} />
    );
  }
  if (currentPage === "case-study-3") {
    return (
      <CaseStudy3Page onBackToHome={() => handleNavigateToPage("use-cases")} />
    );
  }
  if (currentPage === "research-study-1") {
    return (
      <ResearchPageStudy1
        onBackToHome={() => handleNavigateToPage("use-cases")}
        onOpenModal={() => setIsModalOpen(true)}
      />
    );
  }

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
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                style={{ fontSize: "22px" }}
              >
                About
              </a>
              <button
                onClick={() => handleNavigateToPage("products")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                style={{ fontSize: "22px" }}
              >
                Products
              </button>
              <button
                onClick={() => handleNavigateToPage("solutions")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                style={{ fontSize: "22px" }}
              >
                Solutions
              </button>
              <button
                onClick={() => handleNavigateToPage("use-cases")}
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
                  paddingBottom: "0.75rem",
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
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    const section = document.getElementById("why-upskill-pro");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  About
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavigateToPage("products");
                  }}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-left"
                >
                  Products
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavigateToPage("use-cases");
                  }}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  style={{ fontSize: "18px" }}
                >
                  Case Studies
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavigateToPage("solutions");
                  }}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-left"
                >
                  Solutions
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
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse duration-4000"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-1000 duration-4000"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-2000 duration-4000"></div>
      {/* Hero Content */}
      <HeroVortex
        backgroundColor="black"
        baseHue={220}
        particleCount={500}
        rangeY={800}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge - Consistent with SolutionsPage */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-900 via-emerald-700 to-indigo-900 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-100 text-lg font-medium mb-8 shadow-lg animate-fade-in">
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

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-slide-up">
            From Strategy to Prompt: Teach Teams{" "}
            <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 bg-clip-text text-transparent">
              Prompt Engineering
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up delay-200">
            Contextual microlearning for on-the-job prompt engineering that
            sticks
          </p>

          {/* CTA Button - Consistent with SolutionsPage/Home style */}
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
              <span className="text-xl font-medium">Competitive Edge</span>
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
            <p className="text-2xl text-gray-800 max-w-5xl mx-auto">
              An automation agency where strategy meets prompt engineering:
              <br />
              <span className="text-2xl text-gray-800 max-w-5xl mx-auto">
                elevating the work rather than replacing the workers.
              </span>
            </p>
          </div>

          {/* Value Proposition Grid */}
          <div className="flex justify-center my-12">
            <button
              onClick={() => handleNavigateToPage("products")}
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
      {/* How It Works Section */}
      <div
        id="how-it-works"
        className="relative z-10 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500"
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
              Get started with our prompt engineering solutions in three simple
              steps
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 animate-stagger-in">
            {/* Step 1: Schedule a Consultation */}
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative mb-8">
                {/* Step Number */}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/25">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-400/50 to-indigo-400/50 transform translate-x-10"></div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  User schedules an initial free call to discuss your business
                  needs and automation goals with our expert team.
                </p>
              </div>
            </div>

            {/* Step 2: Customize Your Agents */}
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative mb-8">
                {/* Step Number */}
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-indigo-500/25">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-indigo-400/50 to-purple-400/50 transform translate-x-10"></div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Customize Your Agents
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Tailored solutions designed specifically for your business
                  processes, workflows, and unique requirements.
                </p>
              </div>
            </div>

            {/* Step 3: Deploy & Empower Your Team */}
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative mb-8">
                {/* Step Number */}
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-purple-500/25">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Deploy & Empower Your Team
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Rapid deployment with full support and training provided to
                  ensure your team maximizes the benefits of automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              We believe in{" "}
              <span className="font-semibold text-gray-900">
                empowering your workforce
              </span>
              , not replacing it. Our upskilling agents work alongside your team
              to unlock human potential through learning and creativity to drive
              unprecedented growth.
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
                    Replaces human workers with machines
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-red-700">
                    Reduces workforce and eliminates jobs
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-red-700">
                    Creates fear and resistance to change
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-red-700">
                    Limited to repetitive, rule-based tasks
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-red-700">
                    Decreases employee morale and engagement
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
                    <strong>Empowers human workers</strong> with customized
                    learning at their fingertips.
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-emerald-700">
                    <strong>Enhances capabilities</strong> to unlock new
                    opportunities.
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-emerald-700">
                    <strong>Builds excitement</strong> for continuous learning.
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-emerald-700">
                    <strong>Enables complex problem-solving</strong> through
                    creativity.
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-emerald-700">
                    <strong>Increases job satisfaction</strong> and retention.
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
                    Employee Growth
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    On-demand skill development eliminates redundant tasks
                    freeing up time for employee's growth through continuous
                    self-improvement.
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
                    Increased Morale
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Higher job satisfaction through greater variety of work
                    leaves employees feeling not only valued but motivated and
                    empowered.
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
                    Improved Productivity
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Streamlined workflows through intelligent integration that
                    improves productivity by freeing up time for creative
                    problem solving.
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
                    Fostered creative thinking through better time management
                    enabled by human-AI collaboration for arriving at
                    breakthrough solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 p-12 rounded-3xl text-white text-center animate-fade-in-up transform transition-all duration-500 hover:shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">
              Proven Results That Speak for Themselves
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 animate-stagger-in">
              <div className="border-r border-white/20 last:border-r-0 md:border-r md:last:border-r-0 transform transition-all duration-500 hover:scale-110">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  2.4×
                </div>
                <div className="text-lg font-semibold mb-1">
                  Higher Productivity
                </div>
                <div className="text-sm text-blue-200">
                  Companies investing in upskilling
                </div>
              </div>

              <div className="border-r border-white/20 last:border-r-0 md:border-r md:last:border-r-0 transform transition-all duration-500 hover:scale-110">
                <div className="text-4xl font-bold text-emerald-400 mb-2">
                  87%
                </div>
                <div className="text-lg font-semibold mb-1">
                  Employee Retention
                </div>
                <div className="text-sm text-emerald-200">
                  Improved with upskilling programs
                </div>
              </div>

              <div className="transform transition-all duration-500 hover:scale-110">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  65%
                </div>
                <div className="text-lg font-semibold mb-1">
                  Faster Innovation
                </div>
                <div className="text-sm text-purple-200">
                  Time to market for new solutions
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-xl mb-6 text-blue-100">
                Our upskilling agents do not just improve processes - they
                transform people, creating a workforce that is more capable,
                employees more energized, confident and an organization more
                innovative than ever before.
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
        {/* Enhanced Background Elements */}
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
        className="relative z-10 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>

          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse duration-4000"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-1000 duration-4000"></div>

          <div className="relative z-10 animate-fade-in-up">
            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to{" "}
              <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Your Business?
            </h2>
            <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Do not let your competition get ahead. Join forward-thinking
              companies that are already experiencing
              <span className="text-white font-semibold">
                {" "}
                2.4x higher productivity
              </span>{" "}
              and
              <span className="text-white font-semibold">
                {" "}
                unprecedented employee satisfaction
              </span>
              . Take the first step towards empowering your workforce with
              on-demand learning that unlocks human potential through creativity
              and re-energizes your teams.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-stagger-in">
              {/* Primary CTA - Schedule Consultation */}
              <button
                onClick={() => handleCTAClick("final-cta-primary")}
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:from-blue-500 hover:via-emerald-400 hover:to-indigo-500 focus:outline-none focus:ring-4 focus:ring-blue-500/50 min-w-[280px]"
              >
                <span className="relative z-10">Demo Prompt Lesson</span>
                <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-500 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-indigo-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </button>

              {/* Secondary CTA - Request Solution */}
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
                  <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">
                    Free 30-minute consultation
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">
                    No commitment required
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">
                    Tailored to your business
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
      {/* Footer - always at the bottom */}
      <div className="relative z-10 bg-transparent transition-all duration-500 text-blue-100 mt-auto">
        <SiteFooter theme="dark" />
      </div>
    </div>
  );
}

export default App;
