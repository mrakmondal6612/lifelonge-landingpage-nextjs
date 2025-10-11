import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="bg-[#c5e5e5]/90 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl 
          py-8 sm:py-12 px-6 sm:px-8 md:px-10 border border-gray-200 shadow-sm">
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Logo and Tagline */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col items-center lg:items-start">
              <div className="mb-4 sm:mb-6">
                <div className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full overflow-hidden 
                  border-4 border-white/50 shadow-md">
                  <Image
                    src="/icons/logo.png"
                    alt="LifeLong Career Logo"
                    width={144}
                    height={144}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="font-bold text-base sm:text-lg text-[#1a4d3e] uppercase tracking-wide mb-2">
                  LIFELONG CAREER
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-[280px]">
                  Your Pathway to a Successful Healthcare Career
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="col-span-1">
              <h3 className="font-bold text-sm sm:text-base text-[#1a4d3e] uppercase mb-4">
                Opening Hours
              </h3>
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-gray-700">
                  Monday - Sunday
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-900">
                  Open 24 hours
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="col-span-1">
              <h3 className="font-bold text-sm sm:text-base text-[#1a4d3e] uppercase mb-4">
                Location
              </h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1a4d3e] mt-0.5 flex-shrink-0" />
                <p className="text-sm sm:text-base text-gray-700">
                  Kalyanji, Block - A2, Nodia, WB- 741235
                </p>
              </div>
            </div>

            {/* Our Services */}
            <div className="col-span-1">
              <h3 className="font-bold text-sm sm:text-base text-[#1a4d3e] uppercase mb-4">
                Our Services
              </h3>
              <ul className="space-y-2">
                {['Career Counseling', 'Course Selection', 'College Selection', 
                  'Admission Process', 'Counseling Services'].map((service, index) => (
                  <li 
                    key={index} 
                    className="text-sm sm:text-base text-gray-700 hover:text-[#1a4d3e] 
                      transition-colors duration-200 cursor-pointer"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="col-span-1">
              <h3 className="font-bold text-sm sm:text-base text-[#1a4d3e] uppercase mb-4">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 group">
                  <div className="p-2 rounded-full bg-[#1a4d3e]/10 group-hover:bg-[#1a4d3e]/20 transition-colors">
                    <Phone className="w-4 h-4 text-[#1a4d3e]" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">9477368571</span>
                </li>
                {/* <li className="flex items-center gap-3 group">
                  <div className="p-2 rounded-full bg-[#1a4d3e]/10 group-hover:bg-[#1a4d3e]/20 transition-colors">
                    <Phone className="w-4 h-4 text-[#1a4d3e]" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">7427926066</span>
                </li> */}
                <li className="flex items-start gap-3 group">
                  <div className="p-2 rounded-full bg-[#1a4d3e]/10 group-hover:bg-[#1a4d3e]/20 transition-colors">
                    <Mail className="w-4 h-4 text-[#1a4d3e]" />
                  </div>
                  <a 
                    href="mailto:lifelongcareerconsultancy@gmail.com"
                    className="text-sm sm:text-base text-gray-700 hover:text-[#1a4d3e] 
                      transition-colors duration-200 break-all"
                  >
                    lifelongcareerconsultancy@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
              © {new Date().getFullYear()} LifeLong Career Consultancy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
