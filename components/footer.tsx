import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-white">
      <div className="container mx-auto">
        <div className="bg-[#c5e5e5] rounded-3xl py-12 px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            {/* Logo and Tagline */}
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-3">
                <div className="w-36 h-36 rounded-full overflow-hidden">
                  <Image
                    src="/icons/logo.png"
                    alt="LifeLong Career Logo"
                    width={144}
                    height={144}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-sm text-gray-800 uppercase tracking-wide mb-1">
                  LIFELONG<br />CAREER
                </h3>
                <p className="text-xs text-gray-700 leading-tight max-w-[180px]">
                  Your Pathway to a Successful Healthcare Career
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="font-bold text-sm text-gray-900 uppercase mb-4">
                OPENING HOURS
              </h3>
              <p className="text-sm text-gray-800">
                (Monday - Sunday) - Open 24 hours
              </p>
            </div>

            {/* Location */}
            <div>
              <h3 className="font-bold text-sm text-gray-900 uppercase mb-4">
                LOCATION
              </h3>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-800 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-800">
                  Kalyanji, Block - A2, Nodia, WB- 741235
                </p>
              </div>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="font-bold text-sm text-gray-900 uppercase mb-4">
                Our Services
              </h3>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>Career Counseling</li>
                <li>Course Selection</li>
                <li>College Selection</li>
                <li>Admission Process</li>
                <li>Counseling Services</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="font-bold text-sm text-gray-900 uppercase mb-4">
                CONTACT US
              </h3>
              <ul className="space-y-3 text-sm text-gray-800">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>94772 88571</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>7427926066</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <a 
                    href="mailto:lifelongcareerconsultancy@gmail.com"
                    className="hover:underline break-all"
                  >
                    lifelongcareerconsultancy@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
