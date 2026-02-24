import React from "react";
import type { LucideIcon } from "lucide-react";
import { ENABLE_ANIM } from "@/utils/flags";
import { motion } from "framer-motion";

export type SolutionCardProps = {
  title: string;
  description: string;
  bullets?: string[];
  icon: LucideIcon;
  color?:
    | "blue"
    | "emerald"
    | "purple"
    | "amber"
    | "indigo"
    | "cyan"
    | "rose"
    | "teal"
    | "orange";
};

const colorMap = {
  blue: {
    bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
    border: "border border-blue-100",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    shadow: "hover:shadow-xl hover:shadow-blue-500/10"
  },
  emerald: {
    bg: "bg-gradient-to-br from-emerald-50 to-teal-50",
    border: "border border-emerald-100",
    iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    shadow: "hover:shadow-xl hover:shadow-emerald-500/10"
  },
  purple: {
    bg: "bg-gradient-to-br from-purple-50 to-pink-50",
    border: "border border-purple-100",
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
    shadow: "hover:shadow-xl hover:shadow-purple-500/10"
  },
  amber: {
    bg: "bg-gradient-to-br from-amber-50 to-yellow-50",
    border: "border border-amber-100",
    iconBg: "bg-gradient-to-br from-amber-500 to-amber-600",
    shadow: "hover:shadow-xl hover:shadow-amber-500/10"
  },
  indigo: {
    bg: "bg-gradient-to-br from-indigo-50 to-purple-50",
    border: "border border-indigo-100",
    iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    shadow: "hover:shadow-xl hover:shadow-indigo-500/10"
  },
  cyan: {
    bg: "bg-gradient-to-br from-cyan-50 to-blue-50",
    border: "border border-cyan-100",
    iconBg: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    shadow: "hover:shadow-xl hover:shadow-cyan-500/10"
  },
  rose: {
    bg: "bg-gradient-to-br from-rose-50 to-pink-50",
    border: "border border-rose-100",
    iconBg: "bg-gradient-to-br from-rose-500 to-rose-600",
    shadow: "hover:shadow-xl hover:shadow-rose-500/10"
  },
  teal: {
    bg: "bg-gradient-to-br from-teal-50 to-cyan-50",
    border: "border border-teal-100",
    iconBg: "bg-gradient-to-br from-teal-500 to-teal-600",
    shadow: "hover:shadow-xl hover:shadow-teal-500/10"
  },
  orange: {
    bg: "bg-gradient-to-br from-orange-50 to-red-50",
    border: "border border-orange-100",
    iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
    shadow: "hover:shadow-xl hover:shadow-orange-500/10"
  }
};

export const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  bullets,
  icon: Icon,
  color = "blue"
}) => {
  const classes = colorMap[color] ?? colorMap.blue;
  const Wrapper = ENABLE_ANIM ? motion.div : "div";
  return (
    <Wrapper
      className={`group ${classes.bg} p-8 rounded-2xl ${classes.border} ${classes.shadow} transition-all duration-500 hover:-translate-y-2 hover:scale-105`}
    >
      <div
        className={`w-16 h-16 ${classes.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      {bullets && bullets.length > 0 && (
        <ul className="space-y-2 text-sm text-gray-600 mb-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-center">
              <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </Wrapper>
  );
};
