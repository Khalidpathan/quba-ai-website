// @/data/useCases.ts
export interface UseCase {
    slug: string;
    title: string;
    date: string;
    thumbnail: string;
    industry?: string;
    technologies?: string[];
    challenge: string;
    solution: string;
    outcome: string;
}

export const useCases: UseCase[] = [
    {
        slug: 'genai-clinical-scribing-healthcare',
        title: 'Reducing Physician Burnout & Claim Denials with GenAI-Powered Clinical Scribing',
        date: 'January 2026',
        thumbnail: '/images/use-cases/clinical-scribing.svg',
        industry: 'Healthcare',
        technologies: ['GenAI', 'HIPAA-Compliant Voice-to-Text', 'Large Language Models', 'EHR Integration'],
        challenge: `A multi-location Urgent Care network in the Midwest (USA) serving 15,000+ patients annually was facing a 25% physician turnover rate due to administrative burnout. Doctors were spending 2 hours each night finishing "pajama time" documentation. Additionally, manual entry errors were leading to a 12% claim denial rate due to mismatched ICD-10 and CPT codes. They needed a solution to automate documentation without disrupting the clinical workflow.

Key pain points:
• 25% physician turnover rate due to burnout
• 2 hours nightly "pajama time" documentation per doctor
• 12% claim denial rate from coding mismatches
• Manual entry errors impacting revenue cycle
• Need for non-disruptive workflow automation`,
        solution: `We engineered a HIPAA-compliant, voice-to-text ambient listening solution integrated directly into their existing EHR:

• Ambient Listening Module: Developed a mobile-first interface that listens to patient-doctor conversations in real-time, filtering out small talk and capturing critical clinical facts (Subjective & Objective data)
• GenAI Summarization Engine: Implemented a fine-tuned Large Language Model (LLM) to auto-generate structured SOAP notes in the provider's preferred style, eliminating manual typing
• Real-Time "Claim Scrubber": Built an automated validation layer that cross-references generated diagnosis codes against procedure codes before note signing, flagging potential denial risks immediately and ensuring "clean claims" at the source`,
        outcome: `Impact exceeded expectations:

• Documentation Time: Reduced by 40%, saving approximately 90 minutes per doctor per day
• Revenue Cycle: Claim denials dropped from 12% to 4% within 3 months, significantly improving cash flow
• Adoption: Achieved 100% provider adoption within 4 weeks
• Job Satisfaction: Doctors reporting higher satisfaction with more face time with patients
• Workflow: Seamless integration without disrupting clinical operations`,
    },
    {
        slug: 'patient-recall-chronic-disease-management',
        title: 'Closing the "Care Gap": Automated Patient Recall System for Chronic Disease Management',
        date: 'December 2025',
        thumbnail: '/images/use-cases/patient-recall.svg',
        industry: 'Healthcare',
        technologies: ['Interoperability Bridge', 'Risk Stratification AI', 'WhatsApp & SMS Bots', 'Real-time Dashboards'],
        challenge: `A specialized Cardiology Practice in Florida managing high-risk patients with hypertension and heart failure was losing significant revenue and risking patient health due to "Patient Leakage." About 30% of patients were missing their 6-month follow-ups or failing to adhere to medication plans. The front-desk staff was overwhelmed making manual phone calls, and patient data was siloed between their Appointment Scheduler and their EMR.

Critical challenges:
• 30% patient leakage from missed follow-ups
• Siloed data between PMS and EMR systems
• Overwhelmed front-desk staff with manual outreach
• Revenue loss from unfilled appointment slots
• Patient health risks from poor adherence`,
        solution: `We built an "Interoperability Bridge" that unified their data and launched an automated engagement engine:

• Unified Data Pipeline: Created a middleware service that syncs data between the Practice Management System (PMS) and EMR every 15 minutes, ensuring a "Single Source of Truth" for patient records
• Smart Risk Stratification: Developed algorithms that automatically flag "High Risk" patients who haven't visited in 180+ days
• Omnichannel Bot: Deployed an intelligent WhatsApp and SMS bot that allows patients to confirm or reschedule directly in chat without calling the office
• Live Dashboard: Built a visual dashboard for the Medical Director to view "Care Gap Closure" rates and appointment conversions in real-time`,
        outcome: `Transformative results achieved:

• Patient Retention: "No-Show" rates dropped by 22%, ensuring better continuity of care
• Revenue Growth: Generated an additional $180k/year in recovered appointment revenue
• Efficiency: Front-desk call volume reduced by 60%, allowing staff to focus on in-clinic patient experience
• Data Unification: Single source of truth established across systems
• Patient Experience: Improved engagement through convenient omnichannel communication`,
    },
    {
        slug: 'automated-credit-decision-sme-lending',
        title: 'Accelerating SME Lending: Automated Credit Decision Engine for a Regional Fintech',
        date: 'November 2025',
        thumbnail: '/images/use-cases/fintech-lending.svg',
        industry: 'BFSI (Fintech)',
        technologies: ['Open Banking APIs', 'Fraud Detection AI', 'Auto-Spreading Parser', 'Rule-Based Decision Engine'],
        challenge: `A US-based Fintech lender focused on providing working capital loans to Small & Medium Businesses (SMEs) had a loan approval process that took 5–7 days, causing them to lose customers to faster, larger banks. The bottleneck was manual underwriting: analysts had to manually download bank statements, verify business entity status, and calculate debt-service coverage ratios (DSCR) using Excel.

Major bottlenecks:
• 5-7 day loan approval timeline
• Manual underwriting process with Excel spreadsheets
• Losing customers to faster competitors
• High operational costs per loan origination
• Limited scalability without hiring more staff`,
        solution: `We developed an "Automated Underwriting Workbench" that reduced the "File-to-Decision" time from days to minutes:

• Open Banking Integration: Integrated banking APIs to fetch 12 months of applicant bank transaction data instantly, removing the need for customers to upload PDFs
• Fraud Detection Layer: Built a pattern-recognition engine to detect "synthetic IDs" and circular transactions (wash trading) to flag high-risk applications automatically
• Auto-Spreading Parser: Developed a tool that reads tax returns and bank statements, automatically extracting key financial ratios (EBITDA, Cash Flow) and populating the risk model
• Decision Matrix: Implemented a rule-based engine that auto-approves low-risk loans and routes only "gray area" applications to human underwriters`,
        outcome: `Outstanding business impact delivered:

• Speed: Time-to-Decision reduced from 5 days to 4 hours
• Cost Efficiency: Operational cost of origination per loan dropped by 65%
• Scalability: Successfully processed 3x the loan volume in Q4 without hiring additional underwriters
• Customer Experience: Dramatically improved with near-instant decisions
• Risk Management: Enhanced fraud detection and automated risk assessment
• Competitive Advantage: Now competing effectively with larger banks on speed`,
    },
];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
    return useCases.find((useCase) => useCase.slug === slug);
}
