'use server'
import MapAndList from "./_features/MapAndList";

export default async function Page(){

  const data = await fetch('https://front-protegeo.vercel.app/api/list-occurrence')

  const rows = (await data.json()).rows

  return(
         <MapAndList data={rows} />
      
    )
}