import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Shield, Wrench, Award } from "lucide-react";
import resortDining from "@/assets/resort-dining.jpg";
import resortRoom from "@/assets/resort-room.jpg";

const WhyVidaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-vida-teal font-semibold text-lg mb-4">Facilities & Activities</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Why The Inner CircleVacations Is So Beloved –{" "}
            <span className="text-vida-teal italic">Luxury Awaits</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl">
            At The Inner CircleVacations, vacations aren't just trips - they're personalized, high-end 
            experiences curated just for you. Your friend trusts The Inner CircleVacations, and here's why 
            you will too:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Content - Features */}
          <div className="space-y-8">
            
            {/* Members-Only Luxury */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-vida-teal/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Mountain className="w-6 h-6 text-vida-teal" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Members-Only Luxury</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Inner CircleVacations is a members-only vacation club that specializes in 
                  bespoke getaways. We craft trips to fit your style, so no two vacations 
                  are the same. It's all about what you want - whether that's a romantic 
                  escape or a fun family adventure.
                </p>
              </div>
            </div>

            {/* Trust & Exclusivity */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trust & Exclusivity</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Inner CircleVacations has been creating happy travelers since 1974, rooted in 
                  a legacy of excellence. As a referred guest, you're tapping into a 
                  trusted network of travelers who demand the best. (Your friend knew 
                  you'd appreciate the top-tier quality we deliver!)
                </p>
              </div>
            </div>

            {/* Tailored Service */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-vida-teal/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Wrench className="w-6 h-6 text-vida-teal" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tailored Service</h3>
                <p className="text-gray-700 leading-relaxed">
                  From the moment you inquire to the moment you're sipping a drink by 
                  the pool, our team has your back. Expect personalized care that goes 
                  the extra mile – no request is too big or small. We value your vacation 
                  time as much as you do, so we pull out all the stops to make it perfect.
                </p>
              </div>
            </div>

            {/* Access To Award-Winning Resorts */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Access To Award-Winning Resorts</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Inner CircleVacations gives you access to a collection of world-class resorts 
                  (operated by our sister brand) across Mexico. These resorts are truly 
                  special – in fact, several have been nominated among the world's best 
                  by Travel + Leisure readers. That means premium amenities, gourmet 
                  dining, spectacular entertainment, and service that's second to none.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="space-y-8">
            
            {/* Large Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={resortDining} 
                alt="Resort dining at sunset" 
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Two Smaller Images */}
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={resortRoom} 
                  alt="Luxury resort architecture" 
                  className="w-full h-[200px] object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={resortRoom} 
                  alt="Resort room with ocean view" 
                  className="w-full h-[200px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVidaSection;