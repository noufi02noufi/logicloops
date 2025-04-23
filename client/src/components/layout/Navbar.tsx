import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full bg-dark bg-opacity-95 backdrop-blur-sm z-50 border-b border-gray-800 transition-all ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-12 w-auto" />
            <span className="sr-only">Logic Loops Days364</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("home")} 
              className={`text-white hover:text-primary font-medium tracking-wide transition ${location === "/" && "text-primary"}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-white hover:text-primary font-medium tracking-wide transition"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")} 
              className="text-white hover:text-primary font-medium tracking-wide transition"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("blog")} 
              className="text-white hover:text-primary font-medium tracking-wide transition"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-white hover:text-primary font-medium tracking-wide transition"
            >
              Contact
            </button>
          </nav>
          
          <Button onClick={() => scrollToSection("contact")} className="hidden md:block cta-button">
            Get Started
          </Button>
          
          <button 
            className="block md:hidden text-white" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <i className="ri-close-line text-2xl"></i>
            ) : (
              <i className="ri-menu-line text-2xl"></i>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-dark border-t border-gray-800 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col space-y-3">
            <button 
              onClick={() => scrollToSection("home")} 
              className="text-white hover:text-primary font-medium py-2 px-3 rounded-md hover:bg-gray-800 transition text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-white hover:text-primary font-medium py-2 px-3 rounded-md hover:bg-gray-800 transition text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")} 
              className="text-white hover:text-primary font-medium py-2 px-3 rounded-md hover:bg-gray-800 transition text-left"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("blog")} 
              className="text-white hover:text-primary font-medium py-2 px-3 rounded-md hover:bg-gray-800 transition text-left"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-white hover:text-primary font-medium py-2 px-3 rounded-md hover:bg-gray-800 transition text-left"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection("contact")} 
              className="w-full text-center py-2 bg-primary hover:bg-secondary text-white rounded-md font-medium transition cta-button"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
