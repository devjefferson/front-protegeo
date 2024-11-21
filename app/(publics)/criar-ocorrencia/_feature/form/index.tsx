'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { Input, Textarea } from "@nextui-org/react"
import { Controller, useForm } from "react-hook-form"
import { SchemaFormOccurence } from "./schema"
import MapGeoCoder from "@/components/MapGeoCoder"
import { Button } from "@nextui-org/button"
import useMessage from "@/hooks/useMessage"
import { TCustomer } from "@/models/customer"

export const FormOccurrence = ({user}:{user: TCustomer}) => {
  const {success} = useMessage()

  const form = useForm<any>({
    resolver: zodResolver(SchemaFormOccurence),
    defaultValues: {
      hour: new Date().toISOString().slice(0, 16),
      
    },
  })

  

  const handleSubmit = async (data: any) => {
    await fetch('/api/created-occurrence', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          ...data,
          user_id: user.id,
          visit_count: 0,
          likes: 0
          
        }
        
      ),
    })

    success("cadastrado realizado com sucesso.")
  }

  console.log(form.formState.errors)
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col justify-center">

      <div className="grid lg:grid-cols-2 grid-cols-1  gap-4">
        <div className="flex w-full h-[350px] lg:h-[calc(100vh-64px)]">
          <MapGeoCoder
            onChanger={(e) => {
              form.setValue('street', e.place_name);
              form.setValue('lng', e.center[0]);
              form.setValue('lat', e.center[1]);
           
            }}
          />
        </div>
        <div className="w-full flex flex-col gap-4 py-16 px-4">
        <h1 className="text-white font-bold text-2xl text-center">Formulário de ocorrência</h1>
          <Controller
            name="street"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input {...field} label="Endereço" readOnly />
            )}
          />
          <div className="flex gap-4">
            <Controller
              name="lng"
              control={form.control}
              render={({ field, fieldState }) => (
                <Input {...field} label="Longitude" readOnly />
              )}
            />
            <Controller
              name="lat"
              control={form.control}
              render={({ field, fieldState }) => (
                <Input {...field} label="Latitude" readOnly />
              )}
            />
          </div>
          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input {...field} label="Titulo" />
            )}
          />
          <Controller
            name="description"
            control={form.control}
            render={({ field, fieldState }) => (
              <Textarea {...field} label="Descrição" />
            )}
          />
          <Controller
            name="hour"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                type="datetime-local"
                label="Horário da ocorrência"
              />
            )}
          />
          <Button type="submit">Enviar</Button>
        </div>
      </div>
    </form>
  );
}