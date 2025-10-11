import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-8">
          <div className="relative w-[200px] h-[140px] rounded-3xl overflow-hidden shadow-lg flex-shrink-0">
            <Image
              src="/consultation.jpg"
              alt="Client consultation"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <blockquote className="text-base font-normal text-gray-900 mb-1">
              <span className="font-semibold">"The future belongs to those who believe in the beauty of their dreams."</span>
            </blockquote>
            <p className="text-sm text-gray-700 mb-3">— Eleanor Roosevelt</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Your dream healthcare career is just a step away. Let us help you make that dream a reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
