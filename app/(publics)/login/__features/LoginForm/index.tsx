'use client'
import { type ClassValue, clsx } from 'clsx'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'


import { UserLoginSchema } from './schema'
import useMessage from '@/hooks/useMessage'
import { Input } from '@/components/Input'
import { Button } from '@nextui-org/button'
import { getSession, signIn } from 'next-auth/react'
import { servicesSendEmail } from '@/services/email'
import { useState } from 'react'
import {

  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { set } from 'date-fns'

export const LoginForm = () => {
  const { success, error } = useMessage()
  const [code, setCode] = useState()
  const [codeIsTrue, setCodeIsTrue] = useState()

  const [open, setOpen] = useState(false)
  const router = useRouter()
  const form = useForm<any>({
    resolver: zodResolver(UserLoginSchema),
  })

  const handleSubmit: SubmitHandler<any> = async (data) => {

  
    await handleSendEmail(data)
    setOpen(true)


   
    
  }

  const handleSendEmail = async (data: any) => {
     
        const sendData = await servicesSendEmail({
          email: 'drpcscan@gmail.com',
          message: 'Olá, tudo bem?',
          name: 'Daniel'
        })

        setCodeIsTrue(sendData.code)
       

        success('Foi enviado um Código para seu email!')
      
    
  }

 const handleVerifyCode = async () => {
  if(codeIsTrue === Number(code) ){
         const response = await signIn('credentials', {
            ...form.watch(),
            redirect: false,
          })
          if (response?.ok) {
            success('Login realizado com sucesso!')
            window.location.href = '/perfil'
          } else {
            error('Email ou senha errado!')
          }
          return
        }

        error('Código errado!')
  
 }

  return (
    <form
      className={clsx(['flex', 'flex-col', 'gap-8', 'max-w-96'])}
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <div className="md:flex gap-8 flex-col">
        <div className="flex-1">
          <Controller
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <Input
              helpText={fieldState.error?.message}
              label='Login'
                {...field}
                placeholder="seu@email.com"
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <Controller
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <Input
                label='Senha'
                {...field}
                helpText={fieldState.error?.message}
                type="password"
                placeholder="Senha forte"
              />
            )}
          />

        </div>
      </div>
      <div className="flex  justify-between gap-8">
      <Button
          disabled={form.formState.isSubmitting}
          isLoading={form.formState.isSubmitting}
            className='rounded-md w-full'
          type="submit"
       
        >
          Entrar
        </Button>
        <Button
          className='rounded-md w-full'
          type="button"
            onClick={()=> router.push('/cadastro')}
          
        >
          Me cadastrar
        </Button>
  
      </div>
      <Modal
      isOpen={open}
      onOpenChange={() => setOpen(false)}
      className="mx-2 flex "
    > 
      <ModalContent className="h-auto ">
      <ModalHeader className="flex flex-col">
          Digite seu código de acesso!
        </ModalHeader>
        <ModalBody className="flex flex-col justify-center items-center h-auto ">
          <Input label='Código' onChange={(e)=> setCode(e.target.value)} />
          <Button onClick={handleVerifyCode}>
            Verificar
          </Button>
        </ModalBody>
      </ModalContent>
      </Modal>
    </form>
  )
}
