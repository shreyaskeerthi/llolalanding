export default function Deliverables() {
  const deliverables = [
    "Adversarial scenario suite (25–100 conversations)",
    "Pass/fail overview with severity scoring",
    "Policy and refund-logic failure map",
    "Safety & tone issue highlights",
    "Recommendations and example fixes",
    "Optional re-test after you patch issues",
  ];

  return (
    <section id="deliverables" className="py-20 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              What you get from a 7-day LLOLA audit
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              A comprehensive reliability report that reveals exactly where your
              bot breaks and how to fix it.
            </p>
            <ul className="space-y-4">
              {deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-accent flex-shrink-0 mt-0.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Sample report preview */}
          <div className="lg:ml-auto w-full max-w-md">
            <div className="bg-dark-card rounded-xl shadow-2xl border border-dark-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">
                  Sample Report
                </h3>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
                  Preview
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-dark-lighter rounded-lg border border-dark-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-200">
                      Executive Summary
                    </span>
                    <span className="text-xs text-gray-500">Page 1-2</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    High-level findings and impact assessment
                  </div>
                </div>

                <div className="p-4 bg-dark-lighter rounded-lg border border-dark-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-200">
                      Critical Failures
                    </span>
                    <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs font-medium rounded border border-red-500/30">
                      7 issues
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Detailed breakdown with conversation logs
                  </div>
                </div>

                <div className="p-4 bg-dark-lighter rounded-lg border border-dark-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-200">
                      Policy Analysis
                    </span>
                    <span className="text-xs text-gray-500">Page 8-12</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Contradiction mapping and recommendations
                  </div>
                </div>

                <div className="p-4 bg-dark-lighter rounded-lg border border-dark-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-200">
                      Remediation Guide
                    </span>
                    <span className="text-xs text-gray-500">Page 13-15</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Prioritized fixes with code examples
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-dark-border">
                <a
                  href="#contact"
                  className="block w-full px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-light transition-all text-center"
                >
                  Request sample report
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
