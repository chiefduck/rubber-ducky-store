import { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Map from "@/components/Map";

const StoreLocator = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("/.netlify/functions/get-locations")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((f) => ({
          id: f.id,
          name: f.name?.trim(),
          address: f.address?.trim(),
          city: f.city?.trim(),
          state: f.state?.trim(),
          zipCode: String(f.zipCode || ""),
          phone: f.phone?.trim(),
          hours: f.hours?.trim(),
          type: f.type?.trim(),
          latitude: Number(f.latitude || null),
          longitude: Number(f.longitude || null)
        }));
        setLocations(mapped);
      })
      .catch((err) => console.error("❌ Fetch error:", err));
  }, []);

  const filteredLocations = locations.filter((location) => {
    const matchesSearch =
      location.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.city?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.state?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.zipCode?.includes(searchTerm);

    const matchesType =
      selectedType === "All" || location.type?.toLowerCase() === selectedType.toLowerCase();

    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-ducky-cream">
      <Header />

      <main className="container mx-auto py-12 px-4 md:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-black">Find Our Drinks</h1>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Rubber Ducky Drink Co. products are available at select retailers across the country.
            Enter your city or zip code to find the nearest location.
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Enter City, State or Zip Code"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 h-12 border-ducky-red focus:ring-ducky-red"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ducky-red h-5 w-5" />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "Retail", "Bar", "Restaurant", "Liquor Store"].map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "yellow" : "outline"}
              onClick={() => setSelectedType(type)}
              className="capitalize text-sm px-4 py-2"
            >
              {type}
            </Button>
          ))}
        </div>

        {/* Map + Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Locations List */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-black">Store Locations</h2>

            {filteredLocations.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-black/70">No locations found. Try adjusting your search.</p>
              </div>
            ) : (
              <div className="space-y-8 max-h-[600px] overflow-y-auto pr-2">
                {filteredLocations.map((location) => (
                  <div
                    key={location.id}
                    className="border-b border-gray-300 pb-6 last:border-b-0"
                  >
                    <div className="flex flex-col">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-lg font-bold text-black">{location.name}</h3>
                        <span className="text-xs text-white bg-ducky-red rounded-full px-2 py-0.5">
                          {location.type}
                        </span>
                      </div>

                      <p className="text-black/70">{location.address}</p>
                      <p className="text-black/70">
                        {location.city}, {location.state} {location.zipCode}
                      </p>
                      {location.phone && (
                        <p className="text-black/70 mt-1">{location.phone}</p>
                      )}
                      {location.hours && (
                        <p className="text-black/50 text-xs mt-1">{location.hours}</p>
                      )}
                      {/* Google Maps Directions */}
                      {location.latitude && location.longitude && (
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-ducky-red border border-ducky-red hover:bg-ducky-red/10 mt-3 px-3 py-2 rounded-lg text-sm font-semibold"
                        >
                          <MapPin className="h-4 w-4 mr-2" />
                          Get Directions
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Map Display */}
          <div className="rounded-2xl overflow-hidden h-[600px] bg-gray-300">
            <Map locations={filteredLocations} />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-black">Can't Find Our Drinks Near You?</h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto mb-6">
            We're constantly expanding our availability. If you can't find our drinks locally,
            you can always order directly from our online store with shipping available nationwide.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button variant="yellow" size="lg" asChild>
              <Link to="/suggest">Suggest a Location</Link>
            </Button>
            <Button
              variant="outline"
              className="text-ducky-red border-ducky-red hover:bg-ducky-red/10"
              asChild
            >
              <Link to="https://duckydrinks.com/collections/all" target="_blank">
                Shop Online
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StoreLocator;
