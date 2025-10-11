"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "About us", href: "/#about" },
    { name: "Our services", href: "/#services" },
    { name: "why choose us", href: "/#why-choose-us" },
    { name: "How it works", href: "/#how-it-works" },
    { name: "FAQS", href: "/#faqs" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="mx-6 my-2">
        <div className="bg-[#e5f9f6]/90 backdrop-blur-sm rounded-full px-6 py-2">
          <div className="flex items-center justify-between">
            <a href="/#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="/icons/logo.png"
                  alt="LifeLong Career Logo"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold leading-tight text-base text-[#1a4d3e]">LIFELONG</span>
                <span className="text-sm leading-tight text-[#2c3e50]">CAREER CONSULTANCY</span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[15px] font-medium text-[#2c3e50] hover:text-[#1a4d3e] transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a href="/#contact" className="inline-block">
                <Button 
                  size="sm"
                  className="bg-[#1a4d3e] hover:bg-[#153d31] text-white text-[15px] px-6 py-5 h-auto rounded-full shadow-sm transition-colors"
                >
                  Contact us<span className="ml-1">→</span>
                </Button>
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6 text-[#1a4d3e]" />
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden pt-4 pb-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-[15px] font-medium text-[#2c3e50] hover:text-[#1a4d3e] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="/#contact" className="inline-block">
                <Button 
                  size="sm"
                  className="mt-2 w-full bg-[#1a4d3e] hover:bg-[#153d31] text-white text-[15px] py-5 h-auto rounded-full shadow-sm transition-colors"
                >
                  Contact us<span className="ml-1">→</span>
                </Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export { SiteHeader };