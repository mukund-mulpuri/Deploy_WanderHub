import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MapPin, Calendar, DollarSign } from "lucide-react";

const Destinations = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
      }
    };
    checkAuth();
  }, [navigate]);

  const destinations = [
    {
      name: "Araku Valley",
      location: "Visakhapatnam District",
      description: "A scenic hill station known for its coffee plantations, waterfalls, and tribal culture",
      budget: "₹5,000 - ₹10,000",
      duration: "2-3 days",
      category: "Hill Station",
    },
    {
      name: "Tirupati",
      location: "Chittoor District",
      description: "Famous for the Sri Venkateswara Temple, one of the most visited pilgrimage sites",
      budget: "₹3,000 - ₹8,000",
      duration: "1-2 days",
      category: "Religious",
    },
    {
      name: "Visakhapatnam",
      location: "Coastal City",
      description: "Beautiful beaches, naval heritage, and scenic drives along the coast",
      budget: "₹8,000 - ₹15,000",
      duration: "3-4 days",
      category: "Beach",
    },
    {
      name: "Horsley Hills",
      location: "Chittoor District",
      description: "Peaceful hill station with pleasant climate and scenic viewpoints",
      budget: "₹4,000 - ₹9,000",
      duration: "1-2 days",
      category: "Hill Station",
    },
    {
      name: "Gandikota",
      location: "Kadapa District",
      description: "Known as the Grand Canyon of India, offering stunning gorge views",
      budget: "₹6,000 - ₹12,000",
      duration: "2-3 days",
      category: "Adventure",
    },
    {
      name: "Borra Caves",
      location: "Ananthagiri Hills",
      description: "Ancient limestone caves with stunning stalactite and stalagmite formations",
      budget: "₹3,000 - ₹7,000",
      duration: "1 day",
      category: "Nature",
    },
  ];

  const filteredDestinations = destinations.filter((dest) =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Explore Destinations</h1>
          <p className="text-muted-foreground mb-6">
            Discover the most beautiful places in Andhra Pradesh
          </p>

          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search destinations, locations, or categories..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((destination) => (
            <Card key={destination.name} className="hover:shadow-lg transition-all cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{destination.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      {destination.location}
                    </CardDescription>
                  </div>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {destination.category}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{destination.description}</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4 text-secondary" />
                    <span>{destination.budget}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{destination.duration}</span>
                  </div>
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

export default Destinations;
