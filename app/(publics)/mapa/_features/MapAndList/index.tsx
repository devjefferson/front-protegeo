'use client'
import { CardInfo } from "@/components/CardInfo";
import { Body } from "@/components/core/Typograph/Body";
import { Heading } from "@/components/core/Typograph/Heading";
import IconComponent from "@/components/Icon";
import MapboxExample from "@/components/Map";
import { dataCoord } from "@/components/Map/coord";
import { TOccurrence } from "@/models/occorrencia";
import { Button } from "@nextui-org/button";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MapAndList({data}:{data: TOccurrence[]}){
  const [list, setList] = useState(true)
  const {push} = useRouter()


  const [coord, setCoord] = useState<number[]>([-43.566333,-22.903654])

  const dataCoord = {
    
    "type": "FeatureCollection",
    "crs": {
    "type": "name",
    "properties": {
    "name": "urn:ogc:def:crs:OGC:1.3:CRS84"}},
    
  features: data.map((item)=>({
    "type": "Feature",
    "properties": {
      "id": item.id,
      "titulo": item.title,
      "endereco": item.street,
      "descricao": item.description,

    },
    "geometry": {
      "type": "Point",
      "coordinates": [Number(item.lng), Number(item.lat), 0]
    }
  }))
 
}

  return   (
  <section className="flex justify-between">
    <div className="flex relative w-full h-full">
    <div className="flex absolute top-2 right-2 z-10 ">
        <Button onClick={()=> setList((e)=> !e)}>{list ? 'Listagem' : 'Mapa'}</Button>
  
        </div>
        {<MapboxExample coord={coord} dataCoord={dataCoord} />}
        </div>
      {!list && <div  className= "flex flex-col mx-2 gap-4 h-[calc(100vh-64px)] w-[700px] overflow-y-scroll overflow-x-hidden  items-center ">
        <div onClick={()=> push('/criar-ocorrencia')} className={classNames([
            'cursor-pointer',
            'flex',
            'shadow-md',
            'justify-center',
            'items-center',
            
            'bg-white', 'p-3', 'py-5', 'lg:w-[431px]','gap-2'])}> 
            <IconComponent name="plus" color="black"  />
              <h3 className="text-black cursor-pointer text-center">Criar nova ocorrencia</h3>
            </div>

        {data.map((item)=>{

          return  <CardInfo description={item.description} street={item.street} cityOfState={item.title} key={item.id} onClick={()=> setCoord([Number(item.lng),Number(item.lat)])} />
  
        })}
      
      </div>}
      </section>)
}