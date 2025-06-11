import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      category: "Bridal",
      title: "Classic Bridal Elegance",
      description: "Timeless bridal look with soft glam"
    },
    {
      id: 2,
      category: "Bridal",
      title: "Romantic Garden Wedding",
      description: "Natural dewy finish with rose tones"
    },
    {
      id: 3,
      category: "Non-Bridal",
      title: "Evening Glamour",
      description: "Bold and sophisticated evening look"
    },
    {
      id: 4,
      category: "Engagement",
      title: "Soft Engagement Glow",
      description: "Natural enhancement for photoshoot"
    },
    {
      id: 5,
      category: "Non-Bridal",
      title: "Corporate Professional",
      description: "Polished and professional daytime look"
    },
    {
      id: 6,
      category: "Bridal",
      title: "Vintage Inspired Bride",
      description: "Classic vintage glamour with modern touch"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-2xl bg-beauty-blush shadow-lg">
                <div className="aspect-[4/5] bg-gradient-to-br from-beauty-soft-white to-beauty-champagne flex items-center justify-center">
                  <div className="text-center text-muted-foreground p-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-beauty-pink rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
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