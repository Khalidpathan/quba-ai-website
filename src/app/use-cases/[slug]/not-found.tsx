import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Header />
      
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Use Case Not Found
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            The use case you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Use Cases
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}


