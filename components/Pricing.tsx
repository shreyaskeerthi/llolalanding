export default function Pricing() {
  const plans = [
    {
      name: "One-time audit",
      description:
        "7-day engagement to reveal the biggest risks in your bot. Ideal for teams shipping or scaling AI support for the first time.",
      features: [
        "25-100 adversarial test scenarios",
        "Comprehensive reliability report",
        "Policy contradiction analysis",
        "Safety & compliance review",
        "Remediation recommendations",
        "One optional re-test",
      ],
      cta: "Request audit",
      highlight: false,
    },
    {
      name: "Ongoing monitoring",
      description:
        "Run these tests regularly to catch regressions and new failure modes. Ideal for products under active development.",
      features: [
        "Everything in one-time audit",
        "Monthly or sprint-based testing",
        "Trend analysis over time",
        "Regression detection",
        "Priority support",
        "Custom scenario development",
      ],
      cta: "Schedule consultation",
      highlight: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple engagement model
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Start with a focused audit, then expand to continuous testing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-dark-card rounded-xl p-8 border-2 transition-all duration-300 ${
                plan.highlight
                  ? "border-accent shadow-2xl"
                  : "border-dark-border hover:border-dark-border/80 hover:shadow-xl"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-accent text-white text-sm font-medium rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-3">
                {plan.name}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full px-6 py-3 font-medium rounded-lg transition-all text-center ${
                  plan.highlight
                    ? "bg-accent text-white hover:bg-accent-light shadow-md hover:shadow-lg"
                    : "border-2 border-dark-border text-white hover:border-accent/50 hover:bg-dark-lighter"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
