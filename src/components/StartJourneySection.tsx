import { Button } from "@/components/ui/button";
import resortRoom from "@/assets/resort-room.jpg";

const StartJourneySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Start Your Journey – Claim{" "}
                <span className="text-vida-teal italic">Your Paradise</span>{" "}
                Escape Now
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Your friend knew what they were doing when they referred you – they wanted to share the joy of incredible vacations with you. Now 
                it's up to you to take the next step. Imagine yourself sipping a drink under swaying palms, bonding with loved ones, and making 
                memories in a tropical paradise. That's what awaits you with this exclusive The Inner CircleVacations offer.
              </p>
              
              <p>
                Don't miss out! Opportunities like this – an exclusive VIP vacation with special perks – don't come around often. Take advantage of 
                your friend's referral and treat yourself to the getaway you deserve.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-vida-teal">
                <p className="text-vida-teal font-semibold flex items-center">
                  <span className="mr-2">⭐</span>
                  Claim your exclusive offer today and get ready for your The Inner CircleVacations experience! Paradise is calling your name. 🏝️🌴
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                <p className="mb-2">
                  <strong>Privacy & Compliance:</strong> We value your privacy. By submitting this inquiry form, you consent to be contacted by The Inner CircleVacations (and its 
                  authorized partners) about this referral offer. Your information will only be used to administer this offer; we do not spam. Offer is subject to 
                  availability and eligibility (referred guests only). Additional terms and conditions may apply to resort bookings.
                </p>
                <p>
                  <strong>Ready to escape?</strong> Your luxurious adventure awaits – let's make it happen! 🏖️✨
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Button variant="hero" size="xl" className="text-lg font-semibold px-12">
                Contact Us Today
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:justify-self-end">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={resortRoom} 
                alt="Tropical paradise resort" 
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartJourneySection;