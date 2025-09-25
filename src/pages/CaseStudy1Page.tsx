const CaseStudy1Page = () => {
  // ...component code...
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">
        Automation Agents in Consulting
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Case Study 1: Strategic Intelligence Acceleration in a Mid-Tier
        Consulting Firm
      </p>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Context</h2>
        <p>
          A UK-based market research and business strategy firm faced growing
          pressure to deliver faster, deeper insights to clients without scaling
          headcount or increasing operational overhead.
        </p>
        <h2 className="text-xl font-semibold mt-4 mb-2">Challenge</h2>
        <p>
          Consultants spent over 40% of their time drafting client deliverables
          and fine-tuning prompts to extract actionable insights from internal
          knowledge bases and third-party data. Prompt engineering was manual,
          inconsistent, and heavily dependent on individual expertise—causing
          delays and variable quality.¹
        </p>
        <h2 className="text-xl font-semibold mt-4 mb-2">Solution</h2>
        <p>
          The firm deployed automation agents trained to generate, test, and
          refine prompts iteratively based on project goals, client tone, and
          historical data quality.² These agents included a prompt recommender
          fine-tuned on successful past outputs, an LLM-integrated QA module to
          validate insights for factuality and relevance, and workflow agents
          that could autonomously reroute prompts based on response quality.³
        </p>
        <h2 className="text-xl font-semibold mt-4 mb-2">Results</h2>
        <ul className="list-disc ml-6">
          <li>
            60% reduction in time-to-insight from client kickoff to initial
            presentation draft.
          </li>
          <li>
            Consistency improved across deliverables due to automated prompt
            standardization.
          </li>
          <li>
            Upskilling curve lowered: new hires reached full productivity in
            half the time.
          </li>
          <li>
            Clients rated outputs as 25% more useful in strategy development,
            particularly in trend spotting and early-stage scenario modeling.
          </li>
        </ul>
        <h2 className="text-xl font-semibold mt-4 mb-2">Strategic Impact</h2>
        <p>
          Automation agents didn’t replace consultants—they extended their
          strategic reach. The “missing middle” of prompt iteration and data
          wrangling was filled by agents, freeing human advisors to focus on
          storytelling, hypothesis testing, and client engagement.⁴
        </p>
        <h2 className="text-xl font-semibold mt-4 mb-2">References</h2>
        <p>
          1. Kamaruddin, R. I. (2023). ChatGPT and the Future of Management
          Consulting. MIT Sloan School of Management. 2. Sikha, V. K., Korada,
          L., & Siramgari, D. (2023). Mastering Prompt Engineering: Optimizing
          Interaction with Generative AI Agents. 3. Liu, Y., et al. (2023).
          Summary of ChatGPT-Related Research and Perspective Towards the Future
          of Large Language Models. 4. Daugherty, P. R., & Wilson, H. J. (2023).
          Human + Machine.
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

export default CaseStudy1Page;
