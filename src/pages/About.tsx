import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">About WanderHub</h1>
            <p className="text-lg text-muted-foreground">
              Your trusted companion for exploring the beauty of Andhra Pradesh
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                WanderHub is dedicated to making travel in Andhra Pradesh accessible, enjoyable, and memorable for everyone. We believe that every corner of our beautiful state has a story to tell, and we're here to help you discover it.
              </p>
              <p>
                From the misty hills of Araku Valley to the sacred temples of Tirupati, from the pristine beaches of Visakhapatnam to the stunning canyons of Gandikota - we bring you comprehensive travel information, personalized itineraries, and insider tips to make your journey unforgettable.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What We Offer</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-fit">Curated Destinations:</span>
                  <span>Handpicked locations across Andhra Pradesh with detailed information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-fit">Hotel Recommendations:</span>
                  <span>Verified accommodations to suit every budget</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-fit">AI-Powered Planning:</span>
                  <span>Smart itinerary suggestions based on your preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-fit">Budget Planning:</span>
                  <span>Transparent pricing to help you plan your trip effectively</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-fit">Community Reviews:</span>
                  <span>Real feedback from fellow travelers</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
