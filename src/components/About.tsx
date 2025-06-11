const About = () => {
  return (
    <section className="py-20 bg-beauty-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="font-script text-4xl md:text-5xl text-primary mb-4">
                Meet Jassar
              </h2>
              <h3 className="font-serif text-2xl text-beauty-gold mb-6">
                Your Dedicated Makeup Artist
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With a passion for enhancing natural beauty and years of experience in the industry, 
                  I specialize in creating stunning looks that make you feel confident and radiant on your most important days.
                </p>
                
                <p>
                  Whether it's your wedding day, a special event, or a photoshoot, I believe that makeup should 
                  enhance your unique features rather than mask them. My approach is personal, professional, 
                  and tailored to bring out the best version of yourself.
                </p>
                
                <p>
                  I stay updated with the latest trends and techniques while maintaining a timeless aesthetic 
                  that ensures your photos will look beautiful for years to come. Every client receives my 
                  full attention and care, making your experience as memorable as the final result.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-beauty-soft-white rounded-lg">
                  <div className="font-serif text-2xl font-semibold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-beauty-soft-white rounded-lg">
                  <div className="font-serif text-2xl font-semibold text-primary mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="relative z-10 bg-beauty-soft-white p-6 rounded-2xl shadow-lg">
                <div className="aspect-[3/4] bg-beauty-blush rounded-xl flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 mx-auto mb-4 bg-beauty-champagne rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-beauty-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm">Beautiful portrait of Jassar will be placed here</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-beauty-pink rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-beauty-champagne rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;