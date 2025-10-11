const Services = () => {
  const services = [
    {
      title: "Career Counseling",
      description: "Receive personalized guidance based on your interests, strengths, and career goals to help you navigate the healthcare field."
    },
    {
      title: "Course Selection",
      description: "Explore various healthcare fields such as MBBS, Nursing, Paramedics, and more, with a comprehensive guide to help you in each option."
    },
    {
      title: "College Selection",
      description: "We help you find the best colleges based on your preferences, budget, and career goals, ensuring the right fit for you."
    },
    {
      title: "Counseling Services",
      description: "Receive support throughout the counseling process to secure your place in the college of your choice."
    },
    {
      title: "Admission Process",
      description: "Our experts assist with every aspect of the admission process, from eligibility criteria to submitting your application journey."
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f5f0]">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-[#e8e8e0] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-300 shadow-sm">
          <div className="max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-[#1a4d3e]">
              Our Services
            </h2>
            <p className="text-center text-gray-700 text-base sm:text-lg max-w-3xl mx-auto">
              At Lifelong Career Consultancy, we offer a range of services to ensure you make the best choices for your healthcare career:
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-[#d1e7f0]/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 
                  border border-gray-300/50 shadow-md hover:shadow-lg hover:bg-[#d1e7f0] 
                  transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="font-bold text-[#1a4d3e] mb-3 sm:mb-4 text-lg sm:text-xl flex items-start">
                  <span className="mr-2">•</span>
                  <span>{service.title}</span>
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;