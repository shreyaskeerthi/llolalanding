export default function UseCases() {
  const useCases = [
    {
      title: "E-commerce brands",
      description:
        "Protect margins by catching refund, warranty, and discount errors in AI support flows.",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Fintech & banking",
      description:
        "Keep AI responses aligned with financial policies, disclaimers, and regulations.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Healthcare & wellness",
      description:
        "Prevent unsafe advice and ensure your assistant stays within approved guidance.",
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Support platforms",
      description:
        "Increase trust in your AI support product by validating guardrails at scale.",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Built for teams that can't afford AI mistakes
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Whether you're shipping AI support for the first time or scaling to
            millions of conversations, LLOLA helps you ship with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className="group relative bg-dark-card rounded-xl p-8 border border-dark-border hover:shadow-2xl hover:border-accent/30 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${useCase.gradient} opacity-10 rounded-full -mr-16 -mt-16 group-hover:opacity-20 transition-opacity`}
              />
              <h3 className="text-xl font-semibold text-white mb-3 relative">
                {useCase.title}
              </h3>
              <p className="text-gray-400 leading-relaxed relative">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
