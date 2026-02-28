import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  TrendingUp,
  LifeBuoy,
  Lightbulb,
  Brain
} from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import HeroVortex from "../components/HeroVortex";
import { useNavigate } from "react-router-dom";
import { LeadCaptureModal } from "../components/LeadCaptureModal";

type ProductCard = {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  bullets: string[];
  bulletIcon: React.ReactNode;
  href: string;
  page: string;
  btnBg: string;
};

const productCards: ProductCard[] = [
  {
    icon: <Users className="w-8 h-8 text-white" />,
    iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    title: "Business Clarity Module",
    description:
      "Turn unstructured business questions into a decision-ready brief: problem, decision + metric, assumptions, next steps.",
    bullets: [
      "Problem statement (1 sentence)",
      "Decision + success metric",
      "Assumptions & constraints"
    ],
    bulletIcon: <Users className="w-4 h-4 text-emerald-500 mr-2" />,
    href: "#product-development",
    page: "/business-clarity",
    btnBg: "bg-gradient-to-r from-emerald-600 to-teal-500"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    iconBg: "bg-gradient-to-br from-blue-600 to-indigo-600",
    title: "Analytics Translator Module",
    description:
      "Translate business questions into KPI defs, event taxonomy, tracking plans and dashboard specs; includes prompt lessons + quiz.",
    bullets: ["KPI definitions", "Event taxonomy", "Tracking plan"],
    bulletIcon: <TrendingUp className="w-4 h-4 text-blue-500 mr-2" />,
    href: "#upskilling-agents",
    page: "/analytics-translator",
    btnBg: "bg-gradient-to-r from-blue-600 to-indigo-600"
  },
  {
    icon: <LifeBuoy className="w-8 h-8 text-white" />,
    iconBg: "bg-gradient-to-br from-fuchsia-600 to-purple-600",
    title: "ML Readiness Module (Roadmap)",
    description:
      "Assess ML suitability, data needs, candidate approaches, evaluation and deployment risks — business-first, low‑jargon.",
    bullets: [
      "ML decision rubric",
      "Data requirements checklist",
      "Evaluation & risks"
    ],
    bulletIcon: <LifeBuoy className="w-4 h-4 text-purple-500 mr-2" />,
    href: "#support-ticket-management",
    page: "/ml-readiness",
    btnBg: "bg-gradient-to-r from-purple-600 to-fuchsia-600"
  }
];

const ProductsPage = () => {
  const navigate = useNavigate();
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
                onClick={() => navigate("/")}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium"
                style={{ fontSize: "20px" }}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md hover:shadow-lg transition-all duration-300"
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

      {/* Hero Section */}
      <HeroVortex
        variant="inner"
        backgroundColor="#070A12"
        baseHue={555}
        particleCount={1100}
        rangeY={800}
        className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="max-w-6xl w-full mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600/40 to-indigo-600/40 border border-white/15 text-blue-100 text-lg font-medium mb-8 shadow-lg animate-fade-in">
            <Lightbulb className="w-5 h-5 mr-2" />
            <Brain className="w-5 h-5 mr-2 text-emerald-300" />
            <span
              style={{
                fontSize: "22px",
                fontWeight: 600,
                letterSpacing: "0.02em"
              }}
            >
              Product and Analytics Enablement
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-slide-up">
            Make Better Decisions:{" "}
            <span className="bg-gradient-to-r from-blue-500 via-emerald-400 to-indigo-400 bg-clip-text text-transparent inline-block pb-1">
              Execute with Confidence
            </span>
          </h1>
          {/* Subheadline */}
          <p className="text-xl sm:text-xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-semibold animate-slide-up delay-200">
            Integrated module platform designed to turn real business questions
            into analytics and machine learning readiness.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16 animate-bounce-in">
            <button
              onClick={() => {
                const el = document.getElementById("products-grid");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-indigo-600 rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
            >
              <span className="relative z-10 tracking-wide drop-shadow">
                Discover Our Product
              </span>
              <ArrowRight className="w-6 h-6 ml-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          </div>

          {/* Value props */}
          <div className="flex flex-wrap justify-center gap-4 text-blue-100 animate-fade-in-up">
            <div className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-full border border-white/20">
              <Users className="w-6 h-6 text-emerald-400" />
              <span className="text-xl font-medium">Strategic Clarity</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-full border border-white/20">
              <TrendingUp className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-medium">Analytics Accuracy</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-full border border-white/20">
              <LifeBuoy className="w-6 h-6 text-purple-400" />
              <span className="text-xl font-medium">Consistent Delivery</span>
            </div>
          </div>
        </div>
      </HeroVortex>

      {/* Real Questions Section */}
      <section className="relative z-10 bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Real Questions{" "}
              <span className="bg-gradient-to-r from-blue-500 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">
                From Product Teams
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Turn ambiguous business problems into clear analytics
              specifications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Question 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-blue-500">
              <p className="text-gray-800 text-lg italic leading-relaxed">
                How should we define activation for our product in real value
                for the customer in the events and properties that we need to
                track?
              </p>
            </div>

            {/* Question 2 */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-emerald-500">
              <p className="text-gray-800 text-lg italic leading-relaxed">
                We are launching a new feature, what are the success metrics,
                instrumentation plan, and dashboard blueprint that we need to
                consider?
              </p>
            </div>

            {/* Question 3 */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-indigo-500">
              <p className="text-gray-800 text-lg italic leading-relaxed">
                Conversion is flat-lining, what decisions do we need to consider
                to improve it and how will we measure their impact?
              </p>
            </div>

            {/* Question 4 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-cyan-500">
              <p className="text-gray-800 text-lg italic leading-relaxed">
                Which KPI's should be our North Star, and what should we stop
                doing if it doesn't improve?
              </p>
            </div>

            {/* Question 5 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-purple-500 lg:col-span-2 max-w-3xl mx-auto">
              <p className="text-gray-800 text-lg italic leading-relaxed">
                Where are our users dropping off during onboarding, and what is
                the minimum event taxonomy that would diagnose and fix it?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards Section */}
      <section
        id="products-grid"
        className="relative z-10 bg-gradient-to-br from-emerald-100 to-blue-50 py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                NovAIn Integrated
              </span>{" "}
              Modules
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up delay-200">
              Integrated modular platform designed to improve decision quality
              based on analytics specfications, evaluation, and risk associated
              with machine learning requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCards.map((card) => (
              <div
                key={card.title}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="p-8">
                  <div
                    className={`w-16 h-16 ${card.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {card.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-center text-gray-700">
                        {card.bulletIcon}
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate(card.page)}
                    className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-2xl text-white font-semibold ${card.btnBg} shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]`}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div>
        <SiteFooter onContactClick={handleOpenModal} />
        <LeadCaptureModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default ProductsPage;
