'use client'

import { format } from "date-fns"

export const List = ({data}:{data: any[]})=>{
  return(
   <div className=" container py-8">
     <div className="grid grid-cols-1 gap-2 mb-4">
      <h1>Logs</h1>
      <div className="flex justify-between gap-6">
      <p>ID</p>
        <div className="flex flex-1">
        <h2>Email</h2>
        </div>
        <div className="flex flex-1">
        <p>Tipo</p>
        </div>
        <div className="flex flex-1">
        <p>Data</p>
       </div>
      </div>
    </div>
  
     <div className="grid grid-cols-1 gap-2">{
    data.map((item: any)=> (<div className="bg-white text-black p-5">
      <div className="flex justify-between gap-6">
      <p>{item.log_id}</p>
        <div className="flex flex-1">
        <h2>{item.email}</h2>
        </div>
        <div className="flex flex-1">
        <p>{item.event_type}</p>
        </div>
        <div className="flex flex-1">
        <p>{format(item.event_date, 'dd/MM/yyyy')} - {format(item.event_date, 'HH:mm:ss')}</p>
       </div>
      </div>
    </div>))}</div>
    </div>
   
  )
}