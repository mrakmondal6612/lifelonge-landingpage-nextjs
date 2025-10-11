const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Expert Guidance:",
      description: "With years of experience in the healthcare sector, we possess the knowledge and resources to guide you every step of the way."
    },
    {
      title: "Comprehensive Support:",
      description: "From career counseling to post-placement support, we offer a full range of services, ensuring you receive continuous support"
    },
    {
      title: "Personalized Approach:",
      description: "Understanding that each student has unique goals, we tailor our services to meet your individual needs and career goals."
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 px-4 bg-[#f5f5f0]">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-[#e8e8e0] rounded-3xl p-12 border-2 border-gray-300">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">why choose us ?</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="bg-[#d1e7f0] rounded-2xl p-6 border-2 border-[#a8c5d1] shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="font-bold text-gray-900 mb-3 text-base">{reason.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
