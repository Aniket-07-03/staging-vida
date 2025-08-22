import { Button } from "@/components/ui/button";
import resortLuxury from "@/assets/resort-luxury.jpg";

const BeachsideBlissSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={resortLuxury} 
                alt="Luxury resort with infinity pool" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Beachside Bliss In Mexico –{" "}
                <span className="text-vida-teal italic">Paradise</span> At Your
                Fingertips
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Infinity pools, palm-fringed beaches, and lush tropical grounds – The Inner CircleVacations resorts 
                offer breathtaking paradise everywhere you turn.
              </p>
              
              <p>
                Picture yourself lounging by a magnificent infinity pool overlooking the ocean, palm 
                trees swaying in the breeze, and soft golden sand just steps away. The Inner CircleVacations' 
                resorts are set in Mexico's most stunning beach destinations, offering what can only be 
                described as pure bliss. You'll find extraordinary resorts in locations like Nuevo Vallarta 
                (Nayarit), Riviera Maya (Caribbean coast), Los Cabos, Acapulco, Puerto Peñasco, Puerto 
                Vallarta, and more – each with its own unique charm and adventures...{" "}
                <Button variant="link" className="text-vida-teal hover:text-vida-teal-dark p-0 h-auto font-semibold">
                  Read More
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeachsideBlissSection;