import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-beauty-soft-white via-beauty-cream to-beauty-blush">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border border-beauty-pink rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-beauty-champagne rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-beauty-gold rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="font-script text-5xl md:text-6xl lg:text-7xl text-primary leading-tight">
              beauty by jassar
            </h1>
            <p className="font-serif text-lg md:text-xl text-beauty-gold mt-2 tracking-widest uppercase">
              Makeup Artist
            </p>
          </div>
          
          {/* Main tagline */}
          <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-primary mb-6 leading-tight">
            Bringing out your
            <span className="block text-beauty-gold">natural beauty</span>
           </h2>
          
          <p className="font-serif text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional Bridal & Non-Bridal Makeup Artist specializing in enhancing your unique features for your most special moments
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-beauty-pink text-primary-foreground font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Book Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-beauty-gold text-beauty-gold hover:bg-beauty-champagne hover:text-accent-foreground font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
      
      {/* Subtle animation elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-beauty-gold rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-beauty-pink rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/6 w-1.5 h-1.5 bg-beauty-champagne rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default Hero;