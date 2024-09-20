'use client'
import { CardNews } from "@/components/CardNews";



export default function teste() {
    return (
      <div className="flex gap-3 justify-evenly ">
       
        {[
  {
    "title": "titlenews1",
    "new": "1",
    "date": "2024-09-20",
    "summary": "Resumo do artigo 1",
    "content": "Conteúdo completo do artigo 1"
  },
  {
    "title": "titlenews2",
    "new": "0",
    "date": "2024-09-18",
    "summary": "Resumo do artigo 2",
    "content": "Conteúdo completo do artigo 2"
  }
]
.map((item)=><CardNews
        onClick={()=>console.log('ok')}
        titlenews={item.title}
        news={item.content}
        key={item.title}
        />
      )}
      
       
         
      </div>
      
    );
  }