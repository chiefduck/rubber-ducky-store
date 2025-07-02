import { useEffect, useState } from "react";
import Papa from "papaparse"; // ✅ New: PapaParse
import GoogleMap from "@/components/GoogleMap";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SuggestLocationButton from "@/components/buttons/SuggestLocationButton";

type Location = {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone?: string;
  hours?: string;
  type?: string;
  latitude: number | null;
  longitude: number | null;
};

const StoreLocator = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQrr85UW34Ge71wwYvg_tYIYmtVoELDjzg7JnH0-Dc0if27qLB2m2JE2xXGtlHq3T9H35XBinXvPmIg/pub?gid=0&single=true&output=csv")
      .then(res => res.text())
      .then(csvText => {
        const parsed = Papa.parse(csvText, { header: true });
        const mapped: Location[] = parsed.data.map((row: any, index: number) => {
          const lat = parseFloat(String(row.Latitude || "").trim());
          const lng = parseFloat(String(row.Longitude || "").trim());
          return {
            id: `${index}`,
            name: row["Store Name"]?.trim() || "Unknown",
            address: row.Address?.trim() || "",
            city: row.City?.trim() || "",
            state: row.State?.trim() || "",
            zipCode: String(row.Zip || ""),
            phone: row.Phone?.trim() || "",
            hours: row.Hours?.trim() || "",
            type: row.Type?.trim() || "",
            latitude: !isNaN(lat) ? lat : null,
            longitude: !isNaN(lng) ? lng : null,
          };
        });

        setLocations(mapped);
      })
      .catch(err => console.error("❌ CSV Fetch error:", err));
  }, []);

  // 👇 Everything else stays exactly the same...


  const filteredLocations = locations.filter((location) => {
    const matchesSearch =
      location.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.city?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.state?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.zipCode?.includes(searchTerm);

    return (
      matchesSearch &&
      location.latitude !== null &&
      location.longitude !== null &&
      !isNaN(location.latitude) &&
      !isNaN(location.longitude)
    );
  });

  return (
    <main className="min-h-screen bg-ducky-cream">
      <div className="container mx-auto py-12 px-4 md:px-8">
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

        {/* Suggest Location Button CTA */}
        <div className="text-center mb-12">
          <p className="text-lg text-black/70 mb-4">Don’t see your city or store listed?</p>
          <SuggestLocationButton />
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
                        {location.type && (
                          <span className="text-xs text-white bg-ducky-red rounded-full px-2 py-0.5">
                            {location.type}
                          </span>
                        )}
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
                      {location.address && location.city && location.state && (
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            `${location.address}, ${location.city}, ${location.state} ${location.zipCode}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            className="text-ducky-red border-ducky-red hover:bg-ducky-red/10 w-full mt-2"
                          >
                            <MapPin className="h-4 w-4 mr-2" />
                            Get Directions
                          </Button>
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
            <GoogleMap locations={filteredLocations} />
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
            <SuggestLocationButton />
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
      </div>
    </main>
  );
};

export default StoreLocator;
