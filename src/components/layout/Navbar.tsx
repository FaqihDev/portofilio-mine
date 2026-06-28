"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#personal-projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled 
          ? "bg-bg-primary/90 backdrop-blur-md border-border-subtle py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => handleScrollTo(e, "#top")}
          className="text-2xl font-bold tracking-tighter text-text-primary hover:text-accent transition-colors"
        >
          FAR<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                activeSection === link.href.substring(1) ? "text-accent" : "text-text-secondary"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href={profile.cvPath}
            download
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-all hover:bg-accent-glow hover:scale-105 shadow-lg shadow-accent/25"
          >
            Download CV
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="text-text-primary p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-bg-primary/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-bg-secondary border-l border-border-subtle z-50 p-6 flex flex-col md:hidden"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-text-secondary hover:text-text-primary transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={cn(
                      "text-lg font-medium transition-colors",
                      activeSection === link.href.substring(1) ? "text-accent" : "text-text-primary"
                    )}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="mt-8">
                  <a
                    href={profile.cvPath}
                    download
                    className="block text-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-glow shadow-lg shadow-accent/25"
                  >
                    Download CV
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
