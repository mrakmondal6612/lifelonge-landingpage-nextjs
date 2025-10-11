
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "@/public/hero-medical.jpg";

const Hero = () => {
  return (
    <>
      <section id="home" className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden mt-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage.src})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Your Pathway to a Successful<br />Healthcare Career
          </h1>
          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-4">
            <Button size="lg" className="bg-white hover:bg-white/90 text-[#1a4d3e] font-semibold px-10 py-6 h-auto rounded-full text-lg border-2 border-white">
              GET START
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1a4d3e] font-semibold px-10 py-6 h-auto rounded-full text-lg">
              CONTACT NOW
            </Button>
          </div> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8">
            GET STARTED
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold px-8">
            Learn More
          </Button>
        </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#ffffff]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#1a4d3e] mb-2">WHO ARE WE ?</h2>
              <h3 className="text-3xl font-bold mb-4">Welcome to Lifelong Career Consultancy</h3>
              <p className="text-gray-700 leading-relaxed">
                Are you a high school graduate unsure about which direction to take in the vast 
                field of healthcare? Whether you're considering MBBS, BDS, BHMS, BAMS, BUMS, 
                nursing, paramedical courses, or allied health professions, we are here to help! 
                Our expert consultants provide you with the guidance you need to make the right 
                decision for your future. With personalized support at every stage of your journey, 
                we ensure that you have the resources and knowledge to pursue a successful healthcare career.
              </p>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="/graduate-celebrating-icon.png"
                alt="Graduate celebrating success"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
