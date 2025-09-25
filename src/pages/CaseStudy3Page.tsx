const CaseStudy3Page = () => {
  // ...component code...
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">
        Automation Agents in Consulting
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Case Study 3: Financial Services Advisory and Boutique Consulting Firms
      </p>
      <section className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Context</h2>
        <p>
          A consortium of boutique consulting firms specializing in financial
          services advisory sought scalable ways to offer high-impact insights
          to clients in wealth management, fintech, and regulatory strategy.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Challenge</h3>
        <p>
          High-value insights required time-intensive manual work, especially in
          drafting client-specific financial models, scenario narratives, and
          compliance interpretations.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Solution</h3>
        <p>
          Prompt engineering agents were introduced to generate tailored
          analysis prompts based on sector, client profile, and recent
          regulatory updates. Agents supported natural language-to-query
          translations, automated report generation, and self-updating risk
          dashboards.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Results</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Reduced proposal and reporting turnaround by 65%.</li>
          <li>
            Improved subscription retention through data-driven personalization.
          </li>
          <li>
            Expanded service bandwidth without hiring additional analysts.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-2">Strategic Impact</h3>
        <p>
          Boutique firms leveled up their competitiveness with larger firms,
          offering faster delivery and deeper insights through semi-autonomous
          AI support.
        </p>
        <h2 className="text-xl font-semibold mt-4 mb-2">References</h2>
        <p>
          1. Liu, H. Y., & Hayton, R. J. (2024). Firm-level Adoption of AI and
          Automation Technologies: Case Studies Report. 2. Sikha, V. K., Korada,
          L., & Siramgari, D. (2023). Ibid. 3. Kamaruddin, R. I. (2023). Ibid.
        </p>
      </section>
      <button
        onClick={onBackToHome}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold mt-8"
      >
        Back to Home
      </button>
    </div>
  );
};

export default CaseStudy3Page;
