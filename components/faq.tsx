"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const FAQ = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section id="faqs" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a4d3e]">
            FAQS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Send us your query and we'll get back to you shortly.
          </p>
        </div>

        <div className="bg-green-100/80 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl 
          p-6 sm:p-8 md:p-10 border border-[#a8c5d1] shadow-sm">
          <p className="text-base sm:text-lg text-gray-900 mb-6 sm:mb-8 font-medium">
            Fill out the form below to send us your queries. We'll get back to you as soon as possible!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm sm:text-base font-medium mb-2 text-gray-900">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-[#d4e8e8] border-none h-11 sm:h-12 rounded-lg focus-visible:ring-1 
                    focus-visible:ring-[#1a4d3e] focus-visible:ring-offset-2 transition-shadow"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base font-medium mb-2 text-gray-900">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-[#d4e8e8] border-none h-11 sm:h-12 rounded-lg focus-visible:ring-1 
                    focus-visible:ring-[#1a4d3e] focus-visible:ring-offset-2 transition-shadow"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm sm:text-base font-medium mb-2 text-gray-900">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <Input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-[#d4e8e8] border-none h-11 sm:h-12 rounded-lg focus-visible:ring-1 
                    focus-visible:ring-[#1a4d3e] focus-visible:ring-offset-2 transition-shadow"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base font-medium mb-2 text-gray-900">
                  Subject<span className="text-red-500">*</span>
                </label>
                <Input
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="bg-[#d4e8e8] border-none h-11 sm:h-12 rounded-lg focus-visible:ring-1 
                    focus-visible:ring-[#1a4d3e] focus-visible:ring-offset-2 transition-shadow"
                  placeholder="Enter subject"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm sm:text-base font-medium mb-2 text-gray-900">
                Your Message/Query<span className="text-red-500">*</span>
              </label>
              <Textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={6}
                className="bg-[#d4e8e8] border-none rounded-lg resize-none focus-visible:ring-1 
                  focus-visible:ring-[#1a4d3e] focus-visible:ring-offset-2 transition-shadow"
                placeholder="Type your message here..."
              />
            </div>

            <div className="flex justify-end pt-4">
              <Button 
                type="submit" 
                className="bg-[#1a4d3e] hover:bg-[#153d31] text-white font-semibold px-8 py-2.5 
                  rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-base sm:text-lg w-full sm:w-auto"
              >
                Submit Query
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
