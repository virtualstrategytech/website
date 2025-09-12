import React from 'react';
import { ArrowLeft, Users, Zap, TrendingUp, Target, CheckCircle, Clock, Shield, BarChart3, Rocket, ArrowRight, Settings, MessageSquare, Calendar, Headphones, Bot, Workflow, Brain, BookOpen, Database, Mail, Phone, Cpu, Award, Lightbulb } from 'lucide-react';

interface SolutionsPageProps {
  onBackToHome: () => void;
  onOpenModal: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onBackToHome, onOpenModal }) => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden scroll-smooth">
      
      {/* Header with Back Button */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40" style={{ height: 'calc(6rem * 1.3)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center" style={{ height: 'calc(6rem * 1.3)' }}>
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/Logo/VirtualStrategyTechLogoSVG.svg" 
                alt="Virtual Strategy Tech - Productivity Reimagined" 
                className="h-36 w-auto object-contain"
              />
            </div>
            
            {/* Navigation */}
            <div className="flex items-center space-x-6">
              <button
                onClick={onBackToHome}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                style={{ fontSize: '22px' }}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </button>
              <button>
                onClick={onOpenModal}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105"
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
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000 duration-4000"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-2000 duration-4000"></div>

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-200 text-lg font-medium mb-8 animate-fade-in">
            <Lightbulb className="w-5 h-5 mr-2" />
            <span style={{ fontSize: '22px' }}>Comprehensive AI Solutions</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-slide-up">
            Complete Suite of{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI-Powered Solutions
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-emerald-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up delay-200">
            Discover our comprehensive portfolio of intelligent automation solutions designed to transform every aspect of your business operations and unlock unprecedented growth potential.
          </p>

          {/* CTA Button */}
          <div className="mb-16 animate-slide-up delay-400">
            <button 
              onClick={() => {
                const solutionsSection = document.getElementById('solutions-portfolio');
                if (solutionsSection) {
                  solutionsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 hover:from-emerald-500 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
            >
              <span className="relative z-10">Explore All Solutions</span>
              <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 text-emerald-200 animate-slide-up delay-600">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Zap className="w-6 h-6 text-emerald-400" />
              <span className="text-xl font-medium">End-to-End Automation</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <TrendingUp className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-medium">Scalable Growth</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Shield className="w-6 h-6 text-purple-400" />
              <span className="text-xl font-medium">Enterprise Security</span>
            </div>
          </div>

        </div>
      </div>

      {/* Solutions Overview Section */}
      <div id="solutions-portfolio" className="relative z-10 bg-white py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Solution Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions that work together to transform your entire business ecosystem.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger-in">
            
            {/* Upskilling Agents */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Upskilling Agents</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                AI-powered learning companions that accelerate skill development and boost productivity through personalized, on-demand education.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" />Personalized Learning Paths</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" />Real-time Knowledge Assistance</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" />Progress Tracking & Analytics</li>
              </ul>
            </div>

            {/* AI Lead Capture & CRM */}
            <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lead Capture</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Intelligent lead capture that identifies, qualifies, and nurtures prospects from various channels, ensuring no opportunity is missed.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />Intelligent Lead Scoring</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />Multi-channel Capture</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />Automated Nurturing</li>
              </ul>
            </div>

            {/* CRM Integration */}
            <div className="group bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl border border-amber-100 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">CRM Integration</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Seamlessly connect your lead data with leading CRM platforms, ensuring real-time synchronization and a unified view of your customer journey.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" />Real-time Data Sync</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" />Custom Field Mapping</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" />Unified Customer View</li>
              </ul>
            </div>

            {/* Support Ticket Management */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Ticket Management</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Transform customer support with intelligent ticket routing and automated scheduling that delivers exceptional experiences.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" />Intelligent Ticket Routing</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" />Automated Scheduling</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" />24/7 AI Assistant</li>
              </ul>
            </div>

            {/* Process Automation */}
            <div className="group bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Process Optimization</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Optimize and enhance your business processes through intelligent analysis and strategic improvements that maximize efficiency and performance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Process Analysis & Mapping</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Performance Optimization</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Efficiency Improvements</li>
              </ul>
            </div>

            {/* Data Analytics & Insights */}
            <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-100 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Analytics & Insights</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Transform raw data into actionable insights with AI-powered analytics that drive informed decision-making.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-500 mr-2" />Predictive Analytics</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-500 mr-2" />Real-time Dashboards</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-500 mr-2" />Custom Reporting</li>
              </ul>
            </div>

            {/* Innovation Management */}
            <div className="group bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl border border-rose-100 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation Management</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Foster innovation culture and accelerate idea-to-implementation cycles with AI-powered innovation management that transforms creative concepts into business value.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" />Idea Generation & Capture</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" />Innovation Pipeline Tracking</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" />ROI Impact Assessment</li>
              </ul>
            </div>

            {/* Strategy Consulting */}
            <div className="group bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategy Consulting</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Transform your business strategy with AI-powered insights and expert guidance that aligns technology initiatives with strategic objectives for sustainable growth.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" />Strategic Planning & Roadmapping</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" />Digital Transformation Strategy</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" />Performance Optimization</li>
              </ul>
            </div>

            {/* Communication Automation */}
            <div className="group bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Change Management</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Navigate organizational transformation with AI-powered change management that ensures smooth transitions and employee adoption.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />Change Impact Assessment</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />Employee Readiness Tracking</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />Adoption Analytics</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Integration Benefits Section */}
      <div className="relative z-10 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Integrated <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Ecosystem</span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Our solutions work seamlessly together to create a unified, intelligent business ecosystem
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger-in">
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Unified Data Platform</h3>
              <p className="text-emerald-100 leading-relaxed text-sm">
                All solutions share a common data foundation, ensuring consistency and enabling powerful cross-functional insights.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Seamless Integration</h3>
              <p className="text-blue-100 leading-relaxed text-sm">
                Solutions integrate effortlessly with your existing systems and with each other for maximum efficiency.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Scalable Architecture</h3>
              <p className="text-purple-100 leading-relaxed text-sm">
                Built to grow with your business, from startup to enterprise, without compromising performance.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative z-10 bg-gradient-to-br from-emerald-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Ready to <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover how our comprehensive AI solutions can revolutionize your operations, boost productivity, and drive unprecedented growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-stagger-in">
              
              <button 
                onClick={onOpenModal}
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 transform hover:scale-105 hover:from-emerald-500 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 min-w-[280px]"
              >
                <span className="relative z-10">Schedule Your Consultation</span>
                <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-500 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </button>

              <button 
                onClick={onBackToHome}
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300/30 min-w-[280px]"
              >
                <span className="relative z-10">Explore Individual Services</span>
                <Rocket className="w-5 h-5 ml-3 transition-transform duration-500 group-hover:rotate-12" />
              </button>

            </div>

            {/* Trust Elements */}
            <div className="mt-12 pt-8 border-t border-gray-200 animate-fade-in-up">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">Free consultation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">Custom implementation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">Ongoing support</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};