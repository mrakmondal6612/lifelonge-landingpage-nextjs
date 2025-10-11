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
    <section id="faqs" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">FAQS</h2>

        <div className="bg-green-100 rounded-3xl p-10 border-2 border-[#a8c5d1]">
          <p className="text-base text-gray-900 mb-6 font-medium">
            Fill out the form below to send us your queries. We'll get back to you as soon as possible!
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-normal mb-2 text-gray-900">Full Name:</label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-[#d4e8e8] border-none h-12 rounded-lg focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div>
              <label className="block text-sm font-normal mb-2 text-gray-900">Email Address:</label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-[#d4e8e8] border-none h-12 rounded-lg focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div>
              <label className="block text-sm font-normal mb-2 text-gray-900">Phone Number:</label>
              <Input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="bg-[#d4e8e8] border-none h-12 rounded-lg focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div>
              <label className="block text-sm font-normal mb-2 text-gray-900">Subject:</label>
              <Input
                required
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="bg-[#d4e8e8] border-none h-12 rounded-lg focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div>
              <label className="block text-sm font-normal mb-2 text-gray-900">Your Message/Query:</label>
              <Textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={6}
                className="bg-[#d4e8e8] border-none rounded-lg resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="flex justify-end pt-2">
              <Button 
                type="submit" 
                className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold px-8 py-2 rounded-md"
              >
                SUBMIT
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
