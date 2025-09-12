import React from 'react';
import HeroVortex from './HeroVortex';
import { ENABLE_ANIM } from '@/utils/flags';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-900 to-black text-white">
      {ENABLE_ANIM && <HeroVortex className="absolute inset-0" />}
      
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">
          From Strategy to Prompt
        </h1>
        <p className="text-lg opacity-80">
          Teach Teams <span className="text-blue-400">AI-Ready Thinking</span>
        </p>
        <button className="mt-6 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700">
          Demo Prompt Lesson
        </button>
      </div>
    </section>
  );
}
