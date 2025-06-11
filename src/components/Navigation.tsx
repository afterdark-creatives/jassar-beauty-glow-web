import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-beauty-soft-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-script text-2xl md:text-3xl text-primary">
              beauty by jassar
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a 
              href="#portfolio" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('portfolio');
              }}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Portfolio
            </a>
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Services
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Contact
            </a>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-beauty-pink text-primary-foreground rounded-full px-6 transition-all duration-300 hover:scale-105"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-beauty-soft-white/95 backdrop-blur-sm border-t border-beauty-blush">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                About
              </a>
              <a 
                href="#portfolio" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('portfolio');
                }}
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Portfolio
              </a>
              <a 
                href="#services" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Services
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Contact
              </a>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-primary hover:bg-beauty-pink text-primary-foreground rounded-full transition-all duration-300"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;