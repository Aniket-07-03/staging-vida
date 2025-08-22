import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Crown, CreditCard } from "lucide-react";

const VIPOfferSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-vida-teal font-semibold text-lg mb-4">Your Exclusive Referral Offer</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            A <span className="text-vida-teal italic">VIP Vacation</span> Just For You
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Being referred by a friend has its perks! As a <strong>referred guest</strong> of The Inner CircleVacations, you unlock a special offer{" "}
              <strong>not available to the general public</strong> – it's our way of saying "welcome to the family." Here's what you can look forward to with your{" "}
              <strong>Friends & Family Referral Offer</strong>
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Luxury Resort Stay Card */}
          <Card className="border-2 border-gray-200 hover:border-vida-teal transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-vida-teal/10 rounded-2xl flex items-center justify-center mx-auto">
                <Gift className="w-8 h-8 text-vida-teal" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900">
                Luxury Resort Stay In Mexico
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                Enjoy a complimentary 5-day/4-night stay (or choose a 7-night getaway) at one of our 
                premium beach resorts in Mexico's most beautiful destinations. From white-sand beaches 
                to turquoise pools, paradise awaits you.
              </p>
            </CardContent>
          </Card>

          {/* VIP Treatment Card - Featured */}
          <Card className="border-2 border-vida-teal bg-gray-900 text-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-vida-teal rounded-2xl flex items-center justify-center mx-auto">
                <Crown className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold">
                VIP Treatment & Perks
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                Experience vacationing as a VIP guest of a member – that means extra perks! Enjoy airport 
                pickup, a personal concierge, welcome cocktails, and even little surprises (our staff might clean 
                your sunglasses or bring you poolside popsicles – seriously!). Expect world-class service every 
                step of the way.
              </p>
            </CardContent>
          </Card>

          {/* Exclusive Discounts Card */}
          <Card className="border-2 border-gray-200 hover:border-vida-teal transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-vida-teal/10 rounded-2xl flex items-center justify-center mx-auto">
                <CreditCard className="w-8 h-8 text-vida-teal" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900">
                Exclusive Discounts & Credits
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                As a referral guest, you may receive resort credits for spa treatments, golf outings, or 
                dining, plus access to members-only rates if you extend your stay or upgrade your room.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button variant="hero" size="xl" className="text-lg font-semibold px-12">
            Claim My Exclusive Offer
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VIPOfferSection;