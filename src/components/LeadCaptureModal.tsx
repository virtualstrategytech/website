/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { X, Zap, ArrowRight } from "lucide-react";
import { CalendarIntegration } from "./CalendarIntegration";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  onClose,
  title = "Ready to Transform Your Business?",
  subtitle = "Schedule your free consultation and discover how upskilling agents can revolutionize your workforce.",
}) => {
  const [showCalendar, setShowCalendar] = useState(false);

  if (!isOpen) return null;

  const handleScheduleSuccess = (data: any) => {
    // This would integrate with your CRM
    console.log("Lead captured:", data);

    // Send to HubSpot or your CRM
    // trackLeadConversion(data);

    // Close modal after successful scheduling
    setTimeout(() => {
      onClose();
      setShowCalendar(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-blue-100 text-lg">{subtitle}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {!showCalendar ? (
            <div className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Benefits */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    What You'll Get:
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Personalized Strategy
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Tailored automation roadmap for your specific business
                          needs
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          ROI Analysis
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Clear projections on productivity gains and cost
                          savings
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Implementation Plan
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Step-by-step guide to deploying upskilling agents
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col justify-center">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Free 30-Minute Consultation
                    </h4>
                    <p className="text-gray-600 mb-4">
                      No commitment required. Discover how we can transform your
                      business.
                    </p>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        <span>Completely free, no strings attached</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span>Tailored to your industry and needs</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                        <span>Actionable insights you can implement</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowCalendar(true)}
                    className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Schedule Your Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <CalendarIntegration onScheduleSuccess={handleScheduleSuccess} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
