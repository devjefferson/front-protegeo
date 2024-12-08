'use server'
import { TCustomer } from "@/models/customer";

export type TSignIn = {
  email: string;
  password: string;
};

export default async function signIn({
  password,
  email,
}: TSignIn): Promise<{ token: string; ok: boolean, data: TCustomer } | undefined> {
  try {



  const data = await fetch(`${process.env.NEXTAUTH_URL}/api/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password,
      email,
    }),
  })

  
    const datas = await data.json()

    return{
      token: '1121321321231321321321321',
      data: datas.rows,
      ok: true
    }

   
  } catch (error) {
    return undefined;
  }
}



export  async function signUp({
  data
}: {
  data: any
}): Promise<{  ok: boolean, message: string} | undefined> {



  
    const datas = await fetch(`${process.env.NEXTAUTH_URL}/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        birthdate: data.birthdate.split('/').reverse().join('-'),
        acceptTermsPrivacyPolicy: 'true',
        acceptMediaConsent: 'true'
        
      }),
    })

    if(datas.status !== 200){
      return{
        message: 'Erro ao cadastrar, Email ou cpf ja cadastrado',
        ok: false
      }}

    return{
      message: 'Cadastro realizado com sucesso',
      ok: true
    }
 

   
 
}