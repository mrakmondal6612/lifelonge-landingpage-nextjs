import Image from "next/image";

const Welcome = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-red-600 font-semibold mb-2">WHO ARE WE ?</p>
            <h2 className="text-3xl font-bold mb-4">Welcome to LifeBring Career Consultancy</h2>
            <p className="text-muted-foreground leading-relaxed">
              LifeBring Career Consultancy is a leading healthcare career consultancy dedicated to
              guiding aspiring healthcare professionals in achieving their career goals. Our mission
              is to simplify the complex journey of building a successful career in the U.S. healthcare
              industry by providing personalized support every step of the way. Whether you're a recent
              graduate or an experienced professional looking to transition to U.S. healthcare, we are
              here to help you succeed. Reach out to us today and take the first step towards a
              rewarding healthcare career.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3]">
              <Image
                src="/graduate-celebrating.png"
                alt="Graduate celebrating success"
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

export default Welcome;
