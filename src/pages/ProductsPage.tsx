import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  TrendingUp,
  LifeBuoy,
} from "lucide-react";

interface ProductsPageProps {
  onBackToHome: () => void;
  onOpenModal: () => void;
}

interface ProductCard {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  bullets: string[];
  bulletIcon: React.ReactNode;
  href: string;
  btnBg: string;
}

const productCards: ProductCard[] = [
  {
    icon: <Users className="w-8 h-8 text-white" />,
    iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    title: "Product Development",
    description:
      "Build scalable products with automation where it makes sense to grow your business. Improve the creativity of your workforce by making learning on-the-job fun and productive.",
    bullets: [
      "Scalable Solutions",
      "Automation where Needed",
      "Enhanced Creativity",
    ],
    bulletIcon: <Users className="w-4 h-4 text-emerald-500 mr-2" />,
    href: "/products#product-development",
    btnBg: "bg-gradient-to-r from-emerald-600 to-teal-500",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    iconBg: "bg-gradient-to-br from-blue-600 to-indigo-600",
    title: "Upskilling Agents for Learning & Productivity",
    description:
      "Empower your workforce with AI-driven learning companions that accelerate skill development and boost productivity.",
    bullets: [
      "Personalized Learning",
      "Productivity Gains",
      "Instant Knowledge Retrieval",
    ],
    bulletIcon: <TrendingUp className="w-4 h-4 text-blue-500 mr-2" />,
    href: "/products#upskilling-agents",
    btnBg: "bg-gradient-to-r from-blue-600 to-indigo-600",
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
      "Effortless Scheduling",
    ],
    bulletIcon: <LifeBuoy className="w-4 h-4 text-fuchsia-500 mr-2" />,
    href: "/products#support-ticket-management",
    btnBg: "bg-gradient-to-r from-fuchsia-600 to-purple-600",
  },
];

export default function ProductsPage({
  onBackToHome,
  onOpenModal,
}: ProductsPageProps) {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/Logo/VirtualStrategyTechLogoSVG.svg"
              alt="Virtual Strategy Tech"
              className="h-36 w-auto object-contain"
            />
          </div>
          <div className="flex-1" />
          {/* Back to Home */}

          <button
            onClick={onBackToHome}
            className="text-gray-700 hover:text-blue-600 font-medium"
            style={{ fontSize: "22px" }}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          {/* Demo Button */}
          <button
            onClick={onOpenModal}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow hover:from-blue-500 hover:to-indigo-500 transition-all duration-300"
            style={{ fontSize: "20px" }}
          >
            Demo
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-32 pb-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-700 via-blue-700 to-purple-700 border border-emerald-400/30 rounded-full text-emerald-100 text-lg font-medium mb-8 shadow-lg">
            <Users className="w-5 h-5 mr-2" />
            <span
              style={{
                fontSize: "22px",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              Strategic Product Solutions
            </span>
          </div>
          <h1 className="font-sans text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            From Strategy to Product: Teach Teams{" "}
            <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-purple-600 bg-clip-text text-transparent">
              Product Engineering
            </span>
          </h1>
          <p className="font-sans text-2xl text-blue-100 mb-12 max-w-4xl mx-auto font-normal leading-snug">
            Discover our comprehensive portfolio of intelligent automation
            solutions designed to transform every aspect of your business
            operations and unlock unprecedented growth potential.
          </p>
          <div className="mb-16">
            <button
              onClick={onOpenModal}
              className="group relative inline-flex items-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105 hover:from-emerald-400 hover:via-blue-500 hover:to-purple-500 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
            >
              <span className="relative z-10 tracking-wide drop-shadow">
                Discover Our Products
              </span>
              <ArrowRight className="w-6 h-6 ml-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>
          {/* Feature Chips */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 text-emerald-200">
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
      </section>

      {/* Product Cards Section */}
      <section className="relative z-10 bg-gradient-to-br from-emerald-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCards.map((card) => (
              <div
                key={card.title}
                className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 border border-gray-100`}
              >
                <div
                  className={`w-16 h-16 ${card.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {card.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {card.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-700"
                    >
                      {card.bulletIcon}
                      <span className="font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={card.href}
                  className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold text-white ${card.btnBg} hover:from-blue-500 hover:to-indigo-500 shadow-md transition-all`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
