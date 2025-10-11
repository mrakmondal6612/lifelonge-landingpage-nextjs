import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16 text-[#1a4d3e]">ABOUT US</h2>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Left Column - Vision */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <span className="inline-block bg-cyan-100 text-[#2c3e50] px-4 sm:px-6 py-2 rounded-lg font-semibold mb-4 text-sm sm:text-base">
                Vision
              </span>
              <p className="text-[#2c3e50] leading-relaxed mt-4 text-base sm:text-lg">
                To empower students by offering the guidance, resources, and opportunities necessary to realize their potential, ensuring they embark on a fulfilling and successful career in the healthcare industry.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 relative aspect-[4/3] w-full max-w-[550px] mx-auto">
              <Image
                src="/office-meeting-desk.jpg"
                alt="Professional consultation"
                fill
                className="object-cover rounded-2xl shadow-lg"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 550px"
                priority
              />
            </div>
          </div>

          {/* Right Column - Mission */}
          <div className="space-y-6 sm:space-y-8 mt-8 md:mt-0">
            <div className="relative aspect-[4/3] w-full max-w-[550px] mx-auto order-2 md:order-1">
              <Image
                src="/healthcare-professional-teal.png"
                alt="Healthcare professional"
                fill
                className="object-contain rounded-2xl"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 550px"
              />
            </div>

            <div className="order-1 md:order-2">
              <span className="inline-block bg-cyan-100 text-[#2c3e50] px-4 sm:px-6 py-2 rounded-lg font-semibold mb-4 text-sm sm:text-base">
                Mission
              </span>
              <p className="text-[#2c3e50] leading-relaxed mt-4 text-base sm:text-lg">
                Our mission is to bridge the gap between academic decisions and career success, providing students with the support they need to choose the right healthcare career path and guiding them through the process of achieving their goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
