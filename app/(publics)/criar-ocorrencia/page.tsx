'use client'
import { useRef, useEffect, useState } from "react";
import {Geocoder} from "@mapbox/search-js-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapGeoCoder from "@/components/MapGeoCoder";
import { FormOccurrence } from "./_feature/form";

const accessToken = "pk.eyJ1IjoibmRpZXN1cGVyIiwiYSI6ImNsbDN1bnpxZzAwMmQzcm53YjA5dW1xM24ifQ.R5njF3uIvhR9L7a-FtTVMg";

export default function Page() {


  return (

     <FormOccurrence />
  
  );
}