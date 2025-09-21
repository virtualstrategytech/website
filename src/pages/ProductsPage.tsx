import React from "react";
import {
  ArrowLeft,
  Rocket,
  TrendingUp,
  Settings,
  ArrowRight,
} from "lucide-react";

export type ProductsPageProps = {
  onBackToHome: () => void;
};

const products = [
  {
    title: "Product Development",
    description:
      "Build scalable products with automation where it makes sense to grow your business. Improve the creativity of your workforce by making learning on-the-job fun and productive.",
    icon: Rocket,
    color: "orange",
    bullets: [
      "Scalable Solutions",
      "Automation where Needed",
      "Enhanced Creativity",
    ],
  },
  {
    title: "Upskilling Agents for Learning & Productivity",
    description:
      "Empower your workforce with AI-driven learning companions that accelerate skill development and boost productivity.",
    icon: TrendingUp,
    color: "blue",
    bullets: [
      "Personalized Learning",
      "Productivity Gains",
      "Instant Knowledge Retrieval",
    ],
  },
  {
    title: "Support Ticket Management & Smart Scheduling",
    description:
      "Transform customer support with intelligent ticket routing and automated scheduling that delights customers.",
    icon: Settings,
    color: "purple",
    bullets: [
      "Improved Efficiency",
      "24/7 Availability",
      "Effortless Scheduling",
    ],
  },
];

const colorMap = {
  orange: {
    bg: "bg-gradient-to-br from-orange-50 to-red-50",
    border: "border border-orange-100",
    iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
    btn: "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500",
  },
  blue: {
    bg: "bg-white",
    border: "border border-gray-100",
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
    btn: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500",
  },
  purple: {
    bg: "bg-white",
    border: "border border-gray-100",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
    btn: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500",
  },
} as const;

const ProductsPage: React.FC<ProductsPageProps> = ({ onBackToHome }) => (
  <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen">
    {/* Navigation */}
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center"
        style={{ height: "5rem" }}
      >
        <img
          src="/Logo/VirtualStrategyTechLogoSVG.svg"
          alt="Virtual Strategy Tech"
          className="h-20 w-auto object-contain"
        />
        <button
          onClick={onBackToHome}
          className="flex items-center text-blue-600 hover:text-indigo-600 font-semibold text-lg"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>
      </div>
    </header>

    {/* Hero Section */}
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge - Consistent with SolutionsPage */}
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-900 via-emerald-700 to-indigo-900 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-100 text-lg font-medium mb-8 shadow-lg animate-fade-in">
          <Rocket className="w-5 h-5 mr-2" />
          <TrendingUp className="w-5 h-5 mr-2 text-emerald-300" />
          <Settings className="w-5 h-5 mr-2 text-purple-300" />
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

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-slide-up">
          From Strategy to Product: Empower Teams
          <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 bg-clip-text text-transparent">
            {" "}
            Product Innovation
          </span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up delay-200">
          Comprehensive solutions designed to empower your workforce and provide
          strategic counsel that transforms your business operations and
          sustains your growth in the new digital era.
        </p>

        {/* CTA Button - Consistent with SolutionsPage/Home style */}
        <div className="mb-16 animate-slide-up delay-400">
          <button className="group relative inline-flex items-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105 hover:from-emerald-400 hover:via-blue-500 hover:to-purple-500 focus:outline-none focus:ring-4 focus:ring-blue-400/50">
            <span className="relative z-10 tracking-wide drop-shadow">
              Learn More About Products
            </span>
            <ArrowRight className="w-6 h-6 ml-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>

    {/* Products Grid */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-stagger-in">
        {products.map((product) => {
          const color = colorMap[product.color as keyof typeof colorMap];
          return (
            <div
              key={product.title}
              className={`group ${color.bg} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${color.border}`}
            >
              <div
                className={`w-16 h-16 ${color.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <product.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-8">
                {product.bullets.map((b, i) => (
                  <li key={i} className="flex items-center">
                    <span
                      className={`w-2 h-2 ${
                        color.iconBg.split(" ")[1]
                      } rounded-full mr-2`}
                    ></span>
                    {b}
                  </li>
                ))}
              </ul>
              <button
                className={`group/btn w-full ${color.btn} text-white py-3 px-6 rounded-xl font-semibold transition-all duration-500 flex items-center justify-center hover:shadow-lg transform hover:scale-105`}
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-500 group-hover/btn:translate-x-1" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default ProductsPage;
