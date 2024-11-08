'use client'
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const MapGeoCoder = ({
  onChanger
}:{onChanger: (e: any)=> void}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibmRpZXN1cGVyIiwiYSI6ImNsbDN1bnpxZzAwMmQzcm53YjA5dW1xM24ifQ.R5njF3uIvhR9L7a-FtTVMg';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-79.4512, 43.6568],
      zoom: 13
    });

    mapRef.current.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl as any,
        getItemValue: (item) => {
          onChanger(item)
          
          return item.place_name
        },
        
        
      })
    )

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

 

  return <div ref={mapContainerRef} style={{ height: 'calc(100vh - 64px)', width: '100%' }} />;
};

export default MapGeoCoder;