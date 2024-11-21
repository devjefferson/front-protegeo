'use server'
import { Api } from "@/services/axios";
import MapAndList from "./_features/MapAndList";

export default async function Page(){
  const data = await Api('/api/list-occurrence')
  const rows = data.data.rows
  return(
         <MapAndList data={rows} />
      
    )
}