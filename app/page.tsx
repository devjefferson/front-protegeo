'use client'
import MapboxExample from "@/components/Map";
import { Button } from "@nextui-org/button";
import { useState } from "react";

export default function Home() {
  const [coord, setCoord] = useState<number[]>([-43.566333,-22.903654])
  const [list, setList] = useState(true)
  return (
    <section className=" flex justify-between">
  <div className="flex relative w-full h-full">
  <div className=" flex absolute top-2 right-2 z-10 ">
      <Button onClick={()=> setList((e)=> !e)}>{list ? "Listagem" : 'Map'}</Button>

      </div>
      <MapboxExample coord={coord} />
      </div>
    {!list && <div className=" flex flex-col mx-2 gap-4">
      <Button onClick={()=> setCoord([-43.566333,-22.903654])}>Default</Button>
      <Button onClick={()=> setCoord([-43.044827,-22.681616])}>NewCoord</Button>
      <Button onClick={()=> setCoord([-44.044827,-22.681616])}>NewCoord</Button>
      <Button onClick={()=> setCoord([-45.044827,-22.681616])}>NewCoord</Button>
      <Button onClick={()=> setCoord([-46.044827,-22.681616])}>NewCoord</Button>
      <Button onClick={()=> setCoord([-47.044827,-22.681616])}>NewCoord</Button>
      <Button onClick={()=> setCoord([-48.044827,-22.681616])}>NewCoord</Button>
      <Button onClick={()=> setCoord([-49.044827,-22.681616])}>NewCoord</Button>
    </div>}

    </section>
  );
}
