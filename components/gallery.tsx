import Image from "next/image";

const Gallery = () => {
  const images = [
    { src: "/consultation.jpg", alt: "Professional consultation" },
    { src: "/team-meeting.jpg", alt: "Team collaboration" },
    { src: "/professional-work.jpg", alt: "Professional at work" }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
