// components/ProcessSection.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Beaker, Target, Rocket, RefreshCw, CheckCircle2 } from 'lucide-react'

// --- Visual Components for each step ---

// Visual for Phase 1: The Pilot / PoC
const PilotVisual = () => (
  <div className="w-full bg-black/30 rounded-lg p-4 space-y-3 text-sm">
    <div className="flex justify-between items-center text-white/90">
      <p>Test Technical Feasibility</p>
      <CheckCircle2 className="w-4 h-4 text-green-400"/>
    </div>
    <div className="flex justify-between items-center text-white/90 border-t border-white/10 pt-3">
      <p>Validate in a Live Environment</p>
      <CheckCircle2 className="w-4 h-4 text-green-400"/>
    </div>
    <p className="text-xs text-purple-200/70 pt-2 text-center">Outcome: A data-backed decision to proceed with the MVP.</p>
  </div>
);

// Visual for Phase 2: The MVP Build
const MvpVisual = () => (
  <div className="w-full bg-[#0d0c13] rounded-lg p-4 font-mono text-xs flex flex-col h-full">
     <div className="flex items-center gap-1.5 mb-3">
       <div className="w-3 h-3 rounded-full bg-red-500"></div>
       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
       <div className="w-3 h-3 rounded-full bg-green-500"></div>
     </div>
    <div className="flex-grow space-y-1 text-white/80">
      <p><span className="text-purple-400"># mvp_build_agent</span> running...</p>
      <p><span className="text-green-400">►</span> Building core features...</p>
      <p><span className="text-green-400">►</span> Establishing data pipeline...</p>
      <p className="text-white/50"><span className="text-green-400">►</span> Deploying version 1.0...</p>
    </div>
    <p className="text-xs text-center text-purple-200/70 pt-3 mt-auto">A solid foundation, built for scale.</p>
  </div>
);

// Visual for Phase 3: The Sprint-Based Scaling
const SprintVisual = () => (
  <div className="w-full bg-black/30 rounded-lg p-4 space-y-3 text-sm">
    <p className="text-white/90 font-semibold">Iterative Growth Cycle</p>
    <div className="flex justify-between items-center text-white/80">
      <p>New Feature Deployed</p>
      <Rocket className="w-4 h-4 text-blue-400"/>
    </div>
    <div className="flex justify-between items-center text-white/80 border-t border-white/10 pt-3">
      <p>Performance Review vs. KPIs</p>
      <p className="text-green-400 font-bold">+8%</p>
    </div>
    <div className="flex justify-between items-center text-white/80 border-t border-white/10 pt-3">
      <p>Next Sprint Planning</p>
      <RefreshCw className="w-4 h-4 text-purple-300 animate-spin"/>
    </div>
  </div>
);


// --- Main Process Section Component ---

const ProcessSection = () => {
  const engagementPath = {
    pilot: {
      phase: 'Phase 1 (Optional)',
      title: 'De-Risk & Validate',
      description: 'Not sure where to start? We offer a fixed-scope Pilot or Proof-of-Concept (PoC) to test your idea in a real-world setting and prove its value before committing to a full build.',
      visual: <PilotVisual />,
      icon: Beaker,
    },
    mvp: {
      phase: 'Phase 2',
      title: 'Build the Foundation (MVP)',
      description: 'We build the core, value-driving version of your solution. This is the main project, designed to get a powerful, functional product into your hands as quickly as possible.',
      visual: <MvpVisual />,
      icon: Target,
    },
    sprints: {
      phase: 'Phase 3',
      title: 'Scale & Iterate (Sprints)',
      description: 'This is our Outcome-as-a-Service model in action. Through continuous, iterative sprints, we enhance features, optimize performance, and scale your solution based on real data.',
      visual: <SprintVisual />,
      icon: RefreshCw,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } },
  } as const;

  return (
    <section className="bg-[#101010] text-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <span className="bg-white/10 text-white text-sm font-medium px-3 py-1.5 rounded-full">
            Your Journey With Us
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            A Clear Path from Idea to Impact
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
            We offer a flexible engagement model designed to provide maximum value at every stage, whether you're testing an idea or scaling a solution.
          </p>
        </div>

        {/* Engagement Path */}
        <div className="mt-16 space-y-12">
          {/* Phase 1: Pilot/PoC */}
          <motion.div
             className="bg-white/5 p-6 md:p-8 rounded-2xl border border-dashed border-white/20"
             variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4">
                  <engagementPath.pilot.icon className="w-8 h-8 text-purple-300 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-purple-300">{engagementPath.pilot.phase}</p>
                    <h3 className="mt-1 text-2xl font-bold">{engagementPath.pilot.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-400">{engagementPath.pilot.description}</p>
              </div>
              <div className="mt-6 md:mt-0">
                {engagementPath.pilot.visual}
              </div>
            </div>
          </motion.div>

          {/* Arrow Separator */}
          <div className="text-center text-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto w-8 h-8"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
          </div>

          {/* Phase 2 & 3 */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* MVP */}
            <motion.div
              className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col"
              variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex-grow">
                <p className="text-sm font-semibold text-purple-300">{engagementPath.mvp.phase}</p>
                <h3 className="mt-2 text-2xl font-bold">{engagementPath.mvp.title}</h3>
                <p className="mt-3 text-base text-gray-400">{engagementPath.mvp.description}</p>
              </div>
              <div className="mt-6">
                {engagementPath.mvp.visual}
              </div>
            </motion.div>
            
            {/* Sprints */}
            <motion.div
              className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col"
              variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex-grow">
                <p className="text-sm font-semibold text-purple-300">{engagementPath.sprints.phase}</p>
                <h3 className="mt-2 text-2xl font-bold">{engagementPath.sprints.title}</h3>
                <p className="mt-3 text-base text-gray-400">{engagementPath.sprints.description}</p>
              </div>
              <div className="mt-6">
                {engagementPath.sprints.visual}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;