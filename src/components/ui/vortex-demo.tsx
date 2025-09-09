import React from "react";
import { Vortex } from "@/components/ui/vortex";

function VortexSection() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Transform Your Business
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Experience the power of AI-driven upskilling automation that revolutionizes your workforce capabilities.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]" style={{ fontSize: '10px' }}>
            Get Started
          </button>
          <button className="px-4 py-2 text-white hover:text-blue-300 transition duration-200">
            Learn More
          </button>
        </div>
      </Vortex>
    </div>
  );
}

function VortexFullPage() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          AI Upskilling Revolution
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Unlock your team's potential with intelligent automation that adapts and grows with your business needs.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]" style={{ fontSize: '10px' }}>
            Schedule Demo
          </button>
          <button className="px-4 py-2 text-white hover:text-blue-300 transition duration-200">
            View Case Studies
          </button>
        </div>
      </Vortex>
    </div>
  );
}

export { VortexSection, VortexFullPage };