import React from 'react';
import { Brain, Code, Database, Server, Bot, Cpu, BarChart3, Users, Shield, Zap } from 'lucide-react';

const Services = () => {
  // Company services data
  const aiServices = [
    {
      title: "AI Strategy Consulting",
      description: "Strategic guidance on implementing AI solutions tailored to your business needs and goals.",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed and developed specifically for your unique business challenges.",
      icon: Code,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Machine Learning Models",
      description: "Advanced ML models that learn from your data to make predictions and automate decision-making.",
      icon: Database,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Natural Language Processing",
      description: "Text analysis solutions that understand, interpret, and generate human language for your applications.",
      icon: Bot,
      color: "from-orange-500 to-red-500"
    }
  ];

  // Service features
  const serviceFeatures = [
    { icon: Cpu, title: 'AI Integration', desc: 'Seamless system integration' },
    { icon: BarChart3, title: 'Data Analytics', desc: 'Actionable business insights' },
    { icon: Shield, title: 'AI Security', desc: 'Protected AI implementations' },
    { icon: Zap, title: 'Performance Optimization', desc: 'Efficient AI solutions' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Header Section */}
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-8"
          >
            <span className="text-gray-300 text-sm font-medium">Our Services</span>
            <div className="ml-2 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight"
          >
            Transforming Business <span className="text-gray-400">With</span>
            <br />
            <span className="text-gray-300">Advanced</span> <span className="text-orange-400 font-normal">AI Solutions</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            We deliver cutting-edge artificial intelligence services to help your business 
            innovate, automate, and grow in the digital age.
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mr-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Service Details */}
                <div className="bg-black/40 rounded-xl p-6 border border-gray-700/30">
                  <h4 className="text-lg font-medium text-white mb-4">Key Benefits</h4>
                  
                  <ul className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <li key={item} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center mt-0.5 mr-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-300">
                          {index === 0 && item === 1 && "Strategic AI roadmap development"}
                          {index === 0 && item === 2 && "Competitive advantage through AI adoption"}
                          {index === 0 && item === 3 && "ROI-focused implementation plans"}
                          
                          {index === 1 && item === 1 && "Tailored AI solutions for specific needs"}
                          {index === 1 && item === 2 && "Scalable architecture for future growth"}
                          {index === 1 && item === 3 && "Seamless integration with existing systems"}
                          
                          {index === 2 && item === 1 && "Predictive analytics for business insights"}
                          {index === 2 && item === 2 && "Automated decision-making processes"}
                          {index === 2 && item === 3 && "Continuous learning and improvement"}
                          
                          {index === 3 && item === 1 && "Advanced text and speech processing"}
                          {index === 3 && item === 2 && "Multilingual support and understanding"}
                          {index === 3 && item === 3 && "Sentiment analysis and intent recognition"}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Implementation Time</span>
                      <span className="text-sm font-medium text-white">
                        {index === 0 ? "2-4 weeks" : index === 1 ? "4-12 weeks" : index === 2 ? "6-10 weeks" : "3-8 weeks"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Features Grid */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;