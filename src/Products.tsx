import React from "react";
import { ArrowRight, Users, TrendingUp, Settings } from "lucide-react";

const Products: React.FC = () => (
  <div
    id="products"
    className="relative z-10 bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500"
  >
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Products
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive solutions designed to empower your workforce and
          provide strategic counsel that transforms your business operations
          and sustains your growth in the new digital era.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-stagger-in">
        {/* AI Lead Capture & CRM Integration */}
        <div
          id="ai-lead-capture"
          className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 border border-gray-100"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            AI Lead Capture & CRM Integration
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Revolutionize your sales process with intelligent lead capture
            and seamless CRM workflows that never miss an opportunity.
          </p>
          {/* Key Benefits */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
              <span className="font-medium">Fast Lead Responses</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
              <span className="font-medium">Seamless CRM Integration</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
              <span className="font-medium">Higher Conversions</span>
            </div>
          </div>
          <button className="group/btn w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-emerald-500 hover:to-teal-500 transition-all duration-500 flex items-center justify-center hover:shadow-lg transform hover:scale-105">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-500 group-hover/btn:translate-x-1" />
          </button>
        </div>

        {/* Upskilling Agents for Learning & Productivity */}
        <div
          id="upskilling-agents"
          className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 border border-gray-100"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Upskilling Agents for Learning & Productivity
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Empower your workforce with AI-driven learning companions that
            accelerate skill development and boost productivity.
          </p>
          {/* Key Benefits */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="font-medium">Personalized Learning</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="font-medium">Productivity Gains</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="font-medium">
                Instant Knowledge Retrieval
              </span>
            </div>
          </div>
          <button className="group/btn w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all duration-500 flex items-center justify-center hover:shadow-lg transform hover:scale-105">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-500 group-hover/btn:translate-x-1" />
          </button>
        </div>

        {/* Support Ticket Management & Smart Scheduling */}
        <div
          id="support-management"
          className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 border border-gray-100"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Support Ticket Management & Smart Scheduling
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Transform customer support with intelligent ticket routing and
            automated scheduling that delights customers.
          </p>
          {/* Key Benefits */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
              <span className="font-medium">Improved Efficiency</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
              <span className="font-medium">24/7 Availability</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
              <span className="font-medium">Effortless Scheduling</span>
            </div>
          </div>
          <button className="group/btn w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-500 flex items-center justify-center hover:shadow-lg transform hover:scale-105">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-500 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Products;
