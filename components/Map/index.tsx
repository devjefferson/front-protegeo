'use client'
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapboxExample = ({coord, dataCoord}: {coord: number[], dataCoord:any}) => {
  const mapContainerRef = useRef() as any
  const mapRef  = useRef() as any

  
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibmRpZXN1cGVyIiwiYSI6ImNsbDN1bnpxZzAwMmQzcm53YjA5dW1xM24ifQ.R5njF3uIvhR9L7a-FtTVMg';

    mapRef.current  = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: coord as any ,
      zoom: 10
    }) as any

    mapRef.current.on('load', () => {
      mapRef.current.addSource('earthquakes', {
        type: 'geojson',
        data: dataCoord,
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50
      }) 

      mapRef.current.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'earthquakes',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#51bbd6',
            100,
            '#f1f075',
            750,
            '#f28cb1'
          ],
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            20,
            100,
            30,
            750,
            40
          ]
        }
      });

      mapRef?.current?.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'earthquakes',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': ['get', 'point_count_abbreviated'],
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 14
        }
      });

      mapRef.current.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'earthquakes',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': '#11b4da',
          'circle-radius': 4,

          'circle-stroke-width': 2,
          'circle-stroke-color': '#fff'
        }
      });

      // inspect a cluster on click
      mapRef.current.on('click', 'clusters', (e: any) => {
        const features = mapRef.current.queryRenderedFeatures(e.point, {
          layers: ['clusters']
        });
        const clusterId = features[0].properties.cluster_id;
        mapRef.current
          .getSource('earthquakes')
          .getClusterExpansionZoom(clusterId, (err: string, zoom: number) => {
            if (err) return;

            mapRef.current.easeTo({
              center: features[0].geometry.coordinates,
              zoom: zoom
            });
          });
      });

      mapRef.current.on('click', 'unclustered-point', (e: any) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const titulo = e.features[0].properties.titulo;
        const descricao = e.features[0].properties.descricao


        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(` 
            <div class="p-4">
                <h5 class="mb-2 text-slate-800 text-xl font-semibold">
                    ${titulo}
                </h5>
                <p class="text-slate-600 leading-normal font-normal">
                  ${descricao}
                </p>
            </div>
       `)
          .addTo(mapRef.current);
      });

      mapRef.current.on('mouseenter', 'clusters', () => {
        mapRef.current.getCanvas().style.cursor = 'pointer';
      });
      mapRef.current.on('mouseleave', 'clusters', () => {
        mapRef.current.getCanvas().style.cursor = '';
      });
    });

    return () => mapRef.current.remove();
  }, []);

  

  useEffect(()=>{
    mapRef.current.easeTo({
      center: coord,
      zoom: 13
    });
  },[coord])

  return <div id="map" ref={mapContainerRef as any} style={{ height: `calc(100vh - 64px)` , width: '99.8%' }}></div>;
};

export default MapboxExample;