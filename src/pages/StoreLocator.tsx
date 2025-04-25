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

  const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

  useEffect(() => {
    fetch("https://api.airtable.com/v0/app8uQ8vVJMiI8gWb/Locations", {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_KEY}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("📦 Airtable Data:", data); // 👈 Add this
        const mapped = data.records.map((record) => {
          const f = record.fields ?? {};
        
          return {
            id: record.id,
            name: (f["name"] || f["name "] || "").trim(),
            address: (f["address"] || f[" address "] || "").trim(),
            city: (f["city"] || f[" city "] || "").trim(),
            state: (f["state"] || f[" state "] || "").trim(),
            zipCode: String(f["zipCode"] || f[" zipCode "] || ""),
            phone: (f["phone"] || f[" phone "] || "").trim(),
            hours: (f["hours"] || f[" hours "] || "").trim(),
            type: (f["type"] || f[" type "] || "").trim(),
            latitude: Number(f["latitude"] || f[" latitude "] || null),
            longitude: Number(f["longitude"] || f[" longitude "] || null)
          };
        });
        
        setLocations(mapped);
      })
      .catch((err) => console.error("❌ Airtable Fetch Error:", err));
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-black">Find Our Drinks</h1>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Rubber Ducky Drink Co. products are available at select retailers across the country.
            Enter your city or zip code to find the nearest location.
          </p>
        </div>

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

        <div className="flex justify-center gap-4 mb-12">
          {["All", "Retail", "Bar", "Restaurant", "Liquor Store"].map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "yellow" : "outline"}
              className="capitalize"
              onClick={() => setSelectedType(type)}
            >
              {type}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
             <h2 className="text-2xl font-bold mb-6 text-black">Store Locations</h2>

            {filteredLocations.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-black/70">No locations found. Try adjusting your search.</p>
              </div>
            ) : (
              <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">
                {filteredLocations.map((location) => (
                  <div key={location.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="font-bold text-lg mb-1 text-black">{location.name}</h3>
                    <p className="text-black/70 mb-2">{location.address}</p>
                    <p className="text-black/70 mb-2">
                      {location.city}, {location.state} {location.zipCode}
                    </p>
                    <p className="text-black/70 mb-2">{location.phone}</p>
                    <p className="text-sm text-black/60 mb-3">{location.hours}</p>
                    <Button variant="outline" className="text-ducky-red border-ducky-red hover:bg-ducky-red/10">
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-lg overflow-hidden h-[500px]">
            <Map locations={filteredLocations} />
          </div>
        </div>

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
            <Button variant="outline" className="text-ducky-red border-ducky-red hover:bg-ducky-red/10" asChild>
              <Link to="https://rubberduckydrinkco.com/products/classic-margarita" target="_blank">
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
