import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-white">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8  rounded-full flex items-center justify-center">
<img src="/image.png" alt="Logo" className="w-8 h-8 object-contain" />
         </div>
                <div>
                  <div className="text-xl font-bold">The Inner Circle</div>
                  {/* <div className="text-xs tracking-wider">VACATIONS</div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Book Now Button */}
          <Button variant="hero" size="lg" className="font-semibold">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;