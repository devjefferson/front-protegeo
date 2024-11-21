'use serve'
import { Api } from "@/services/axios";
import MapAndList from "./_features/MapAndList";
import { createClient } from '@vercel/postgres';

export default async function Page(){


 
async function queryPosts() {
  const client = createClient();
  await client.connect();
 
  try {
    const { rows } =
      await client.sql`SELECT * FROM ocorrencias;`;
      return rows
  } finally {
    await client.end();
  }
}

  const rows = await queryPosts();
  return(
         <MapAndList data={rows as any} />
      
    )
}