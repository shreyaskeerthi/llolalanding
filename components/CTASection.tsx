"use client";

import { useState } from "react";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    botUrl: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form is non-functional as requested - just a UI placeholder
    alert("Form submission is not yet configured. Please email hello@llola.ai");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-950/50 via-dark to-purple-950/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Want to know what your bot is really saying?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Share a link to your chatbot and we'll walk you through what a LLOLA
            audit would look like for your use case.
          </p>
        </div>

        <div className="bg-dark-card rounded-xl shadow-2xl border border-dark-border p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-dark-lighter border border-dark-border text-white rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder-gray-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-dark-lighter border border-dark-border text-white rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder-gray-500"
                  placeholder="john@company.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-dark-lighter border border-dark-border text-white rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder-gray-500"
                  placeholder="Acme Inc."
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="botUrl"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Chatbot URL (optional)
                </label>
                <input
                  type="url"
                  id="botUrl"
                  value={formData.botUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, botUrl: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-dark-lighter border border-dark-border text-white rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder-gray-500"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Tell us about your use case
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-2 bg-dark-lighter border border-dark-border text-white rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none placeholder-gray-500"
                placeholder="What kind of customer support chatbot are you running? What concerns you most about AI reliability?"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-light transition-all shadow-md hover:shadow-lg"
            >
              Request audit
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-dark-border text-center">
            <p className="text-sm text-gray-400">
              Or email us directly at{" "}
              <a
                href="mailto:hello@llola.ai"
                className="text-accent hover:text-accent-light font-medium"
              >
                hello@llola.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
