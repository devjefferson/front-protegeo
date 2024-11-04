'use client'
import { useRef, useEffect, useState } from "react";
import { Geocoder } from "@mapbox/search-js-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const accessToken = "pk.eyJ1IjoibmRpZXN1cGVyIiwiYSI6ImNsbDN1bnpxZzAwMmQzcm53YjA5dW1xM24ifQ.R5njF3uIvhR9L7a-FtTVMg";

export default function MapWithGeocoder() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (mapContainerRef.current) {
      mapboxgl.accessToken = accessToken;

      mapInstanceRef.current = new mapboxgl.Map({
        container: mapContainerRef.current, // container ID
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
      });

      mapInstanceRef.current.on("load", () => {
        setMapLoaded(true);
      });
    }
  }, []);

  return (
    <>
      <Geocoder
        accessToken={accessToken}
        map={mapInstanceRef.current as any}
        mapboxgl={mapboxgl}
        value={inputValue}
        onChange={(d) => {
          setInputValue(d);
        }}
        marker
      />
      <div id="map-container" ref={mapContainerRef} style={{ height: '100vh' }} />
    </>
  );
}