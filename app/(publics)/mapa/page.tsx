'use server'
import MapAndList from "./_features/MapAndList";
import { servicesOccorrrenceGetAll } from "@/services/Occorrence";

export default async function Page(){

  const rows = await servicesOccorrrenceGetAll()


  return(
         <MapAndList data={rows.rows.rows as any} />
        
      
    )
}