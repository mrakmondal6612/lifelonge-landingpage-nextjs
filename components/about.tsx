import Image from "next/image";

const About = () => {
  const aboutItems = [
    {
      title: "Vision",
      description: "To empower students by offering the guidance, resources, and opportunities necessary to realize their potential, ensuring they embark on a fulfilling and successful career in the healthcare industry.",
      image: "/office-meeting-desk.jpg",
      alt: "Professional consultation"
    },
    {
      title: "Mission",
      description: "Our mission is to bridge the gap between academic decisions and career success, providing students with the support they need to choose the right healthcare career path and guiding them through the process of achieving their goals.",
      image: "/healthcare-professional-teal.png",
      alt: "Healthcare professional"
    }
  ];

  return (
    <section id="about" className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-12 sm:my-16 md:my-20 rounded-3xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-8 sm:py-12 md:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a4d3e]">ABOUT US</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our vision and mission in healthcare career guidance
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {aboutItems.map((item, index) => (
            <div key={index} className="space-y-6 sm:space-y-8 bg-[#d4e8e8]/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div>
                <span className="inline-block bg-white text-[#1a4d3e] px-4 sm:px-6 py-2 
                  rounded-lg font-semibold mb-4 text-sm sm:text-base">
                  {item.title}
                </span>
                <p className="text-[#2c3e50] leading-relaxed mt-4 text-base sm:text-lg">
                  {item.description}
                </p>
              </div>
              <div className="relative aspect-[4/3] w-full max-w-[550px] mx-auto">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  sizes="(max-width: 1200px) 45vw, 550px"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Horizontal Scroll */}
        <div className="sm:hidden">
          <div className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory 
            scrollbar-hide -mx-4 px-4">
            {aboutItems.map((item, index) => (
              <div
                key={index}
                className="flex-none w-[280px] snap-start bg-[#d4e8e8]/80 backdrop-blur-sm rounded-xl 
                  overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="280px"
                    priority={index === 0}
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block bg-cyan-100 text-[#2c3e50] px-3 py-1 
                    rounded-md text-sm font-semibold mb-3">
                    {item.title}
                  </span>
                  <p className="text-[#2c3e50] text-sm leading-relaxed line-clamp-4">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="mt-4 flex justify-center gap-2">
            {aboutItems.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
