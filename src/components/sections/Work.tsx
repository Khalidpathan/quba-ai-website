// @/components/BlogSection.tsx
import Image from 'next/image';
import React from 'react';

// Sample data for blog posts, updated for QubaAI's context.
const blogPosts = [
  {
    title: 'The New Era of the Autonomous Enterprise',
    date: 'Oct 20, 2025',
    thumbnail: 'https://images.unsplash.com/photo-1678496229919-1a7f7b3e3e3b?q=80&w=2070&auto=format&fit=crop', // Using approved Unsplash URL
    href: '/use-cases/autonomous-enterprise', // Link to the actual post
  },
  {
    title: 'How GenAI is Transforming Legacy Financial Systems',
    date: 'Oct 15, 2025',
    thumbnail: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop', // Using approved Unsplash URL
    href: '/use-cases/genai-in-finance', // Link to the actual post
  },
  {
    title: 'Building a Scalable MLOps Pipeline for Startups',
    date: 'Oct 08, 2025',
    thumbnail: 'https://images.unsplash.com/photo-1696274294022-b5f78b03ac2a?q=80&w=2070&auto=format&fit=crop', // Using approved Unsplash URL
    href: '/use-cases/scalable-mlops', // Link to the actual post
  },
];

const BlogSection = () => {
  return (
    // Updated section styling to match the rest of the site
    <section id="blog" className="bg-[#101010] text-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center md:text-left mb-12">
            <span className="bg-white/10 text-white text-sm font-medium px-3 py-1.5 rounded-full">
                Insights
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              From Our Use Cases
            </h2>
        </div>
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex items-center p-4 gap-4 md:gap-6 rounded-2xl 
                bg-white/5 border border-transparent 
                hover:border-purple-500/30 hover:bg-white/10
                transition-all duration-300
              "
            >
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-md overflow-hidden">
                <Image
                  src={post.thumbnail}
                  alt={`Thumbnail for ${post.title}`}
                  width={128}
                  height={80}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-gray-400 mb-1">{post.date}</p>
                <h3 className="text-base md:text-lg font-semibold text-gray-100 group-hover:text-purple-300 transition-colors duration-300">
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;