'use server'
import { revalidateTag } from "next/cache"

export const servicesOccorrrence =  async (value: number, id: number, userId:number)=>{
  await fetch(`${process.env.NEXTAUTH_URL}/api/occurrence-update`, {
    method: 'POST',
    body: JSON.stringify({
      visit_count: value + 1,
      id,
      user_id: userId
    }),
    
    
  })
  revalidateTag("occurrenceFetchGetAllUser")
  revalidateTag("occurrenceFetchGetAll")
}
export const servicesOccorrrenceGetAllUser =  async (userId:number)=>{
  const data = await fetch(`${process.env.NEXTAUTH_URL}/api/occurrence-all-user`, {
   method: 'POST',
   body: JSON.stringify(
    {
      user_id: userId
    }
   ),
   next: {
     tags: ['occurrenceFetchGetAllUser'],
   },
   
 })

 const dados = await data.json()


  return dados.rows
}

export const servicesOccorrrenceGetAll =  async ()=>{
   const data = await fetch(`${process.env.NEXTAUTH_URL}/api/list-occurrence`, {
    method: 'POST',
    next: {
      tags: ['occurrenceFetchGetAll'],
    },
    
  })

 
  
   return  await data.json()
}

export const servicesCreatedOcorrence = async (data: any)=>{
  await fetch(`${process.env.NEXTAUTH_URL}/api/created-occurrence`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
     data
    ),
   
  })
  revalidateTag("occurrenceFetchGetAllUser")
  revalidateTag("occurrenceFetchGetAll")
}

export const servicesOcorrenceDelete = async (id: number, userId: number)=>{
  await fetch(`${process.env.NEXTAUTH_URL}/api/occurrence-delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
     {
      id,
      user_id: userId
     }
    ),
   
  })
  revalidateTag("occurrenceFetchGetAllUser")
  revalidateTag("occurrenceFetchGetAll")
}

// next: {
//   revalidate: 600,
//   tags: ['brandFetchPaginated'],
// },