// components/FAQSection.tsx

'use client';

import { useState } from "react";
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

// New FAQs tailored for QubaAI's advanced service model
const faqs = [
  {
    question: "What exactly is 'Outcome-as-a-Service'?",
    answer: "It's a modern partnership model. Instead of paying for hours, you pay for results. Our pricing is a mix of a base subscription for our team and platform, plus performance rewards tied to the KPIs we set together. We win only when you see measurable success."
  },
  {
    question: "How does your AI-augmented team deliver faster?",
    answer: "Our engineers are equipped with a suite of proprietary AI agents that handle repetitive coding, testing, and analysis tasks. This frees them to focus on high-level architecture and problem-solving, dramatically accelerating the development lifecycle and reducing man-hours."
  },
  {
    question: "Do I have to commit to a big project? Can I start small?",
    answer: "Absolutely. We encourage starting with a fixed-scope, fixed-price Pilot or Proof-of-Concept (PoC). It's the perfect low-risk way to validate your idea and experience our workflow before committing to a full MVP build or long-term engagement."
  },
  {
    question: "Are your services a good fit for large enterprises?",
    answer: "Yes. Our model is built for scale. We offer enterprise-grade security, robust data governance, dedicated support, and the ability to build complex, custom AI software that integrates seamlessly with your existing infrastructure."
  },
  {
    question: "Who owns the intellectual property (IP)?",
    answer: "You do. Every line of code, every model, and every solution we build is crafted uniquely for you and is 100% your intellectual property. We are your development partner, not a product vendor."
  },
  {
    question: "Why not just hire an in-house AI team?",
    answer: "Hiring, training, and retaining a full-stack AI team is slow and extremely expensive. With us, you get immediate access to an entire team of vetted AI strategists, data scientists, and MLOps engineers for a fraction of the cost and without the hiring overhead."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ expanded by default

  return (
    <section
      id="faq"
      className="bg-[#101010] py-20 px-6 sm:py-28"
    >
      <div className="text-center">
        <span className="bg-white/10 text-white text-sm font-medium px-3 py-1.5 rounded-full">
          Have Questions?
        </span>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          We Have Answers
        </h2>
      </div>

      <div className="max-w-3xl mx-auto mt-12 space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`rounded-2xl bg-white/5 backdrop-blur-lg text-white
                        transition-all duration-300 border border-white/10
                        ${openIndex === idx ? "shadow-lg shadow-purple-500/10" : ""}`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex justify-between items-center text-left px-6 py-5 focus:outline-none"
            >
              <span className="font-semibold text-lg md:text-xl tracking-tight text-gray-100">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 ml-4 flex-shrink-0 transition-transform duration-300
                  ${openIndex === idx ? "rotate-180 text-purple-300" : "text-gray-400"}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 }
                  }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-400 text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}