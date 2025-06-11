import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-beauty-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-4">
            Let's Create Something Beautiful
          </h2>
          <p className="font-serif text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to book your makeup session? Get in touch and let's discuss how I can help make your special day perfect
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-beauty-soft-white border-beauty-blush shadow-xl">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-6 text-center">
                Book Your Consultation
              </h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-muted-foreground">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Your first name"
                      className="border-beauty-blush focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-muted-foreground">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Your last name"
                      className="border-beauty-blush focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-muted-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="border-beauty-blush focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-muted-foreground">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="(123) 456-7890"
                    className="border-beauty-blush focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-muted-foreground">Type of Service</Label>
                  <Select>
                    <SelectTrigger className="border-beauty-blush focus:border-primary">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bridal">Bridal Makeup</SelectItem>
                      <SelectItem value="non-bridal">Non-Bridal Makeup</SelectItem>
                      <SelectItem value="engagement">Engagement Makeup</SelectItem>
                      <SelectItem value="photoshoot">Photoshoot Makeup</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventDate" className="text-muted-foreground">Event Date (if applicable)</Label>
                  <Input 
                    id="eventDate" 
                    type="date"
                    className="border-beauty-blush focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-muted-foreground">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your event, preferred style, or any specific requests..."
                    className="border-beauty-blush focus:border-primary min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-beauty-pink text-primary-foreground font-medium py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'd love to hear about your upcoming event! Whether it's your wedding day, a special celebration, 
                or a professional photoshoot, let's connect and create the perfect look for you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-beauty-soft-white rounded-xl">
                <div className="w-12 h-12 bg-beauty-pink rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-primary">Email</h4>
                  <p className="text-muted-foreground">hello@beautybyjassar.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-beauty-soft-white rounded-xl">
                <div className="w-12 h-12 bg-beauty-gold rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-primary">WhatsApp</h4>
                  <p className="text-muted-foreground">+1 (123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-beauty-soft-white rounded-xl">
                <div className="w-12 h-12 bg-beauty-champagne rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-primary">Instagram</h4>
                  <p className="text-muted-foreground">@beautybyjassar</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-beauty-blush p-6 rounded-xl">
              <h4 className="font-serif font-semibold text-primary mb-2">Quick Response</h4>
              <p className="text-muted-foreground text-sm">
                I typically respond to all inquiries within 24 hours. For urgent requests, 
                please send me a WhatsApp message for faster response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;