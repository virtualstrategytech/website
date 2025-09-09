import React from 'react';
import { ArrowLeft, Users, Zap, TrendingUp, Target, CheckCircle, Clock, Shield, BarChart3, Rocket, ArrowRight, Mail, Phone, Calendar, MessageSquare, Database, Workflow } from 'lucide-react';

interface AiLeadCapturePageProps {
  onBackToHome: () => void;
  onOpenModal: () => void;
}

export const AiLeadCapturePage: React.FC<AiLeadCapturePageProps> = ({ onBackToHome, onOpenModal }) => {
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
              <button
                onClick={onOpenModal}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105"
                style={{ fontSize: '30px', paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '1rem', paddingBottom: '1rem' }}
              >
                Get Started
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
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-200 text-lg font-medium mb-8 animate-fade-in">
            <Users className="w-5 h-5 mr-2" />
            <span style={{ fontSize: '22px' }}>AI-Powered Lead Management</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-slide-up">
            Transform Your Sales with{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
              AI Lead Capture & CRM Integration
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-emerald-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up delay-200">
            Revolutionize your sales process with intelligent lead capture and seamless CRM workflows that never miss an opportunity and convert prospects into loyal customers.
          </p>

          {/* CTA Button */}
          <div className="mb-16 animate-slide-up delay-400">
            <button 
              onClick={onOpenModal}
              className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 hover:from-emerald-500 hover:to-teal-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
            >
              <span className="relative z-10">Schedule Your Free Demo</span>
              <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 text-emerald-200 animate-slide-up delay-600">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Clock className="w-6 h-6 text-emerald-400" />
              <span className="text-xl font-medium">Instant Response</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <TrendingUp className="w-6 h-6 text-teal-400" />
              <span className="text-xl font-medium">Higher Conversions</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="text-xl font-medium">Seamless Integration</span>
            </div>
          </div>

        </div>
      </div>

      {/* Key Features Section */}
      <div className="relative z-10 bg-white py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Powerful <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered lead capture system transforms how you connect with prospects and manage your sales pipeline.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger-in">
            
            {/* Intelligent Lead Scoring */}
            <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Lead Scoring</h3>
              <p className="text-gray-600 leading-relaxed">
                AI algorithms automatically score and prioritize leads based on engagement, behavior, and conversion probability to focus your team's efforts on the most promising prospects.
              </p>
            </div>

            {/* Real-time CRM Sync */}
            <div className="group bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time CRM Sync</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamlessly integrate with HubSpot, Salesforce, and other major CRM platforms. All lead data is automatically synchronized in real-time without manual data entry.
              </p>
            </div>

            {/* Automated Follow-up */}
            <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-100 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated Follow-up</h3>
              <p className="text-gray-600 leading-relaxed">
                Intelligent email sequences and personalized follow-up campaigns that nurture leads through the sales funnel with the right message at the right time.
              </p>
            </div>

            {/* Multi-channel Capture */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-channel Capture</h3>
              <p className="text-gray-600 leading-relaxed">
                Capture leads from websites, social media, chat, phone calls, and events. All channels feed into a unified system for comprehensive lead management.
              </p>
            </div>

            {/* Smart Scheduling */}
            <div className="group bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Scheduling</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered calendar integration that automatically schedules meetings based on lead priority, sales rep availability, and optimal conversion timing.
              </p>
            </div>

            {/* Advanced Analytics */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive dashboards and reports that provide insights into lead quality, conversion rates, sales performance, and ROI optimization opportunities.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative z-10 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              How It <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Transform your lead management process in four simple steps
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
                <h3 className="text-xl font-bold text-white mb-3">Lead Capture</h3>
                <p className="text-emerald-100 leading-relaxed text-sm">
                  AI automatically captures leads from all channels and enriches data with behavioral insights.
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
                <h3 className="text-xl font-bold text-white mb-3">Intelligent Scoring</h3>
                <p className="text-teal-100 leading-relaxed text-sm">
                  Advanced algorithms score and prioritize leads based on conversion probability and value.
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
                <h3 className="text-xl font-bold text-white mb-3">CRM Integration</h3>
                <p className="text-cyan-100 leading-relaxed text-sm">
                  Seamless synchronization with your existing CRM system for unified lead management.
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
                <h3 className="text-xl font-bold text-white mb-3">Automated Follow-up</h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  Intelligent nurturing campaigns convert prospects into customers automatically.
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
              Measurable <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the impact our AI lead capture system has on your sales performance and business growth.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-stagger-in">
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all duration-500 hover:scale-105">
              <div className="text-4xl font-bold text-emerald-600 mb-2">3.5×</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Faster Response</div>
              <div className="text-sm text-gray-600">Average lead response time</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all duration-500 hover:scale-105">
              <div className="text-4xl font-bold text-teal-600 mb-2">67%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Higher Conversion</div>
              <div className="text-sm text-gray-600">Lead to customer conversion rate</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all duration-500 hover:scale-105">
              <div className="text-4xl font-bold text-cyan-600 mb-2">89%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Time Savings</div>
              <div className="text-sm text-gray-600">Reduction in manual data entry</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all duration-500 hover:scale-105">
              <div className="text-4xl font-bold text-blue-600 mb-2">245%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">ROI Increase</div>
              <div className="text-sm text-gray-600">Return on investment within 6 months</div>
            </div>
            
          </div>

          {/* Key Benefits List */}
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">AI Lead Capture Solution</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Never Miss a Lead</h4>
                    <p className="text-gray-600">24/7 automated capture ensures no opportunity slips through the cracks, even outside business hours.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Intelligent Prioritization</h4>
                    <p className="text-gray-600">AI scoring helps your sales team focus on the most promising leads first, maximizing conversion rates.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Seamless Integration</h4>
                    <p className="text-gray-600">Works with your existing CRM and marketing tools without disrupting current workflows.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Personalized Engagement</h4>
                    <p className="text-gray-600">AI-driven personalization ensures each lead receives relevant, timely communication that resonates.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Actionable Insights</h4>
                    <p className="text-gray-600">Comprehensive analytics provide clear visibility into what's working and where to optimize.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Scalable Growth</h4>
                    <p className="text-gray-600">System grows with your business, handling increased lead volume without additional overhead.</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative z-10 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
          
          <div className="relative z-10 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent">Revolutionize</span> Your Sales?
            </h2>
            <p className="text-xl sm:text-2xl text-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of companies that have transformed their lead management with our AI-powered solution. 
              See results in as little as 30 days with our proven system.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-stagger-in">
              
              <button 
                onClick={onOpenModal}
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 transform hover:scale-105 hover:from-emerald-500 hover:to-teal-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 min-w-[280px]"
              >
                <span className="relative z-10">Schedule Your Free Demo</span>
                <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-500 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </button>

              <button 
                onClick={onBackToHome}
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-emerald-200 bg-white/10 backdrop-blur-sm border-2 border-emerald-400/30 rounded-xl hover:bg-white/20 hover:border-emerald-300/50 transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 min-w-[280px]"
              >
                <span className="relative z-10">Explore Other Solutions</span>
                <Rocket className="w-5 h-5 ml-3 transition-transform duration-500 group-hover:rotate-12" />
              </button>

            </div>

            {/* Trust Elements */}
            <div className="mt-12 pt-8 border-t border-white/20 animate-fade-in-up">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-emerald-200">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">Free 30-day trial</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-teal-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">No setup fees</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">24/7 support included</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};