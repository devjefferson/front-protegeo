'use client'
import { CardInfo } from "@/components/CardInfo";
import MapboxExample from "@/components/Map";
import { dataCoord } from "@/components/Map/coord";
import { Body } from "@/components/core/Typograph/Body";
import { Button } from "@nextui-org/button";
import { useState } from "react";

export default function Mapa() {
  const [coord, setCoord] = useState<number[]>([-43.566333,-22.903654])
  const [list, setList] = useState(true)
  return (
<div className="relative">
<div className='absolute top-10 right-1/2 z-10 text-red-500'>
</div>

<section className=" flex justify-between">
  <div className="flex relative w-full h-full">
  <div className=" flex absolute top-2 right-2 z-10 ">
      <Button onClick={()=> setList((e)=> !e)}>{list ? <Body size="small">Listagem</Body> : 'Mapa'}</Button>

      </div>
      {<MapboxExample coord={coord} />}
      </div>
    {!list && <div  className= "flex flex-col mx-2 gap-4 h-[700px] w-[700px] overflow-y-scroll overflow-x-hidden  items-center ">
      {dataCoord.features.map((item)=>{

        return  <CardInfo description={item.properties.descricao} street={item.properties.endereco} cityOfState={item.properties.titulo} key={item.properties.id} onClick={()=> setCoord(item.geometry.coordinates)} />

      })}
    
    </div>}
      
    </section>

    

</div>




  );
}
