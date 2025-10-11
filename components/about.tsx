import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">ABOUT US</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Vision */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-cyan-100 text-[#2c3e50] px-6 py-2 rounded-lg font-semibold mb-4">
                Vision
              </span>
              <p className="text-[#2c3e50] leading-relaxed mt-4">
                To empower students by offering the guidance, resources, and opportunities necessary to realize their potential, ensuring they embark on a fulfilling and successful career in the healthcare industry.
              </p>
            </div>

            <div className="mt-8 relative h-[420px] w-[550px]">
              <Image
                src="/office-meeting-desk.jpg"
                alt="Professional consultation"
                fill
                className="object-cover rounded-2xl shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right Column - Mission */}
          <div className="space-y-6">
            <div className="mb-8 relative h-[420px] w-[550px]">
              <Image
                src="/healthcare-professional-teal.png"
                alt="Healthcare professional"
                fill
                className="object-contain rounded-2xl shadow-lg"
              />
            </div>

            <div>
              <span className="inline-block bg-cyan-100 text-foreground px-6 py-2 rounded-lg font-semibold mb-4">
                Mission
              </span>
              <p className="text-foreground leading-relaxed mt-4">
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
