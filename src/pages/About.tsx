
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-ducky-cream">
      <Header />
      
      <main>
        <section className="py-16 px-4 md:px-8 bg-ducky-yellow">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Our Rubber Ducky Story</h1>
            <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Rubber Ducky Drink Co. was born from a simple idea: great drinks should bring joy—even without the booze. 
            Since 2024, we’ve been crafting non-alcoholic beverages that blend premium ingredients with playful energy, 
            redefining what it means to enjoy a drink.
            </p>
          </div>
        </section>
        
        <section className="py-16 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-black">Why Rubber Ducky?</h2>
                <p className="text-lg text-black/70 mb-4">
                The rubber duck is a universal symbol of lightheartedness and fun—just like our drinks. 
                We wanted to can that same carefree feeling: a little wink of nostalgia, a splash of 
                sunshine, and a whole lot of flavor.
                </p>
                <p className="text-lg text-black/70 mb-4">
                Our mission? Deliver an experience that’s flavorful, inclusive, and never a compromise.
                </p>
                <p className="text-lg text-black/70">
                  Today, Rubber Ducky Drink Co. creates beverages that bring a smile to your face 
                  with every sip, proving that you don't need alcohol to have a sophisticated and 
                  enjoyable drinking experience.
                </p>
              </div>
              
              <div className="h-[400px] rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <img 
                    src="/images/dual_can_lay.jpg" 
                    alt="Rubber Ducky Logo" 
                    
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 md:px-8 bg-ducky-yellow/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-black">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-4 text-black">🥭 Quality Ingredients</h3>
                <p className="text-black/70">
                We use real fruit extracts, natural flavors, and clean ingredients—nothing artificial, 
                no added sugar. Just seriously good taste.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-4 text-black">🤝 Inclusivity</h3>
                <p className="text-black/70">
                Everyone deserves something fun in their glass. Whether you’re sober, sober-curious, 
                or just skipping alcohol tonight—we’ve got your back.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-4 text-black">🦆 Playful Sophistication</h3>
                <p className="text-black/70">
                Crafted with intention, delivered with a wink. Our drinks are thoughtfully made 
                but never take themselves too seriously.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gray-200 h-[400px] rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <img 
                    src="/images/products/yellow-can.png" 
                    alt="Rubber Ducky Product" 
                    className="h-64 mx-auto" 
                  />
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6 text-black">How We Craft Our Flavor</h2>
                <p className="text-lg text-black/70 mb-4">
                From our first pour to our final batch, our process is both an art and a science. 
                Every flavor starts with a sensory concept—zesty, bold, or smooth—then goes through 
                rigorous testing by flavor experts and real-world sippers.
                </p>
                <p className="text-lg text-black/70 mb-4">
                We combine botanical infusions, real juice concentrates, and natural sweetness to land 
                on balanced, refreshing, and damn delicious results.
                </p>
                <p className="text-lg text-black/70">
                If it doesn’t make us smile? It doesn’t make it to your can.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 md:px-8 bg-ducky-red">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Be Part of the Flock</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Rubber Ducky is more than a beverage brand—it’s a movement. We’re always on the lookout 
            for talented, passionate people to help shape the future of drinking culture.
            </p>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">Interested in joining the team?</p>
            <Button variant="yellow" size="lg">View Open Positions</Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
