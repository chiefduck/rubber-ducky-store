import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-95.7129, 37.0902],
      zoom: 3
    });

    map.on("load", () => {
      map.addSource("stores", {
        type: "vector",
        url: "mapbox://rubberduckydrinkco.ctkypivd"
      });

      map.addLayer({
        id: "store-pins",
        type: "circle",
        source: "stores",
        "source-layer": "749ca6-4b-0cmxtl",
        paint: {
          "circle-radius": 6,
          "circle-color": "#D74A39"
        }
      });
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} className="w-full h-full rounded-lg" />;
};

export default Map;
