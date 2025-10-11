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
    <section id="services" className="py-16 px-4 bg-[#f5f5f0]">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-[#e8e8e0] rounded-3xl p-12 border-2 border-gray-300">
          <h2 className="text-4xl font-bold text-center mb-3 text-gray-900">Our Services</h2>
          <p className="text-center text-gray-700 mb-12 max-w-4xl mx-auto text-sm">
            At Lifelong Carreer Consultancy, we offer a range of services to ensure you make the best choices for your healthcare career:
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-[#d1e7f0] rounded-3xl p-8 border-2 border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="font-bold text-gray-900 mb-3 text-base">• {service.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;