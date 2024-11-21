import MapAndList from "./_features/MapAndList";

export default async function Page(){

  const data = await fetch('/api/list-occurrence')

  const rows = (await data.json()).rows

  return(
         <MapAndList data={rows} />
      
    )
}