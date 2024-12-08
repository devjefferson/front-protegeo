"use client";

import { AnalitcsCards } from "@/components/AnalitcsCards";
import { CardInfo } from "./CardInfo";
import { useEffect, useState } from "react";
import { servicesOcorrenceDelete } from "@/services/Occorrence";

export default function Perfil({ data, rows }: any) {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    rows.map((item: any)=>{
      setCount(counts=> counts + item.visit_count)
    })
  },[])

  const handleDelete = async (id: number, userId: number) => {

    await servicesOcorrenceDelete(id, userId, data.email)

  }

  return (
    <main className="flex min-h-screen flex-col pt-5  px-4">
        <div className="h-48 container  lg:h-auto ">
          
        <h1 className="text-2xl font-bold mb-6">Seja bem vindo <br/> {data.name} {data.surname}!</h1>
          
      <AnalitcsCards data={{
        visit: count,
        qtdLink: rows.length,
      }} />
          

          <h1 className="text-2xl font-bold mb-6 pt-5">Lista de ocorrências</h1>

          {/* Charts Section */}
          <div className="mt-8 flex flex-col gap-2" >
          {rows.map((item: any)=>{return  <CardInfo date={item.hour} key={item.id} description={item.description} street={item.street} cityOfState={item.title} onClick={()=> {
            handleDelete(item.id, item.user_id)
          }}/>})}
          </div>
  
        </div>
    </main>
  );
}
