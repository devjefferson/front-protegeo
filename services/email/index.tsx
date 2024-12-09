'use server'
export const servicesSendEmail =  async ({name, email, message}:{name: string, email: string, message: string})=>{
  const data = await fetch(`${process.env.NEXTAUTH_URL}/api/send-email`, {
   method: 'POST',
   body: JSON.stringify(
    {
      name, 
      email, 
      message
    }
   ),
 
   
 })
 const dados = await data.json()


  return dados
}