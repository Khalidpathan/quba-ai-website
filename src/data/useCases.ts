export interface UseCase {
  slug: string;
  title: string;
  date: string;
  thumbnail: string;
  challenge: string;
  solution: string;
  outcome: string;
  industry?: string;
  technologies?: string[];
}

export const useCases: UseCase[] = [
  {
    slug: 'autonomous-enterprise',
    title: 'The New Era of the Autonomous Enterprise',
    date: 'Oct 20, 2025',
    thumbnail: 'https://images.unsplash.com/photo-1678496229919-1a7f7b3e3e3b?q=80&w=2070&auto=format&fit=crop',
    industry: 'Enterprise',
    technologies: ['GenAI', 'Automation', 'AI Agents'],
    challenge: 'A Fortune 500 enterprise was struggling with manual processes across multiple departments, leading to operational inefficiencies, high error rates, and significant time delays. Their legacy systems couldn\'t adapt to changing business needs, and employees were spending 40% of their time on repetitive tasks. The company needed a solution that could automate complex workflows while maintaining accuracy and compliance.',
    solution: 'We implemented an AI-native automation platform powered by GenAI agents that could understand context, make decisions, and execute tasks autonomously. Our solution integrated seamlessly with their existing systems through intelligent APIs and included:\n\n• Custom AI agents for each department (HR, Finance, Operations)\n• Natural language processing for document understanding and generation\n• Automated workflow orchestration with human-in-the-loop checkpoints\n• Real-time monitoring and analytics dashboard\n• Continuous learning system that improved performance over time',
    outcome: 'The transformation delivered remarkable results:\n\n• 65% reduction in manual processing time across all departments\n• 90% accuracy improvement in document processing and data entry\n• $2.5M annual cost savings from operational efficiency\n• 50% faster decision-making through automated insights\n• Employee satisfaction increased by 40% as teams focused on strategic work\n• Zero compliance violations with automated audit trails\n\nThe company now operates as a truly autonomous enterprise, with AI agents handling routine operations while human teams focus on innovation and growth.'
  },
  {
    slug: 'genai-in-finance',
    title: 'How GenAI is Transforming Legacy Financial Systems',
    date: 'Oct 15, 2025',
    thumbnail: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
    industry: 'Financial Services',
    technologies: ['GenAI', 'LLM', 'RAG', 'Financial AI'],
    challenge: 'A leading financial institution was operating on 20-year-old legacy systems that couldn\'t process modern financial data formats or provide real-time insights. Their analysts spent weeks manually reviewing transactions, generating reports, and identifying anomalies. The system couldn\'t handle the volume of modern financial data, leading to delayed risk assessments and missed opportunities. Regulatory compliance was becoming increasingly difficult to maintain with manual processes.',
    solution: 'We built a comprehensive GenAI-powered financial intelligence platform that transformed their entire data processing pipeline:\n\n• Advanced RAG (Retrieval-Augmented Generation) system for real-time financial document analysis\n• Custom LLM fine-tuned on financial regulations and market data\n• Automated transaction monitoring and anomaly detection\n• Intelligent report generation that adapts to regulatory requirements\n• Natural language query interface for instant financial insights\n• Seamless integration with legacy systems through intelligent middleware\n• Automated compliance checking and audit trail generation',
    outcome: 'The financial institution achieved unprecedented efficiency and accuracy:\n\n• 80% reduction in time spent on financial analysis and reporting\n• Real-time risk assessment capabilities (previously took 2-3 weeks)\n• 95% accuracy in anomaly detection, catching fraud patterns previously missed\n• $5M saved annually through automated compliance and reduced manual errors\n• 70% faster decision-making on investment opportunities\n• Complete regulatory compliance with automated documentation\n• Analysts now focus on strategic insights rather than data processing\n\nThe institution has become a leader in AI-powered financial services, setting new industry standards for efficiency and accuracy.'
  },
  {
    slug: 'scalable-mlops',
    title: 'Building a Scalable MLOps Pipeline for Startups',
    date: 'Oct 08, 2025',
    thumbnail: 'https://images.unsplash.com/photo-1696274294022-b5f78b03ac2a?q=80&w=2070&auto=format&fit=crop',
    industry: 'Technology',
    technologies: ['MLOps', 'ML Infrastructure', 'Cloud AI', 'DevOps'],
    challenge: 'A fast-growing AI startup was struggling to scale their machine learning operations. They had multiple ML models in production but no standardized way to deploy, monitor, or update them. Model deployments took weeks, and there was no visibility into model performance in production. The team was constantly firefighting production issues, and new model versions couldn\'t be rolled out quickly enough to meet business demands. The lack of proper MLOps infrastructure was becoming a critical bottleneck.',
    solution: 'We designed and implemented a complete MLOps infrastructure from the ground up:\n\n• Automated CI/CD pipeline specifically for ML models with version control\n• Model registry and experiment tracking system\n• Automated testing framework for model validation before deployment\n• Real-time monitoring and alerting for model performance and drift\n• A/B testing framework for safe model rollouts\n• Automated retraining pipelines triggered by performance degradation\n• Scalable inference infrastructure with auto-scaling capabilities\n• Comprehensive logging and observability dashboard\n• Disaster recovery and rollback mechanisms',
    outcome: 'The startup transformed their ML operations and achieved rapid scaling:\n\n• 90% reduction in model deployment time (from weeks to hours)\n• 99.9% uptime for all production ML models\n• 75% reduction in production incidents through proactive monitoring\n• Ability to deploy 10x more models with the same team size\n• 60% faster time-to-market for new ML features\n• Complete visibility into model performance with real-time dashboards\n• Automated model retraining saved 40 hours per week of engineering time\n• Zero-downtime deployments with instant rollback capabilities\n\nThe startup can now scale their ML operations effortlessly, deploying new models daily and maintaining high reliability across all production systems.'
  }
];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find(useCase => useCase.slug === slug);
}


