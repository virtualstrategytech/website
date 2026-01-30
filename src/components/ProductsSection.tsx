import React from "react";
import { Rocket, Brain, LifeBuoy } from "lucide-react";

type CardProps = {
  id: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  toneClass: string;
  title: string;
  bullets: string[];
  href: string;
};

const ProductCard: React.FC<CardProps> = ({
  id,
  Icon,
  toneClass,
  title,
  bullets,
  href
}) => (
  <section
    id={id}
    className="group bg-white/90 backdrop-blur p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all"
  >
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${toneClass}`}
    >
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <ul className="space-y-2 text-slate-600 mb-6">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-slate-400" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-md transition-all"
    >
      Learn More
      <svg
        className="ml-2 h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M9 18l6-6-6-6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  </section>
);

export default function ProductsSection() {
  return (
    <div className="relative z-10 bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          id="products-grid"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <ProductCard
            id="product-development"
            Icon={Rocket}
            toneClass="bg-gradient-to-br from-amber-500 to-orange-500"
            title="Product Development"
            bullets={[
              "Scalable solutions",
              "Automation where it makes sense",
              "Enhance creativity & speed"
            ]}
            href="/products#product-development"
          />
          <ProductCard
            id="upskilling-agents"
            Icon={Brain}
            toneClass="bg-gradient-to-br from-blue-600 to-indigo-600"
            title="Upskilling Agents for Learning & Productivity"
            bullets={[
              "Personalized learning paths",
              "Productivity gains",
              "Instant knowledge retrieval"
            ]}
            href="/products#upskilling-agents"
          />
          <ProductCard
            id="support-ticket-management"
            Icon={LifeBuoy}
            toneClass="bg-gradient-to-br from-fuchsia-600 to-purple-600"
            title="Support Ticket Management & Smart Scheduling"
            bullets={[
              "Improved efficiency",
              "24/7 availability",
              "Effortless scheduling"
            ]}
            href="/products#support-ticket-management"
          />
        </div>
      </div>
    </div>
  );
}
