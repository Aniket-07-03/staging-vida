import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Twitter, Youtube, Download, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [urlParams, setUrlParams] = useState({
    sales_id: "",
    user_id: "",
    reffered_id: ""
  });
const VITE_API_TOKEN='your_api_token_here';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAppButtons, setShowAppButtons] = useState(false);
  const [deeplink, setDeeplink] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setUrlParams({
      sales_id: searchParams.get('SalesID') || '',
      user_id: searchParams.get('UserID') || '',
      reffered_id: searchParams.get('RefferedID') || ''
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateShortUrl = async (salesId: string, userId:any=null, refferedId: string) => {
    try {
      // Get the API token from environment variables or use empty string as fallback
      const apiToken = VITE_API_TOKEN || '';

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      // Only add Authorization header if token is available
      if (apiToken) {
        headers['Authorization'] = `Bearer ${apiToken}`;
      }

      const response = await fetch('https://stage-api.innercircle.onpointsoft.com/links', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          salesId,
          userId,
          refferedId
        }),
      });

      const result = await response.json();

      if (response.ok && result.data?.shortUrl) {
        console.log('Short URL generated successfully:', result.data.shortUrl);
        return result.data.shortUrl;
      } else {
        console.error('Failed to generate short URL:', {
          status: response.status,
          statusText: response.statusText,
          result
        });
        return null;
      }
    } catch (error) {
      console.error('Error generating short URL:', error);
      return null;
    }
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  // const payload={name: formData.name,
  // email: formData.email,
  // message: formData.message,
  // user_id?: urlParams.user_id,
  // sales_id?: urlParams.sales_id,
  // reffered_id?: urlParams.reffered_id,}
  console.log("first",formData,urlParams)
  try {
    const response = await fetch('https://stage-api.innercircle.onpointsoft.com/contacts/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        ...urlParams
      }),
    });

    const result = await response.json();

    if (response.ok && result.success !== false && result.data?.deeplink) {
      setDeeplink(result.data.deeplink);

      if (urlParams.sales_id && urlParams.reffered_id) {
        const generatedShortUrl = await generateShortUrl(
          urlParams?.sales_id,
          urlParams?.user_id,
          urlParams?.reffered_id
        );

        if (generatedShortUrl) {
          setShortUrl(generatedShortUrl);
        }
      }

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      setFormData({ name: "", email: "", message: "" });
      setShowAppButtons(true);

    } else {
      // Show API-provided error message if available
      const errorMsg = result?.message || "Failed to send message.";
      toast({
        title: "Error",
        description: errorMsg,
        variant: "destructive",
      });
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0" style={{ background: 'var(--gradient-overlay)' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Alert Banner */}
            <div className="inline-flex items-center    rounded-full px-6 py-3 text-sm font-medium">
              {/* <span className="mr-2">👉</span>
              Claim Your Exclusive Vacation Offer Now! (Limited Time For Referred Friends) */}
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Were You Referred By
                <br />
                A <span className="text-vida-teal italic">Friend?</span> Why They
                <br />
                Love The Inner Circle!
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4 text-lg text-gray-200">
              <p className="italic">Welcome to your exclusive invitation-only escape!</p>
              <p>
                If a friend referred you to The Inner Circle, it means they care about your happiness and want
                you to experience <strong className="text-white">the same luxury, fun, and relaxation</strong> that they fell in love with.
                The Inner Circle is all about <strong className="text-white">sharing unforgettable getaways
                with the people you love</strong>, and now it's <em>your</em> turn to see why your friend can't stop raving about it.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Button variant="transparent" size="xl" className="text-lg font-semibold mb-5">
                Explore More
              </Button>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:justify-self-end max-w-md w-full">
            <div className="rounded-lg p-8 shadow-form" style={{ background: 'var(--gradient-form)' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                    className="h-12 bg-white/50 border-gray-300 focus:border-vida-teal focus:ring-vida-teal"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="h-12 bg-white/50 border-gray-300 focus:border-vida-teal focus:ring-vida-teal"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    rows={4}
                    required
                    className="bg-white/50 border-gray-300 focus:border-vida-teal focus:ring-vida-teal resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full h-12 text-lg font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </form>

              {/* App Store Buttons - Show after successful submission */}
              {showAppButtons && (
                <div className="mt-6 space-y-3">
                  <p className="text-center text-sm font-medium text-white">Download our app</p>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 h-12 bg-white/70 hover:bg-white"
                      onClick={() => window.open(shortUrl  || 'https://play.google.com/store', '_blank')}
                    >
                      <img src="/play.png" alt="" className="h-4 w-4 mr-2" />

                      Play Store
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 h-12 bg-white/70 hover:bg-white"
                      onClick={() => window.open(shortUrl  || 'https://apps.apple.com/app-store', '_blank')}
                    >
                      <img src="/app.png" alt="" className="h-4 w-4 mr-2" />
                      App Store
                    </Button>
                  </div>
                </div>
              )}

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-4 mt-6">
                <Button variant="ghost" size="icon" className="text-vida-teal hover:text-vida-teal-dark hover:bg-vida-teal/10">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-vida-teal hover:text-vida-teal-dark hover:bg-vida-teal/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-vida-teal hover:text-vida-teal-dark hover:bg-vida-teal/10">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
