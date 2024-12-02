'use client'
import { CardInfo } from "@/components/CardInfo";
import IconComponent from "@/components/Icon";
import MapboxExample from "@/components/Map";
import { TOccurrence } from "@/models/occorrencia";
import { servicesOccorrrence } from "@/services/Occorrence";

import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MapAndList({data}:{data: TOccurrence[]}){
  const {push} = useRouter()


  const [coord, setCoord] = useState<number[]>([-43.566333,-22.903654])

  const dataCoord = {
    
    "type": "FeatureCollection",
    "crs": {
    "type": "name",
    "properties": {
    "name": "urn:ogc:def:crs:OGC:1.3:CRS84"}},
    
  features: data?.map((item)=>({
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



const handleClickCountOccorrence = async (id: number, value: number, userId: number) => {
  
  await servicesOccorrrence(value, id, userId)


}

  return   (
  <section className="grid lg:grid-cols-3 gap-2  justify-between">
    <div className="flex relative w-full h-full col-span-2">

        {<MapboxExample coord={coord} dataCoord={dataCoord} />}
        </div>
      <div className="flex flex-col lg:overflow-y-scroll lg:overflow-x-hidden ">
      <div onClick={()=> push('/criar-ocorrencia')} className={classNames([
            'cursor-pointer',
            'flex',
            'shadow-md',
            'justify-center',
            'items-center',
            'w-full',
            'bg-white', 'p-3', 'py-5','gap-2'])}> 
            <IconComponent name="plus" color="black"  />
              <h3 className="text-black cursor-pointer text-center">Criar nova ocorrencia</h3>
            </div>
      { <div  className= "flex pt-4 flex-col mx-2 gap-4 h-[calc(100vh-138px)]   items-center ">
      

        {data.map((item)=>{
          return  <CardInfo key={item.id} description={item.description} street={item.street} cityOfState={item.title} onClick={async ()=> {
            await handleClickCountOccorrence(item.id, item.visit_count, item.user_id)
            setCoord([Number(item.lng),Number(item.lat)])
          }} />
  
        })}
      
      </div>}
      </div>
      </section>)
}