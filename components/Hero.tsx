export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-dark to-purple-950/30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              LLOLA – Automated adversarial testing for AI support bots
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              We stress-test your chatbot with realistic adversarial prompts so
              you can catch policy violations, refund leakage, and
              hallucinations before your customers do.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-light transition-all shadow-sm hover:shadow-md text-center"
              >
                Request a reliability audit
              </a>
              <a
                href="#deliverables"
                className="px-6 py-3 border border-dark-border text-white font-medium rounded-lg hover:border-gray-600 hover:bg-dark-lighter transition-all text-center"
              >
                View sample report
              </a>
            </div>

            {/* Trust line */}
            <p className="text-sm text-gray-400">
              Designed for e-commerce, fintech, healthcare, and support
              platforms that can't afford AI mistakes.
            </p>
          </div>

          {/* Right - Mock panel */}
          <div className="lg:ml-auto w-full max-w-md">
            <div className="bg-dark-card rounded-xl shadow-2xl border border-dark-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">
                  Test Run Summary
                </h3>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
                  Completed
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">25</div>
                  <div className="text-xs text-gray-400 mt-1">Scenarios</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">18</div>
                  <div className="text-xs text-gray-400 mt-1">Passed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">7</div>
                  <div className="text-xs text-gray-400 mt-1">Failed</div>
                </div>
              </div>

              <div className="border-t border-dark-border pt-4">
                <div className="text-sm font-medium text-gray-300 mb-3">
                  Critical Issues Found
                </div>
                <div className="space-y-3">
                  {[
                    {
                      title: "Refund approved after policy window",
                      severity: "high",
                    },
                    {
                      title: "Policy contradiction: 30-day vs 60-day guarantee",
                      severity: "high",
                    },
                    {
                      title: "Unsafe medical advice",
                      severity: "critical",
                    },
                  ].map((issue, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-red-500/10 rounded-lg border border-red-500/20"
                    >
                      <div
                        className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                          issue.severity === "critical"
                            ? "bg-red-400"
                            : "bg-orange-400"
                        }`}
                      />
                      <div className="text-xs text-gray-300 leading-relaxed">
                        {issue.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
