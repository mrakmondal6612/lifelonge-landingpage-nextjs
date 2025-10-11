import Image from "next/image";

const Gallery = () => {
  const images = [
    { src: "/consultation.jpg", alt: "Professional consultation" },
    { src: "/team-meeting.jpg", alt: "Team collaboration" },
    { src: "/professional-work.jpg", alt: "Professional at work" }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a4d3e]">Our Gallery</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Take a glimpse into our professional environment
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-xl overflow-hidden shadow-lg 
                hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* Mobile View - Horizontal Scroll */}
        <div className="sm:hidden relative">
          <div className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory 
            scrollbar-hide -mx-4 px-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-none w-[200px] relative aspect-[4/3] rounded-lg overflow-hidden 
                  shadow-md first:ml-0 snap-start"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="mt-4 flex justify-center gap-2">
            {images.map((_, index) => (
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

export default Gallery;
