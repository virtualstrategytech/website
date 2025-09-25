const CaseStudy2Page = () => {
  // ...component code...
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">
        Automation Agents in Consulting
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Case Study 2: Digital HR Transformation in a Global Professional
        Services Network
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Context</h2>
      <p className="mb-4">
        A multinational advisory firm sought to transform its internal HR
        strategy consulting function into a digital-first model.
      </p>
      <h3 className="text-xl font-semibold mb-2">Challenge</h3>
      <p className="mb-4">
        Manual synthesis of employee engagement data, compliance regulations,
        and retention risks consumed extensive time. HR consultants struggled
        with fragmented data sources and often relied on generic templates for
        strategic reports.
      </p>
      <h3 className="text-xl font-semibold mb-2">Solution</h3>
      <p className="mb-4">
        The firm implemented AI agents within its HR advisory tools that used
        prompt engineering automation to translate ambiguous client queries into
        structured workforce diagnostics. Agents supported natural
        language-to-query translations, automated report generation, and
        self-updating risk dashboards.
      </p>
      <h3 className="text-xl font-semibold mb-2">Results</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Reduced average project cycle from 6 weeks to 2.5 weeks.</li>
        <li>
          Delivered personalized, context-specific prompts that improved client
          engagement during workshops.
        </li>
        <li>
          HR advisors reported 40% less time on data prep and 2x increase in
          perceived strategic value of their work.
        </li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Strategic Impact</h3>
      <p className="mb-4">
        Prompt automation agents became embedded co-creators in the firm’s HR
        strategy playbook. They enabled fast prototyping of policy
        recommendations and supported clients in workforce transformation
        journeys with more confidence and evidence.
      </p>
      <h2 className="text-xl font-semibold mt-4 mb-2">References</h2>
      <p>
        1. Misra, M. M., David, A., & Syed, M. (2023). HR Digital
        Transformation: The Rise of the Digital Workforce, Agents, and
        Co-Pilots. 2. Misra, M. M., David, A., & Syed, M. (2023). Ibid. 3.
        Superagency Report. (2025). Superagency in the Workplace: Empowering
        People to Unlock AI’s Full Potential. 4. Superagency Report. (2025).
        Ibid.
      </p>
      <button
        onClick={onBackToHome}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold mt-8"
      >
        Back to Home
      </button>
    </div>
  );
};

export default CaseStudy2Page;
