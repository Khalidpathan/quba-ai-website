import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useCases } from '@/data/useCases'

const WorkSection = () => {
  return (
    <section id="blog" className="bg-[#0B0F14] py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full border border-[#1C0770]/70 bg-[#1C0770]/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
            Use cases
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#FFFFFF] sm:text-4xl lg:text-5xl">
            Explore the problems we solve with AI
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
            Practical examples of how we design and deliver AI-powered workflows that improve speed,
            reliability, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {useCases.map((useCase) => (
            <Link
              key={useCase.slug}
              href={`/use-cases/${useCase.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111726] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#1C0770] hover:shadow-[0_12px_35px_rgba(28,7,112,0.35)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1C0770]/0 via-[#1C0770]/0 to-[#1C0770]/0 transition-all duration-300 group-hover:from-[#1C0770]/20 group-hover:via-transparent group-hover:to-[#1C0770]/10" />

              <div className="relative z-10">
                <div className="overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={useCase.thumbnail}
                    alt={`Thumbnail for ${useCase.title}`}
                    width={640}
                    height={360}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <p className="mt-4 text-xs font-medium uppercase tracking-[0.15em] text-white/60">
                  {useCase.date}
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#FFFFFF] transition-colors group-hover:text-white">
                  {useCase.title}
                </h3>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#FFFFFF]">
                  View case
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSection
