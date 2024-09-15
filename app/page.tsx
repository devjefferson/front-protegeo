'use client'
import  AccordionFaq  from "@/components/AccordionFaq";
import { CardInfo } from "@/components/CardInfo";
import MapboxExample from "@/components/Map";
import { dataCoord } from "@/components/Map/coord";
import { Body } from "@/components/core/Typograph/Body";
import { Button } from "@nextui-org/button";
import { useState } from "react";

export default function Mapa() {
  const [coord, setCoord] = useState<number[]>([-43.566333,-22.903654])
  const [list, setList] = useState(true)
  return (
<div className="relative">
<div className='absolute top-10 right-1/2 z-10 text-red-500'>
</div>

<section className=" flex justify-between">
  <div className="flex relative w-full h-full">
  <div className=" flex absolute top-2 right-2 z-10 ">
      <Button onClick={()=> setList((e)=> !e)}>{list ? <Body size="small">Listagem</Body> : 'Mapa'}</Button>

      </div>
      {<MapboxExample coord={coord} />}
      </div>
    {!list && <div  className= "flex flex-col mx-2 gap-4 h-[700px] w-[700px] overflow-y-scroll overflow-x-hidden  items-center ">
      {dataCoord.features.map((item)=>{

        return  <CardInfo description={item.properties.descricao} street={item.properties.endereco} cityOfState={item.properties.titulo} key={item.properties.id} onClick={()=> setCoord(item.geometry.coordinates)} />

      })}
    
    </div>}
    </section>

    <AccordionFaq questions={[
  {
    question: "Quais são as vantagens de usar nosso app para mapear desastres naturais, alagamentos e enchentes?",
    answer:
      "Nosso app oferece alertas em tempo real e um mapa detalhado das áreas afetadas, ajudando as comunidades e autoridades a responderem rapidamente a desastres como alagamentos. Ele melhora a coordenação na resposta emergencial e otimiza a distribuição de recursos."
  },
  {
    question: "Como o app pode ajudar na prevenção de desastres naturais?",
    answer:
      "O app permite monitoramento contínuo de áreas de risco, oferecendo previsões de desastres baseadas em dados climáticos e geográficos. Com essas informações, as autoridades e cidadãos podem agir preventivamente, reduzindo os danos causados por alagamentos e enchentes."
  },
  {
    question: "Posso relatar um alagamento em tempo real usando o app?",
    answer:
      "Sim! Nosso app permite que os usuários enviem relatos instantâneos de alagamentos e enchentes, com fotos e descrições. Isso ajuda a criar um mapa atualizado e dinâmico das áreas afetadas, facilitando ações emergenciais."
  },
  {
    question: "Como o app auxilia na segurança das comunidades em áreas de risco?",
    answer:
      "O app fornece alertas antecipados de alagamentos e desastres naturais, permitindo que as comunidades sejam notificadas a tempo de evacuar ou tomar medidas preventivas. Além disso, o mapeamento contínuo ajuda a planejar rotas seguras e evitar áreas de risco."
  },
  {
    question: "O app funciona em regiões com pouca conectividade?",
    answer:
      "Sim, nosso app foi projetado para funcionar mesmo em áreas com pouca conectividade. Ele salva os dados localmente e os envia assim que a conexão é restabelecida, garantindo que informações importantes sobre alagamentos e enchentes sejam registradas e compartilhadas."
  }
]} />

</div>




  );
}
