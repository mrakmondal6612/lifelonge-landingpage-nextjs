"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "About us", href: "/#about" },
    { name: "Our services", href: "/#services" },
    { name: "why choose us", href: "/#why-choose-us" },
    { name: "How it works", href: "/#how-it-works" },
    { name: "FAQS", href: "/#faqs" },
  ];

  const handleNavItemClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href.replace('/', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="mx-4 sm:mx-6 my-2 sm:my-4">
        <div className="bg-[#e5f9f6]/90 backdrop-blur-sm rounded-2xl sm:rounded-full px-4 sm:px-6 py-2">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/#home" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
                <Image
                  src="/icons/logo.png"
                  alt="LifeLong Career Logo"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold leading-tight text-sm sm:text-base text-[#1a4d3e]">LIFELONG</span>
                <span className="text-xs sm:text-sm leading-tight text-[#2c3e50]">CAREER CONSULTANCY</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[15px] font-medium text-[#2c3e50] hover:text-[#1a4d3e] transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a href="/#contact">
                <Button 
                  size="sm"
                  className="bg-[#1a4d3e] hover:bg-[#153d31] text-white text-[15px] px-6 py-5 h-auto rounded-full shadow-sm transition-colors"
                >
                  Contact us<span className="ml-1">→</span>
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-[#1a4d3e]/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-[#1a4d3e]" />
              ) : (
                <Menu className="h-6 w-6 text-[#1a4d3e]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`
          mobile-sidebar-overlay fixed inset-0 bg-black/50 md:hidden transition-opacity duration-300
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        onClick={() => setIsOpen(false)}
        style={{ backdropFilter: 'blur(4px)' }}
      />

      {/* Mobile Navigation Sidebar */}
      <div 
        className={`
          mobile-sidebar fixed top-0 right-0 w-[80vw] sm:w-[320px] h-full bg-white shadow-xl md:hidden
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          flex flex-col rounded-none
        `}
        role="dialog"
        aria-modal="true"
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <span className="font-semibold text-lg text-[#1a4d3e]">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-[#2c3e50]" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="flex-1 overflow-y-auto py-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-6 py-3 text-sm font-medium text-[#2c3e50] hover:bg-gray-50 active:bg-gray-100 hover:text-[#1a4d3e] transition-colors capitalize"
              onClick={(e) => {
                e.preventDefault();
                handleNavItemClick(item.href);
              }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Footer */}
        <div className="p-4 border-t border-gray-100">
          <Button 
            size="lg"
            className="w-full bg-[#1a4d3e] hover:bg-[#153d31] text-white text-[15px] rounded-full"
            onClick={() => {
              setIsOpen(false);
              handleNavItemClick('/#contact');
            }}
          >
            Contact us<span className="ml-1">→</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export { SiteHeader };