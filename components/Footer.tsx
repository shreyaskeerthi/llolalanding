export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: "How it works", href: "#how-it-works" },
      { name: "Features", href: "#product" },
      { name: "Use cases", href: "#use-cases" },
      { name: "Pricing", href: "#pricing" },
    ],
    Resources: [
      { name: "FAQ", href: "#faq" },
      { name: "Sample report", href: "#deliverables" },
      { name: "Request audit", href: "#contact" },
    ],
    Company: [
      { name: "About", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-dark-lighter border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and tagline */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="text-2xl font-bold text-white mb-3 block">
              LLOLA
            </a>
            <p className="text-sm text-gray-400 leading-relaxed">
              Automated adversarial testing for AI support bots.
            </p>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-3">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-dark-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} LLOLA. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
