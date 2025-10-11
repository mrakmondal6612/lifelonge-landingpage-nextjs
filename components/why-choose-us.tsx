import { Lightbulb, Users2, Target } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Expert Guidance",
      description: "With years of experience in the healthcare sector, we possess the knowledge and resources to guide you every step of the way.",
      icon: Lightbulb,
      stat: "10+ Years",
      statLabel: "Experience"
    },
    {
      title: "Comprehensive Support",
      description: "From career counseling to post-placement support, we offer a full range of services, ensuring you receive continuous support",
      icon: Users2,
      stat: "1000+",
      statLabel: "Students Guided"
    },
    {
      title: "Personalized Approach",
      description: "Understanding that each student has unique goals, we tailor our services to meet your individual needs and career goals.",
      icon: Target,
      stat: "95%",
      statLabel: "Success Rate"
    }
  ];

  return (
    <section id="why-choose-us" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f5f0]">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-[#e8e8e0]/90 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl 
          p-6 sm:p-8 md:p-12 border border-gray-300 shadow-sm">
          
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a4d3e] capitalize">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Choose excellence in healthcare career guidance. Here's what sets us apart:
            </p>
          </div>

          {/* Desktop View */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 
                    shadow-md hover:shadow-xl transition-all duration-300 
                    hover:transform hover:-translate-y-1 group border border-gray-100"
                >
                  <div className="mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-[#1a4d3e]/5 group-hover:bg-[#1a4d3e]/10 
                      transition-colors duration-300">
                      <Icon className="w-8 h-8 text-[#1a4d3e]" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1a4d3e] group-hover:text-[#153d31] 
                      transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-[#1a4d3e]">{reason.stat}</span>
                        <span className="text-sm text-gray-500">{reason.statLabel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile View - Horizontal Scroll */}
          <div className="sm:hidden">
            <div className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory 
              scrollbar-hide -mx-4 px-4">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={index}
                    className="flex-none w-[280px] bg-white rounded-xl overflow-hidden shadow-md 
                      snap-start border border-gray-100"
                  >
                    <div className="p-6">
                      <div className="mb-4">
                        <div className="inline-flex p-3 rounded-xl bg-[#1a4d3e]/5">
                          <Icon className="w-6 h-6 text-[#1a4d3e]" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-[#1a4d3e] mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {reason.description}
                      </p>
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-bold text-[#1a4d3e]">{reason.stat}</span>
                          <span className="text-xs text-gray-500">{reason.statLabel}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Scroll Indicator */}
            <div className="mt-4 flex justify-center gap-2">
              {reasons.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-300"
                />
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 sm:mt-16 text-center max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-gray-600">
              Join the thousands of students who have successfully launched their healthcare careers with our guidance. 
              Your success story starts here.
            </p>
            <div className="mt-8 inline-flex items-center justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg 
                  font-semibold text-white bg-[#1a4d3e] hover:bg-[#153d31] rounded-full 
                  transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                Start Your Journey <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
