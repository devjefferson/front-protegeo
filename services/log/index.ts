'use server'

import { revalidateTag } from "next/cache"

export default async function eventLogs({
  user_id, email, event_type

}:{
  user_id: number,
  event_type: string
  email: string
}){ 
  try {
  const data = await fetch(`${process.env.NEXTAUTH_URL}/api/log`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id, email, event_type

    }),
  })

  
    const datas = await data.json()
    revalidateTag("logList")

    

    return{
      data: datas.rows,
      ok: true
    }

   
  } catch (error) {
    return undefined;
  }
}

export const servicesGetAllLogs =  async ()=>{
  const data = await fetch(`${process.env.NEXTAUTH_URL}/api/log-list`, {
   method: 'POST',
   body: JSON.stringify(
  ''
   ),
   next: {
     tags: ['logList'],
   },
   
 })
 const dados = await data.json()


  return dados.rows
}