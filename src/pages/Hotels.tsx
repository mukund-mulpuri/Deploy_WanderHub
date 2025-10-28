import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, MapPin, DollarSign, Wifi, Coffee, Car } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Hotels = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
      }
    };
    checkAuth();
  }, [navigate]);

  const hotels = [
    {
      name: "Haritha Hotel Araku",
      location: "Araku Valley",
      price: "₹3,500",
      rating: 4.5,
      amenities: ["WiFi", "Restaurant", "Parking"],
    },
    {
      name: "Novotel Visakhapatnam",
      location: "Visakhapatnam",
      price: "₹6,500",
      rating: 4.7,
      amenities: ["WiFi", "Pool", "Spa", "Parking"],
    },
    {
      name: "Fortune Select Grand Ridge",
      location: "Tirupati",
      price: "₹5,000",
      rating: 4.4,
      amenities: ["WiFi", "Restaurant", "Gym"],
    },
    {
      name: "Haritha Hill Resort",
      location: "Horsley Hills",
      price: "₹4,000",
      rating: 4.3,
      amenities: ["WiFi", "Restaurant", "Garden"],
    },
    {
      name: "Gateway Hotel",
      location: "Visakhapatnam",
      price: "₹7,500",
      rating: 4.8,
      amenities: ["WiFi", "Pool", "Beach Access", "Restaurant"],
    },
    {
      name: "AP Tourism Resort",
      location: "Gandikota",
      price: "₹3,000",
      rating: 4.2,
      amenities: ["WiFi", "Restaurant", "Camping"],
    },
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "wifi":
        return <Wifi className="h-4 w-4" />;
      case "restaurant":
        return <Coffee className="h-4 w-4" />;
      case "parking":
        return <Car className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Hotels & Accommodations</h1>
          <p className="text-muted-foreground">
            Find comfortable stays across Andhra Pradesh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <Card key={hotel.name} className="hover:shadow-lg transition-all cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{hotel.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      {hotel.location}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-semibold">{hotel.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-secondary" />
                  <span className="text-xl font-bold">{hotel.price}</span>
                  <span className="text-sm text-muted-foreground">per night</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.map((amenity) => (
                    <Badge key={amenity} variant="secondary" className="gap-1">
                      {getAmenityIcon(amenity)}
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Hotels;
