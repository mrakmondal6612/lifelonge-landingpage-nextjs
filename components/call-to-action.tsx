import { Button } from "@/components/ui/button";
import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">
              Let's Begin Your Journey Today!
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Are you ready to start your healthcare career in the United States? Contact us today to set up your career path. We're here to help you achieve your dreams!
            </p>
            <Button size="lg" className="font-semibold">
              GET STARTED NOW
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative w-full max-w-md mx-auto aspect-[4/3]">
              <Image
                src="/graduate-celebrating.png"
                alt="Graduate ready for career"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
