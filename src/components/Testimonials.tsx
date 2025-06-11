const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & Michael",
      event: "Wedding Day",
      text: "Jassar made me feel like the most beautiful version of myself on my wedding day. The makeup was flawless and lasted through tears of joy, dancing, and everything in between. I couldn't have asked for a better experience!",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      event: "Engagement Photos",
      text: "I was so nervous about my engagement shoot, but Jassar made me feel completely at ease. The makeup was perfect for photos - natural but enhanced. I felt confident and beautiful, and it shows in every picture!",
      rating: 5
    },
    {
      name: "Priya Patel",
      event: "Corporate Event",
      text: "Professional, punctual, and absolutely talented! Jassar created the perfect polished look for my company's annual gala. I received so many compliments and felt amazing all evening. Highly recommend!",
      rating: 5
    },
    {
      name: "Lisa Chen",
      event: "Birthday Celebration",
      text: "Jassar has such an eye for what works with your features. She enhanced my natural beauty while making me feel glamorous for my 30th birthday party. The makeup photographs beautifully and I felt like a million dollars!",
      rating: 5
    },
    {
      name: "Rachel Thompson",
      event: "Bridal Party",
      text: "Jassar did makeup for my entire bridal party and we all looked stunning! She managed to create cohesive looks that suited each of our different features and personalities. Such a professional and sweet artist to work with.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-4">
            What My Clients Say
          </h2>
          <p className="font-serif text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it - hear from the beautiful women who trusted me with their special moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-beauty-soft-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-beauty-blush"
            >
              {/* Quote icon */}
              <div className="text-beauty-champagne text-4xl mb-4 font-serif">"</div>
              
              {/* Rating stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-beauty-gold text-lg">★</span>
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                {testimonial.text}
              </p>
              
              {/* Client info */}
              <div className="border-t border-beauty-blush pt-4">
                <h4 className="font-serif font-semibold text-primary mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-beauty-gold">
                  {testimonial.event}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-beauty-cream p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="font-script text-3xl text-primary mb-4">
              Ready to be my next happy client?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's create your perfect look together and make your special day unforgettable
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-primary hover:bg-beauty-pink text-primary-foreground font-medium px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Book Consultation
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-beauty-gold hover:bg-beauty-champagne text-accent-foreground font-medium px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;