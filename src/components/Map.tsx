import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const Map = ({ locations }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-104.991531, 39.742043], // Default: Denver
      zoom: 4,
    });

    locations.forEach((loc) => {
      new mapboxgl.Marker()
        .setLngLat([loc.longitude, loc.latitude])
        .setPopup(new mapboxgl.Popup().setHTML(`<strong>${loc.name}</strong><br/>${loc.city}, ${loc.state}`))
        .addTo(map);
    });

    return () => map.remove();
  }, [locations]);

  return <div ref={mapContainer} className="w-full h-full rounded-lg" />;
};

export default Map;
