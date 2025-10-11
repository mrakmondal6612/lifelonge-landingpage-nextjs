
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "@/public/hero-medical.jpg";

const Hero = () => {
  return (
    <>
      <section 
        id="home" 
        className="relative min-h-[100svh] flex items-center justify-center overflow-hidden mt-0 py-20 sm:py-24"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage.src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/40" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            Your Pathway to a Successful
            <span className="block mt-2">Healthcare Career</span>
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10">
            Expert guidance for your journey in healthcare education. Find your perfect path with personalized support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-[#1a4d3e] hover:bg-white/90 font-semibold px-8 sm:px-10 py-6 h-auto text-base sm:text-lg rounded-full transition-all duration-300"
            >
              GET STARTED
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#1a4d3e] font-semibold px-8 sm:px-10 py-6 h-auto text-base sm:text-lg rounded-full transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#ffffff]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1a4d3e] mb-2">WHO ARE WE?</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Welcome to Lifelong Career Consultancy</h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Are you a high school graduate unsure about which direction to take in the vast 
                field of healthcare? Whether you're considering MBBS, BDS, BHMS, BAMS, BUMS, 
                nursing, paramedical courses, or allied health professions, we are here to help! 
                Our expert consultants provide you with the guidance you need to make the right 
                decision for your future. With personalized support at every stage of your journey, 
                we ensure that you have the resources and knowledge to pursue a successful healthcare career.
              </p>
            </div>
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] order-1 md:order-2">
              <Image
                src="/graduate-celebrating-icon.png"
                alt="Graduate celebrating success"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
