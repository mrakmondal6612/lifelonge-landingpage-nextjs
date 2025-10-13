"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { initEmailJS, sendRegistrationEmail } from "@/lib/emailjs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    initEmailJS();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      toast.error("Please agree to the terms and privacy policy");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendRegistrationEmail(formData);
      
      if (result.success) {
        toast.success("Registration successful! We'll contact you soon.");
        setFormData({ name: "", email: "", phone: "", address: "" });
        setAgreedToTerms(false);
      } else {
        toast.error("Failed to register. Please try again or contact us directly.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-[#d4e8e8]/90 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl 
          p-6 sm:p-8 md:p-10 border border-gray-300 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Side - Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <p className="text-sm sm:text-base text-[#1a4d3e]/80 mb-2">We are here to help you</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a4d3e] mb-6 sm:mb-8">
                  GET IN TOUCH WITH US
                </h2>
                <p className="text-gray-600 text-base sm:text-lg max-w-lg">
                  Have questions or ready to start your healthcare journey? We're here to guide you every step of the way.
                </p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-full bg-[#1a4d3e]/10 group-hover:bg-[#1a4d3e]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#1a4d3e]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Primary Contact</p>
                    <span className="text-gray-900 font-medium text-base sm:text-lg">94773 68571</span>
                  </div>
                </div>

                {/* <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-full bg-[#1a4d3e]/10 group-hover:bg-[#1a4d3e]/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#1a4d3e]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Secondary Contact</p>
                    <span className="text-gray-900 font-medium text-base sm:text-lg">7427929684</span>
                  </div>
                </div> */}

                 {/* WhatsApp */}
                <li className="flex items-center gap-3 group">
                  <div className="p-2 rounded-full bg-[#1a4d3e]/10 group-hover:bg-[#1a4d3e]/20 transition-colors">
                    <Image
                      src="/icons/whatsapp.png"
                      alt="WhatsApp"
                      width={18}
                      height={18}
                    />
                  </div>
                  <a
                    href="https://wa.me/9477368571"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-gray-700 hover:text-[#1a4d3e] transition-colors duration-200"
                  >
                    Chat on WhatsApp 9477368571
                  </a>
                </li>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-full bg-[#1a4d3e]/10 group-hover:bg-[#1a4d3e]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#1a4d3e]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email Us</p>
                    <a 
                      href="mailto:lifelongcareerconsultancy@gmail.com" 
                      className="text-gray-900 font-medium text-base sm:text-lg hover:text-[#1a4d3e] transition-colors break-all"
                    >
                      lifelongcareerconsultancy@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-full bg-[#1a4d3e]/10 group-hover:bg-[#1a4d3e]/20 transition-colors">
                    <MapPin className="w-5 h-5 text-[#1a4d3e]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Our Location</p>
                    <span className="text-gray-900 font-medium text-base sm:text-lg">
                      Kalyani, Block -A2, Nadia, WB- 741235
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a4d3e] mb-6">Register Now</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-900 mb-2">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-gray-100 border-none h-11 sm:h-12 rounded-lg focus-visible:ring-1 
                      focus-visible:ring-[#1a4d3e] focus-visible:ring-offset-2 transition-shadow"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-900 mb-2">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-gray-100 border-none h-11 sm:h-12 rounded-lg focus-visible:ring-1 
                      focus-visible:ring-[#1a4d3e] focus-visible:ring-offset-2 transition-shadow"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-900 mb-2">
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-gray-100 border-none h-11 sm:h-12 rounded-lg focus-visible:ring-1 
                      focus-visible:ring-[#1a4d3e] focus-visible:ring-offset-2 transition-shadow"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-900 mb-2">
                    Address<span className="text-red-500">*</span>
                  </label>
                  <Input
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="bg-gray-100 border-none h-11 sm:h-12 rounded-lg focus-visible:ring-1 
                      focus-visible:ring-[#1a4d3e] focus-visible:ring-offset-2 transition-shadow"
                    placeholder="Enter your address"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-[#1a4d3e] focus:ring-[#1a4d3e]"
                  />
                  <label htmlFor="terms" className="text-sm sm:text-base text-gray-700">
                    I agree to the <a href="#" className="text-[#1a4d3e] hover:underline font-medium">Terms</a> & 
                    <a href="#" className="text-[#1a4d3e] hover:underline font-medium"> Privacy Policy</a>
                  </label>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#1a4d3e] hover:bg-[#153d31] text-white font-semibold py-2.5 sm:py-3 
                    rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-base sm:text-lg mt-4
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Registering..." : "Register Now"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
