import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Bridal Makeup",
      description: "Complete bridal makeup including trial session, wedding day application, and touch-up kit",
      features: ["Pre-wedding consultation", "Trial makeup session", "Wedding day application", "Touch-up kit included"],
      price: "Starting from $200",
      icon: "💐"
    },
    {
      title: "Non-Bridal Makeup",
      description: "Perfect for parties, dates, professional events, or any time you want to look your best",
      features: ["Custom look consultation", "Professional application", "Long-lasting formulas", "Photo-ready finish"],
      price: "Starting from $80",
      icon: "✨"
    },
    {
      title: "Engagement Makeup",
      description: "Romantic and photogenic makeup for your engagement photos and celebration",
      features: ["Romantic, soft glam look", "Photo-optimized application", "Consultation included", "Touch-up guidance"],
      price: "Starting from $120",
      icon: "💍"
    },
    {
      title: "Photoshoot Makeup",
      description: "Professional makeup designed specifically for photography and camera work",
      features: ["HD makeup application", "Camera-ready techniques", "Multiple look options", "Professional products"],
      price: "Starting from $100",
      icon: "📸"
    }
  ];

  return (
    <section className="py-20 bg-beauty-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-4">
            My Services
          </h2>
          <p className="font-serif text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional makeup services tailored to make you look and feel absolutely stunning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-beauty-soft-white border-beauty-blush">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-beauty-gold rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-beauty-blush">
                  <div className="font-serif text-lg font-semibold text-beauty-gold mb-4">
                    {service.price}
                  </div>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom package? Let's discuss your specific needs
          </p>
          <Button 
            size="lg"
            className="bg-beauty-gold hover:bg-beauty-champagne text-accent-foreground font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;