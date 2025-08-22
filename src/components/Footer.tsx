import { Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10  rounded-full flex items-center justify-center">
<img src="/image.png" alt="" />                 </div>
              <div>
                <div className="text-2xl font-bold">The Inner Circle</div>
                {/* <div className="text-sm tracking-wider text-gray-400">VACATIONS</div> */}
              </div>
            </div>

            {/* Description */}
            <div className="max-w-md">
              <p className="text-gray-300 leading-relaxed">
                We believe that every traveler deserves a vacation that reflects their 
                lifestyle. That's why we offer a diverse selection of resort hotels featuring 
                their own unique experience.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Our Contact</h3>
              <div className="space-y-3 text-gray-300">
                <p>Mexico: 800-366-6600</p>
                <p>U.S. and Canada: 1-800-292-9446</p>
                <p>Rest of the world: +52 (322) 176 0660</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-vida-teal hover:text-vida-teal-light hover:bg-vida-teal/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-vida-teal hover:text-vida-teal-light hover:bg-vida-teal/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-vida-teal hover:text-vida-teal-light hover:bg-vida-teal/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">
            Copyright 2025 The Inner CircleVacations | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;