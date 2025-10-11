import Image from "next/image";

const HowItWorks = () => {
  const steps = [
    {
      icon: "/icons/icon-chart.png",
      title: "Initial Consultation",
      description: "Reach out to us for a free consultation where we will assess your interests, strengths, and career goals to understand your aspirations."
    },
    {
      icon: "/icons/icon-selection.png",
      title: "Pathway Selection",
      description: "Based on your interests, we help you explore and select your ideal healthcare career path tailored to your skills and aspirations."
    },
    {
      icon: "/icons/icon-document.png",
      title: "Application Process",
      description: "Receive expert guidance in selecting the best colleges and ensuring that your application process is smooth and successful."
    },
    {
      icon: "/icons/icon-plane.png",
      title: "Admission & Counseling",
      description: "We assist you throughout the counseling process to secure a spot in your chosen college, ensuring that your future is set."
    },
    {
      icon: "/icons/icon-exam.png",
      title: "Post-Admission Support",
      description: "Our support continues even after admission, assisting you with documentation, fee payments, and a seamless start to your academic journey."
    }
  ];

  return (
     <section id="how-it-works" className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-12 sm:my-16 md:my-20 rounded-3xl">
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-5xl py-6 sm:py-8 md:py-12 bg-white rounded-3xl border border-[#d4e8e8]/50">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a4d3e]">
            How It Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Your journey to a successful healthcare career starts here. Follow our simple process:
          </p>
        </div>
        
        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-6 sm:mb-8">
          {steps.slice(0, 3).map((step, index) => (
            <div 
              key={index} 
              className="bg-[#d4e8e8]/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 
                border border-gray-200 hover:shadow-lg transition-all duration-300 
                hover:transform hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 relative 
                p-4 rounded-full bg-white/50 group-hover:bg-white transition-colors">
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 640px) 64px, 80px"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center text-[#1a4d3e] mb-3">
                {step.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second row - 2 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto mb-12 sm:mb-16">
          {steps.slice(3, 5).map((step, index) => (
            <div 
              key={index} 
              className="bg-[#d4e8e8]/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 
                border border-gray-200 hover:shadow-lg transition-all duration-300 
                hover:transform hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 relative 
                p-4 rounded-full bg-white/50 group-hover:bg-white transition-colors">
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 640px) 64px, 80px"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center text-[#1a4d3e] mb-3">
                {step.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action with Graduate Image */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            {/* Background gradient for mobile */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4e8e8] to-[#d4e8e8]/80 
              backdrop-blur-sm md:hidden"></div>

            <div className="relative flex flex-col md:flex-row items-center md:items-end">
              {/* Graduate Image */}
              <div className="relative w-[180px] sm:w-[220px] h-[240px] sm:h-[280px] 
                flex-shrink-0 z-10 mx-auto md:mx-0">
                <Image
                  src="/graduate-cutout.jpg"
                  alt="Graduate student"
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 640px) 180px, 220px"
                  priority
                />
              </div>

              {/* CTA Content */}
              <div className="flex-1 bg-[#d4e8e8]/90 backdrop-blur-sm p-2 sm:p-4 md:p-1 
                md:rounded-l-none md:-ml-[-1px] relative z-0">
                <div className="max-w-2xl">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1a4d3e] mb-2">
                    Let's Begin Your Journey Today!
                  </h3>
                  <p className="text-base sm:text-x text-gray-700 leading-relaxed">
                    We are here to guide you every step of the way. Reach out to us now to begin 
                    your journey toward a successful and fulfilling healthcare career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;