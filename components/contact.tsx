"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      toast.error("Please agree to the terms and privacy policy");
      return;
    }
    toast.success("Registration successful!");
    setFormData({ name: "", email: "", phone: "", address: "" });
    setAgreedToTerms(false);
  };

  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-[#d4e8e8] rounded-3xl p-10 border-2 border-gray-300">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              <div>
                <p className="text-sm text-gray-700 mb-2">We are here to help you</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">GET IN TOUCH WITH US</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-800" />
                  <span className="text-gray-800 font-medium">94773 68571</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-gray-800" />
                  <span className="text-gray-800 font-medium">7427929684</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-800 mt-0.5" />
                  <a 
                    href="mailto:lifelongcareerconsultancy@gmail.com" 
                    className="text-gray-800 font-medium hover:underline break-all"
                  >
                    lifelongcareerconsultancy@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-800 mt-0.5" />
                  <span className="text-gray-800 font-medium">
                    Kalyani, Block -A2, Nadia, WB- 741235
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name:
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-gray-100 border-none h-11 rounded-lg focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Phone Number:
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-gray-100 border-none h-11 rounded-lg focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address:
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-gray-100 border-none h-11 rounded-lg focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Address:
                  </label>
                  <Input
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="bg-gray-100 border-none h-11 rounded-lg focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the <a href="#" className="text-[#0ea5e9] hover:underline">Term</a> & <a href="#" className="text-[#0ea5e9] hover:underline">Privacy Policy</a>.
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold py-3 rounded-lg"
                >
                  REGISTER
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
