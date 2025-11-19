import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LLOLA - Automated Adversarial Testing for AI Support Bots",
  description:
    "Stress-test your chatbot with realistic adversarial prompts. Catch policy violations, refund leakage, and hallucinations before your customers do.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
