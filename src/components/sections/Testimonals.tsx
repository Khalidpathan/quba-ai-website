import React from "react";

// Dummy avatars (replace these with actual avatar URLs or Next/Image)
const avatars = {
  james: "https://randomuser.me/api/portraits/men/32.jpg",
  sophia: "https://randomuser.me/api/portraits/women/44.jpg",
  david: "https://randomuser.me/api/portraits/men/56.jpg",
  emily: "https://randomuser.me/api/portraits/women/50.jpg",
};

interface TestimonialItem {
  name: string;
  title: string;
  company: string;
  avatar: string;
  text: string;
  highlight?: boolean;
}

const testimonials: TestimonialItem[] = [
  {
    name: "James Carter",
    title: "CEO",
    company: "TechFlow Solutions",
    avatar: avatars.james,
    text:
      "AI automation transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!",
    highlight: true, // highlights this box with border
  },
  {
    name: "Sophia Martinez",
    title: "Operations Manager",
    company: "NexaCorp",
    avatar: avatars.sophia,
    text:
      "With AI, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest!",
  },
  {
    name: "David Reynolds",
    title: "Head of Sales",
    company: "GrowthPeak",
    avatar: avatars.david,
    text:
      "AI-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions!",
  },
  {
    name: "Emily Wong",
    title: "Customer Success Lead",
    company: "SupportHive",
    avatar: avatars.emily,
    text:
      "Customer support is now seamless. Our response time improved drastically, and satisfaction levels are at an all-time high, thanks to xtract!",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-black py-16 px-4">
      {/* Testimonials badge */}
      <div className="flex justify-center mb-4">
        <span className="bg-zinc-800 text-gray-100 text-xs font-medium rounded px-3 py-1">Testimonials</span>
      </div>
      {/* Heading & subtitle */}
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-3">
        Why Businesses Love <br /> Our AI Solutions
      </h2>
      <p className="text-gray-300 text-lg text-center mb-12">
        Real businesses, real results with AI automation.
      </p>
      {/* Testimonials cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={t.name}
            className={
              `rounded-xl bg-gradient-to-br from-zinc-900 to-transparent p-6 ring-1 ${t.highlight ? "border-2 border-purple-600" : ""} shadow-md text-white flex flex-col justify-between min-h-[220px]`
            }
          >
            <div>
              <div className="flex items-center mb-3">
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09L5.454 13 1 8.865l6.093-.889L10 2l2.907 5.976L19 8.865 14.546 13l1.332 5.09z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-md md:text-lg font-medium mb-6 text-gray-200">
                "{t.text}"
              </p>
            </div>
            <div className="flex items-center mt-auto">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full border-2 border-gray-700 mr-3"
              />
              <div>
                <p className="font-semibold leading-tight">{t.name}</p>
                <span className="text-xs text-gray-400">{t.title} at {t.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
