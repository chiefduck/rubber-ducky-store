import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

interface Location {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

const Map = ({ locations = [] }: { locations: Location[] }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || !locations.length) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-95.7129, 37.0902], // Center on USA
      zoom: 3
    });

    mapRef.current = map;

    // Add zoom + rotation controls
    map.addControl(new mapboxgl.NavigationControl());

    locations.forEach((location) => {
      if (!location.latitude || !location.longitude) return;

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <strong>${location.name}</strong><br/>
        ${location.address}<br/>
        ${location.city}, ${location.state} ${location.zipCode}
      `);

      new mapboxgl.Marker({ color: "#D74A39" })
        .setLngLat([location.longitude, location.latitude])
        .setPopup(popup)
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [locations]);

  return <div ref={mapContainerRef} className="w-full h-full rounded-lg" />;
};

export default Map;

