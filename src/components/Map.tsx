import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

interface Location {
  id: string;
  name: string;
  latitude: number | null;
  longitude: number | null;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

const Map = ({ locations = [] }: { locations: Location[] }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || locations.length === 0) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-105.0, 39.7],
      zoom: 7,
    });

    mapRef.current = map;
    map.addControl(new mapboxgl.NavigationControl());

    const validLocations = locations.filter(
      (loc) =>
        loc.latitude !== null &&
        loc.longitude !== null &&
        !isNaN(loc.latitude) &&
        !isNaN(loc.longitude)
    );

    if (validLocations.length > 0) {
      const bounds = new mapboxgl.LngLatBounds();

      validLocations.forEach((loc) => {
        bounds.extend([loc.longitude!, loc.latitude!]);
      });

      map.fitBounds(bounds, { padding: 50, maxZoom: 12 });

      validLocations.forEach((location) => {
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <strong>${location.name}</strong><br/>
          ${location.address}<br/>
          ${location.city}, ${location.state} ${location.zipCode}
        `);

        new mapboxgl.Marker({ color: "#D74A39" })
          .setLngLat([location.longitude!, location.latitude!])
          .setPopup(popup)
          .addTo(map);
      });
    }

    return () => map.remove();
  }, [locations]);

  return <div ref={mapContainerRef} className="w-full h-full rounded-lg" />;
};

export default Map;
