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



  const data = await fetch(`https://front-protegeo.vercel.app/api/signin`, {
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
