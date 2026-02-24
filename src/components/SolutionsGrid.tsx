import React from "react";
import { SolutionCard, SolutionCardProps } from "./SolutionCard";
import { Rocket } from "lucide-react";

export type SolutionsGridProps = {
  cards: SolutionCardProps[];
};

export const SolutionsGrid: React.FC<SolutionsGridProps> = ({ cards }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger-in">
    {cards.map((card, idx) => (
      <SolutionCard key={card.title + idx} {...card} />
    ))}
  </div>
);
{
  /* Product Development */
}
<div className="group bg-gradient-to-br from-fuchsia-50 to-pink-50 p-8 rounded-2xl border border-fuchsia-100 hover:shadow-xl hover:shadow-fuchsia-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
    <Rocket className="w-8 h-8 text-white" />
  </div>
  <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Development</h3>
  <p className="text-gray-600 leading-relaxed mb-6">
    Turn ideas into market-ready products faster with customer-driven roadmaps,
    rapid prototyping, and tight feedback loops.
  </p>
  <ul className="space-y-2 text-sm text-gray-600">
    <li className="flex items-center">
      <Rocket className="w-4 h-4 text-fuchsia-500 mr-2" />
      Rapid Prototyping & MVPs
    </li>
    <li className="flex items-center">
      <Rocket className="w-4 h-4 text-fuchsia-500 mr-2" />
      User Testing Loops
    </li>
    <li className="flex items-center">
      <Rocket className="w-4 h-4 text-fuchsia-500 mr-2" />
      Roadmaps & Release Planning
    </li>
  </ul>
</div>;
