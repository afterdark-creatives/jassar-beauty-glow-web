import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      category: "Non-Bridal",
      title: "Evening Glamour",
      description: "Bold bronze eyeshadow with glossy lips",
      image: "/lovable-uploads/ae8a1cfa-dced-4b7e-856c-9646cc224fed.png"
    },
    {
      id: 2,
      category: "Non-Bridal",
      title: "Elegant Sophistication",
      description: "Timeless makeup with sleek styling",
      image: "/lovable-uploads/532504f1-99e6-4826-bd57-be9fb5c8182d.png"
    },
    {
      id: 3,
      category: "Non-Bridal",
      title: "Natural Glow",
      description: "Fresh, natural enhancement",
      image: "/lovable-uploads/f0b614aa-857b-46f3-afcb-91a549e25544.png"
    },
    {
      id: 4,
      category: "Bridal",
      title: "Soft Bridal Beauty",
      description: "Romantic, natural bridal glow",
      image: "/lovable-uploads/7f36dfd3-2320-4a28-88fc-cfeff8e73247.png"
    },
    {
      id: 5,
      category: "Bridal",
      title: "Traditional Elegance",
      description: "Cultural bridal makeup with traditional styling",
      image: "/lovable-uploads/2cf0ce1b-fb1c-4000-82c1-dca41e4a924c.png"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-4">
            My Portfolio
          </h2>
          <p className="font-serif text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my favorite looks, showcasing the artistry and elegance 
            that goes into each unique transformation
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 max-w-5xl mx-auto">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-[4/5] relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-primary-foreground">
                    <span className="inline-block px-3 py-1 bg-beauty-gold text-xs font-medium rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-beauty-pink text-primary-foreground font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;