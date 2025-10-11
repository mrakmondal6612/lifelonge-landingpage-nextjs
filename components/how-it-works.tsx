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
    <section id="how-it-works" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">How It Works</h2>
        
        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
          {steps.slice(0, 3).map((step, index) => (
            <div 
              key={index} 
              className="bg-[#d4e8e8] rounded-3xl p-8 border-2 border-gray-300 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-base font-bold text-center text-gray-900 mb-3">{step.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed text-center">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Second row - 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {steps.slice(3, 5).map((step, index) => (
            <div 
              key={index} 
              className="bg-[#d4e8e8] rounded-3xl p-8 border-2 border-gray-300 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-base font-bold text-center text-gray-900 mb-3">{step.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed text-center">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action with Graduate Image */}
        <div className="relative mt-12 flex items-end max-w-8xl mx-auto ">
          <div className="relative w-[220px] h-[280px] flex-shrink-0 z-10">
            <Image
              src="/graduate-cutout.jpg"
              // src={"/graduate-celebrating-icon.png"}
              alt="Graduate student"
              fill
              className="object-contain object-bottom"
            />
          </div>
          <div className="flex-1 bg-[#d4e8e8] rounded-r-3xl py-2 px-16 -ml-8 border-2 border-l-0 border-gray-300">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Let's Begin Your Journey Today!</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              We are here to guide you every step of the way. Reach out to us now to begin your journey toward a successful and fulfilling healthcare career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;