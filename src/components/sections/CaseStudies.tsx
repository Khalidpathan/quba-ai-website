import React from "react";

interface CaseStudy {
    id: number;
    industry: string;
    title: string;
    client: string;
    challenge: string;
    solution: {
        description: string;
        features: {
            title: string;
            description: string;
        }[];
    };
    impact: {
        metric: string;
        value: string;
        description?: string;
    }[];
    highlight?: boolean;
}

const caseStudies: CaseStudy[] = [
    {
        id: 1,
        industry: "Healthcare",
        title: "Reducing Physician Burnout & Claim Denials with GenAI-Powered Clinical Scribing",
        client: "A multi-location Urgent Care network in the Midwest (USA) serving 15,000+ patients annually.",
        challenge: "The client was facing a 25% physician turnover rate due to administrative burnout. Doctors were spending 2 hours each night finishing \"pajama time\" documentation. Additionally, manual entry errors were leading to a 12% claim denial rate due to mismatched ICD-10 and CPT codes. They needed a solution to automate documentation without disrupting the clinical workflow.",
        solution: {
            description: "We engineered a HIPAA-compliant, voice-to-text ambient listening solution integrated directly into their existing EHR.",
            features: [
                {
                    title: "Ambient Listening Module",
                    description: "We developed a mobile-first interface that listens to the patient-doctor conversation in real-time, filtering out small talk and capturing critical clinical facts (Subjective & Objective data)."
                },
                {
                    title: "GenAI Summarization Engine",
                    description: "We implemented a fine-tuned Large Language Model (LLM) to auto-generate structured SOAP notes in the provider's preferred style, eliminating manual typing."
                },
                {
                    title: "Real-Time \"Claim Scrubber\"",
                    description: "We built an automated validation layer that cross-references the generated diagnosis codes against the procedure codes before the note is signed. This flags potential denial risks immediately, ensuring \"clean claims\" at the source."
                }
            ]
        },
        impact: [
            {
                metric: "Documentation Time",
                value: "40% Reduction",
                description: "Saving approximately 90 minutes per doctor, per day."
            },
            {
                metric: "Claim Denials",
                value: "12% → 4%",
                description: "Within 3 months, significantly improving cash flow."
            },
            {
                metric: "Provider Adoption",
                value: "100%",
                description: "Within 4 weeks, with doctors reporting higher job satisfaction and more face time with patients."
            }
        ],
        highlight: true
    },
    {
        id: 2,
        industry: "Healthcare",
        title: "Closing the \"Care Gap\": Automated Patient Recall System for Chronic Disease Management",
        client: "A specialized Cardiology Practice in Florida managing high-risk patients with hypertension and heart failure.",
        challenge: "The practice was losing significant revenue and risking patient health due to \"Patient Leakage.\" About 30% of patients were missing their 6-month follow-ups or failing to adhere to medication plans. The front-desk staff was overwhelmed making manual phone calls, and patient data was siloed between their Appointment Scheduler and their EMR.",
        solution: {
            description: "We built an \"Interoperability Bridge\" that unified their data and launched an automated engagement engine.",
            features: [
                {
                    title: "Unified Data Pipeline",
                    description: "We created a middleware service that syncs data between the Practice Management System (PMS) and EMR every 15 minutes, ensuring a \"Single Source of Truth\" for patient records."
                },
                {
                    title: "Smart Risk Stratification",
                    description: "We developed algorithms that automatically flag \"High Risk\" patients who haven't visited in 180+ days."
                },
                {
                    title: "Omnichannel Bot",
                    description: "We deployed an intelligent WhatsApp and SMS bot that allows patients to confirm or reschedule directly in the chat without calling the office."
                },
                {
                    title: "Live Dashboard",
                    description: "We built a visual dashboard for the Medical Director to view \"Care Gap Closure\" rates and appointment conversions in real-time."
                }
            ]
        },
        impact: [
            {
                metric: "No-Show Rates",
                value: "22% Decrease",
                description: "Ensuring better continuity of care."
            },
            {
                metric: "Revenue Growth",
                value: "$180k/year",
                description: "In recovered appointment revenue."
            },
            {
                metric: "Call Volume",
                value: "60% Reduction",
                description: "Allowing administrative staff to focus on the in-clinic patient experience."
            }
        ]
    },
    {
        id: 3,
        industry: "BFSI",
        title: "Accelerating SME Lending: Automated Credit Decision Engine for a Regional Fintech",
        client: "A US-based Fintech lender focused on providing working capital loans to Small & Medium Businesses (SMEs).",
        challenge: "The client's loan approval process took 5–7 days, causing them to lose customers to faster, larger banks. The bottleneck was manual underwriting: analysts had to manually download bank statements, verify business entity status, and calculate debt-service coverage ratios (DSCR) using Excel.",
        solution: {
            description: "We developed an \"Automated Underwriting Workbench\" that reduced the \"File-to-Decision\" time from days to minutes.",
            features: [
                {
                    title: "Open Banking Integration",
                    description: "We integrated banking APIs to fetch 12 months of applicant bank transaction data instantly, removing the need for customers to upload PDFs."
                },
                {
                    title: "Fraud Detection Layer",
                    description: "We built a pattern-recognition engine to detect \"synthetic IDs\" and circular transactions (wash trading) to flag high-risk applications automatically."
                },
                {
                    title: "Auto-Spreading Parser",
                    description: "We developed a tool that reads tax returns and bank statements, automatically extracting key financial ratios (EBITDA, Cash Flow) and populating the risk model."
                },
                {
                    title: "Decision Matrix",
                    description: "We implemented a rule-based engine that auto-approves low-risk loans and routes only \"gray area\" applications to human underwriters."
                }
            ]
        },
        impact: [
            {
                metric: "Time-to-Decision",
                value: "5 Days → 4 Hours",
                description: "Dramatic reduction in approval time."
            },
            {
                metric: "Cost Efficiency",
                value: "65% Reduction",
                description: "In operational cost of origination per loan."
            },
            {
                metric: "Scalability",
                value: "3x Volume",
                description: "Processed in Q4 without hiring additional underwriters."
            }
        ]
    }
];

const CaseStudiesSection: React.FC = () => {
    return (
        <section id="case-studies" className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-4 text-white">
            {/* Section Badge */}
            <div className="flex justify-center mb-4">
                <span className="bg-blue-500/20 text-blue-200 text-xs font-medium rounded-full px-4 py-1.5 border border-blue-500/30">
                    SUCCESS STORIES
                </span>
            </div>

            {/* Heading & Subtitle */}
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
                Proven Results Across Industries
            </h2>
            <p className="text-gray-300 text-lg text-center mb-16 max-w-3xl mx-auto">
                Discover how we've helped healthcare providers and financial institutions transform their operations with cutting-edge AI solutions.
            </p>

            {/* Case Studies */}
            <div className="max-w-7xl mx-auto space-y-12">
                {caseStudies.map((study) => (
                    <div
                        key={study.id}
                        className={`rounded-2xl p-8 md:p-10 ${study.highlight
                                ? "bg-gradient-to-br from-blue-900/30 via-black/40 to-purple-900/30 border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20"
                                : "bg-black/40 border border-gray-700/50"
                            } backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300`}
                    >
                        {/* Industry Tag */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-blue-600/20 text-blue-300 text-sm font-semibold px-3 py-1 rounded-full border border-blue-500/30">
                                {study.industry}
                            </span>
                            {study.highlight && (
                                <span className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 text-sm font-semibold px-3 py-1 rounded-full border border-yellow-500/30">
                                    ⭐ Featured
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                            {study.title}
                        </h3>

                        {/* Client */}
                        <div className="mb-6">
                            <p className="text-sm font-semibold text-blue-400 mb-1">THE CLIENT</p>
                            <p className="text-gray-300 leading-relaxed">{study.client}</p>
                        </div>

                        {/* Challenge */}
                        <div className="mb-6">
                            <p className="text-sm font-semibold text-red-400 mb-2">THE CHALLENGE</p>
                            <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                        </div>

                        {/* Solution */}
                        <div className="mb-6">
                            <p className="text-sm font-semibold text-green-400 mb-2">WHAT WE BUILT</p>
                            <p className="text-gray-300 leading-relaxed mb-4">{study.solution.description}</p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {study.solution.features.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/30 transition-colors"
                                    >
                                        <h4 className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            {feature.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Impact */}
                        <div>
                            <p className="text-sm font-semibold text-purple-400 mb-4">IMPACT & OUTCOME</p>
                            <div className="grid md:grid-cols-3 gap-4">
                                {study.impact.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg p-5 border border-blue-500/30 text-center hover:scale-105 transition-transform"
                                    >
                                        <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                                            {item.value}
                                        </p>
                                        <p className="text-white font-semibold mb-1">{item.metric}</p>
                                        {item.description && (
                                            <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
                <p className="text-gray-300 text-lg mb-6">
                    Ready to transform your business with AI?
                </p>
                <a
                    href="#contact"
                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
                >
                    Let's Build Your Success Story
                </a>
            </div>
        </section>
    );
};

export default CaseStudiesSection;
