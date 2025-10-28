import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-andhra.jpg";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      const { supabase } = await import("@/integrations/supabase/client");
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/dashboard");
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
        </div>
        
        <div className="relative container h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            WanderHub
          </h1>
          <p className="text-2xl md:text-3xl mb-8 max-w-2xl drop-shadow-md">
            Explore the Hidden Gems of Andhra Pradesh
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl opacity-90">
            Discover breathtaking destinations, plan perfect itineraries, and create unforgettable memories
          </p>
          
          <div className="flex gap-4">
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="text-lg px-8 py-6"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/about")}
              className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
