"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you need access to our internal systems?",
      answer:
        "We can start with only a chatbot URL or test endpoint. For deeper coverage, we can integrate with staging or test environments you control.",
    },
    {
      question: "Will this affect our production traffic?",
      answer:
        "We keep traffic controlled and can run against staging to avoid impacting real customers.",
    },
    {
      question: "Is this just generic prompt injection testing?",
      answer:
        "No. LLOLA focuses on realistic customer behavior: policy edge cases, refund abuse, competitor threats, and safety-sensitive scenarios.",
    },
    {
      question: "What do we need to get started?",
      answer:
        "A short onboarding call, a link to your bot, and a sense of your written policies.",
    },
    {
      question: "How long does an audit take?",
      answer:
        "A typical one-time audit takes 7 days from kickoff to final report delivery. Ongoing monitoring runs on your preferred schedule (monthly, per-sprint, etc.).",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-dark-lighter">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-400">
            Everything you need to know about LLOLA audits.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-dark-border rounded-xl overflow-hidden bg-dark-card"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-dark-lighter transition-colors"
              >
                <span className="font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
