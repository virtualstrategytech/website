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
    title: "Lead Capture and CRM Integration",
    description:
      "Revolutionize your sales process with intelligent lead capture systems that convert prospects into customers automatically and efficiently.",
    bullets: [
      "Fast Lead Responses",
      "Seamless CRM Integration",
      "Higher Conversions"
    ],
    bulletIcon: <Users className="w-4 h-4 text-emerald-500 mr-2" />,
    href: "#product-development",
    page: "/product-development",
    btnBg: "bg-gradient-to-r from-emerald-600 to-teal-500"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    iconBg: "bg-gradient-to-br from-blue-600 to-indigo-600",
    title: "Upskilling Agents for Learning & Productivity",
    description:
      "Empower your workforce with AI-driven learning companions that accelerate skill development and boost productivity.",
    bullets: [
      "Personalized Learning",
      "Skill Assessments",
      "Progress Tracking"
    ],
    bulletIcon: <TrendingUp className="w-4 h-4 text-blue-500 mr-2" />,
    href: "#upskilling-agents",
    page: "/upskilling-agents",
    btnBg: "bg-gradient-to-r from-blue-600 to-indigo-600"
  },
  {
    icon: <LifeBuoy className="w-8 h-8 text-white" />,
    iconBg: "bg-gradient-to-br from-fuchsia-600 to-purple-600",
    title: "Support Ticket Management & Smart Scheduling",
    description:
      "Transform customer support with intelligent ticket routing and automated scheduling that delights customers.",
    bullets: [
      "Improved Efficiency",
      "24/7 Availability",
      "Effortless Scheduling"
    ],
    bulletIcon: <LifeBuoy className="w-4 h-4 text-purple-500 mr-2" />,
    href: "#support-ticket-management",
    page: "/support-ticket-management",
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
              Strategic Product Solutions
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-slide-up">
            From Strategy to Prompt: Teach Teams
            <span className="bg-gradient-to-r from-blue-500 via-emerald-400 to-indigo-400 bg-clip-text text-transparent inline-block pb-1">
              Prompt Engineering
            </span>
          </h1>
          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Discover our comprehensive portfolio of intelligent automation
            solutions designed to transform every aspect of your business
            operations and unlock unprecedented growth potential.
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
                Discover Our Products
              </span>
              <ArrowRight className="w-6 h-6 ml-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          </div>

          {/* Value props */}
          <div className="flex flex-wrap justify-center gap-4 text-blue-100 animate-fade-in-up">
            <div className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-full border border-white/20">
              <Users className="w-6 h-6 text-emerald-400" />
              <span className="text-xl font-medium">Scalable Solutions</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-full border border-white/20">
              <TrendingUp className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-medium">Productivity Gains</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-full border border-white/20">
              <LifeBuoy className="w-6 h-6 text-purple-400" />
              <span className="text-xl font-medium">Effortless Support</span>
            </div>
          </div>
        </div>
      </HeroVortex>

      {/* Product Cards Section */}
      <section
        id="products-grid"
        className="relative z-10 bg-gradient-to-br from-emerald-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Product
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Three core solutions designed to modernize operations, elevate
              productivity, and scale your organization intelligently.
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

export default ProductsPage; // Ensure it's exported as default
