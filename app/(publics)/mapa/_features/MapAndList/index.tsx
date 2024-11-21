'use client'
import { CardInfo } from "@/components/CardInfo";
import { Body } from "@/components/core/Typograph/Body";
import MapboxExample from "@/components/Map";
import { dataCoord } from "@/components/Map/coord";
import { TOccurrence } from "@/models/occorrencia";
import { Button } from "@nextui-org/button";
import { useState } from "react";

export default function MapAndList({data}:{data: TOccurrence[]}){
  const [list, setList] = useState(true)


  const [coord, setCoord] = useState<number[]>([-43.566333,-22.903654])

  return   (
  <section className="flex justify-between">
    <div className="flex relative w-full h-full">
    <div className="flex absolute top-2 right-2 z-10 ">
        <Button onClick={()=> setList((e)=> !e)}>{list ? 'Listagem' : 'Mapa'}</Button>
  
        </div>
        {<MapboxExample coord={coord} />}
        </div>
      {!list && <div  className= "flex flex-col mx-2 gap-4 h-[calc(100vh-64px)] w-[700px] overflow-y-scroll overflow-x-hidden  items-center ">
        {data.map((item)=>{

          return  <CardInfo description={item.description} street={item.street} cityOfState={item.title} key={item.id} onClick={()=> setCoord([Number(item.lng),Number(item.lat)])} />
  
        })}
      
      </div>}
      </section>)
}