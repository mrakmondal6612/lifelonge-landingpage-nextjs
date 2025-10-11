import Image from "next/image";

const Testimonial = () => {
  const testimonials = [
    {
      quote: "LifeLong Career Consultancy helped me find my path in healthcare. Their guidance was invaluable in choosing the right course and college.",
      author: "Priya Sharma",
      role: "Medical Student",
      image: "/icons/testimonial1.png",
      rating: 5
    },
    {
      quote: "The personalized attention and expert counseling made all the difference. I'm now pursuing my dream career in nursing.",
      author: "Rahul Patel",
      role: "Nursing Student",
      image: "/professional-work.jpg",
      rating: 5
    },
    {
      quote: "Their comprehensive support throughout the admission process was exceptional. Highly recommend their services!",
      author: "Ananya Singh",
      role: "Dental Student",
      image: "/icons/testimonial2.png",
      rating: 5
    },
    {
      quote: "Outstanding support and guidance throughout my MBBS admission journey. They made the complex process simple and stress-free.",
      author: "Farzana Rahman",
      role: "MBBS Student",
      image: "/icons/nurse-professional.jpg",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-12 sm:my-16 md:my-20 rounded-3xl">
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl py-6 sm:py-8 md:py-12 bg-white rounded-3xl border border-[#d4e8e8]/50">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a4d3e]">
            Student Testimonials
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our students say about their journey with us
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl 
                transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative w-full aspect-[3/2] bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.author}'s testimonial`}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
              <div className="p-3 sm:p-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xs sm:text-sm text-gray-900 mb-2 italic line-clamp-2">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#1a4d3e]/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#1a4d3e]">
                      {testimonial.author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a4d3e] text-xs">{testimonial.author}</p>
                    <p className="text-[10px] text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Horizontal Scroll */}
        <div className="sm:hidden">
          <div className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory 
            scrollbar-hide -mx-4 px-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-[220px] bg-white rounded-xl overflow-hidden shadow-md 
                  snap-start border border-gray-100"
              >
                <div className="relative w-full aspect-[3/2] bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.author}'s testimonial`}
                    fill
                    className="object-contain p-2"
                    sizes="300px"
                  />
                </div>
                <div className="p-3">
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-xs text-gray-900 mb-3 italic line-clamp-3">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#1a4d3e]/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-[#1a4d3e]">
                        {testimonial.author[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a4d3e] text-xs">{testimonial.author}</p>
                      <p className="text-[10px] text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="mt-4 flex justify-center gap-2">
            {testimonials.map((_, index) => (
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

export default Testimonial;
