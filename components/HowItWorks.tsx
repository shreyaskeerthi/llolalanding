export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect your bot",
      description:
        "Share your chatbot URL or a test endpoint. No heavy integration required.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "We run adversarial test suites",
      description:
        "LLOLA generates and executes dozens of realistic, adversarial conversations against your bot — refund abuse, policy confusion, competitor threats, safety edge cases, and more.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "You get a reliability report",
      description:
        "We deliver a structured report of failures, impact, and recommendations, plus an optional re-test after you patch issues.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How LLOLA works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get from zero to a comprehensive reliability audit in one week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-dark-card rounded-xl p-8 border border-dark-border hover:shadow-2xl hover:-translate-y-1 hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 text-accent flex items-center justify-center border border-accent/30">
                  {step.icon}
                </div>
                <span className="text-4xl font-bold text-gray-800">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
