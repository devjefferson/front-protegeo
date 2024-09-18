import { Metadata } from 'next'

import { LoginForm } from './__features/LoginForm'
import { title } from '@/components/primitives'
import { Logo } from '@/components/icons'
import getCurrentUser from '@/services/auth/customer/getCurrentUser'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Entrar',
}


export default async function Page() {

  if(await getCurrentUser()){
    return redirect('/perfil')
  }
  return (
    <div className="mx-auto px-4 py-10 md:py-32 relative w-full flex flex-col justify-center items-center">
      
   <div className='w-96'>
   <div className='flex gap-2 mb-6 justify-center'>
     <Logo />
      <h1 className={title({
       size: 'sm',
      })}>ProteGeo</h1>
     </div>

      <LoginForm  />
   </div>
  
    </div>
  )
}
