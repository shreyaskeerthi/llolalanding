export default function ProblemSection() {
  const problems = [
    "Bots hallucinate refund policies and guarantees.",
    "Guardrails don't cover multi-turn 'real' customer behavior.",
    "Manual QA catches happy paths, not adversarial prompts.",
    "Refund leakage, compliance issues, and PR risk all start in the chat window.",
  ];

  const riskCategories = [
    { name: "Refund Leakage", impact: "High" },
    { name: "Policy Contradictions", impact: "High" },
    { name: "Safety Violations", impact: "Critical" },
    { name: "Unauthorized Discounts", impact: "Medium" },
    { name: "Compliance Issues", impact: "High" },
  ];

  return (
    <section id="product" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Problem statement */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              LLMs are powerful — and they break in ways that cost you money.
            </h2>
            <ul className="space-y-4">
              {problems.map((problem, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-300 text-lg">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Risk categories card */}
          <div className="lg:ml-auto w-full max-w-md">
            <div className="bg-dark-card rounded-xl border border-dark-border p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Common Risk Categories
              </h3>
              <div className="space-y-3">
                {riskCategories.map((risk, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-dark-lighter rounded-lg border border-dark-border"
                  >
                    <span className="text-sm font-medium text-gray-200">
                      {risk.name}
                    </span>
                    <span
                      className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                        risk.impact === "Critical"
                          ? "bg-red-500/20 text-red-400 border border-red-500/30"
                          : risk.impact === "High"
                          ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      }`}
                    >
                      {risk.impact}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
