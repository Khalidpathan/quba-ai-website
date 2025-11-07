import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Building2, Code } from 'lucide-react';
import { getUseCaseBySlug, useCases } from '@/data/useCases';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export async function generateStaticParams() {
  return useCases.map((useCase) => ({
    slug: useCase.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);
  
  if (!useCase) {
    return {
      title: 'Use Case Not Found',
    };
  }

  return {
    title: `${useCase.title} | QubaAI`,
    description: `Learn how QubaAI helped solve ${useCase.title} with AI-native solutions.`,
  };
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Use Cases</span>
          </Link>

          {/* Header Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-blue-500/20 text-blue-200 text-sm font-medium px-3 py-1.5 rounded-full border border-blue-500/30">
              Use Case
            </span>
            {useCase.industry && (
              <div className="flex items-center gap-2 text-gray-400">
                <Building2 className="w-4 h-4" />
                <span className="text-sm">{useCase.industry}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{useCase.date}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-8">
            {useCase.title}
          </h1>

          {/* Technologies */}
          {useCase.technologies && useCase.technologies.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 mb-12">
              <Code className="w-5 h-5 text-gray-400" />
              {useCase.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800/50 text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg border border-gray-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Hero Image */}
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden border border-gray-700/50">
            <Image
              src={useCase.thumbnail}
              alt={useCase.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Challenge Section */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-600 rounded-full" />
            <div className="pl-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  The Challenge
                </h2>
              </div>
              <div className="max-w-none">
                <p className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
                  {useCase.challenge}
                </p>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full" />
            <div className="pl-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Our Solution
                </h2>
              </div>
              <div className="max-w-none">
                <p className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
                  {useCase.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Outcome Section */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-green-600 rounded-full" />
            <div className="pl-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  The Outcome
                </h2>
              </div>
              <div className="max-w-none">
                <p className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
                  {useCase.outcome}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results with AI-native solutions.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

