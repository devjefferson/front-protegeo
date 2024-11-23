'use server'
import MapAndList from "./_features/MapAndList";
import { createClient } from '@vercel/postgres';
import { servicesOccorrrenceGetAll } from "@/services/Occorrence";

export default async function Page(){

  const rows = await servicesOccorrrenceGetAll()
  console.log(rows)

  return(
         <MapAndList data={rows.rows as any} />
        
      
    )
}