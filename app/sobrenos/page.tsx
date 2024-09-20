'use client'
import { CardNews } from "@/components/CardNews";



export default function teste() {
    return (
      <div className="pb-10">
        <CardNews
        onClick={()=>console.log('ok')}
        titlenews="Título do material em até duas ou três linhas "
        news="Descrição rápida do material em até quatro linhas quebradas com reticências no final.Descrição rápida do material em até quatro linhas quebradas com reticências no final.Descrição rápida do material em até quatro linhas quebradas com reticências no final."
        />
      
      
       
         
      </div>
      
    );
  }