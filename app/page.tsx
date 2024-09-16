'use client'
import  AccordionFaq  from "@/components/AccordionFaq";
import { CardInfo } from "@/components/CardInfo";
import FeatureSection from "@/components/FeatureSection";
import MapboxExample from "@/components/Map";
import { dataCoord } from "@/components/Map/coord";
import Slider from "@/components/Slider";
import { Body } from "@/components/core/Typograph/Body";
import { Button } from "@nextui-org/button";
import { useState } from "react";

const features = [
  {
    title: 'Alertas de enchentes',
    description: 'Receba alertas em tempo real sobre áreas afetadas por enchentes próximas a você.',
    iconColor: 'blue',
    iconPath: 'M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z'
  },
  {
    title: 'Notificações de incêndios',
    description: 'Saiba quando incêndios florestais estão ameaçando a sua região.',
    iconColor: 'red',
    iconPath: 'M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z'
  },
  {
    title: 'Monitoramento de alagamentos',
    description: 'Receba alertas e monitore o nível dos rios e chuvas que podem causar alagamentos.',
    iconColor: 'yellow',
    iconPath: 'M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z'
  }
];
export default function Mapa() {
  const [coord, setCoord] = useState<number[]>([-43.566333,-22.903654])
  const [list, setList] = useState(true)
  return (
<div className="relative">
<div className='absolute top-10 right-1/2 z-10 text-red-500'>
</div>

<section className="flex justify-between">
  <div className="flex relative w-full h-full">
  <div className="flex absolute top-2 right-2 z-10 ">
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
    <FeatureSection
      title="Segurança em tempo real"
      description="Mantenha-se seguro com alertas precisos de desastres naturais"
      features={features}
      imageUrl="/istockphoto-1333043586-612x612.jpg"
    />
    <Slider slides={[
  {
    category: "Alagamento",
    title: "Alagamento em Área Urbana",
    description: "Alerta de alagamento na região central devido a chuvas intensas. Evite transitar pelas principais avenidas.",
    image: "https://images.unsplash.com/photo-1544144433-d50aff500b91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    link: "#",
    buttonText: "Saiba mais",
  },
  {
    category: "Enchente",
    title: "Enchente Próxima ao Rio",
    description: "Níveis do rio subiram acima do limite de segurança. Moradores próximos devem buscar abrigo.",
    image: "https://images.unsplash.com/photo-1544144433-d50aff500b91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    link: "#",
    buttonText: "Informações de evacuação",
  },
  {
    category: "Enchente",
    title: "Alerta de Inundação",
    description: "Possibilidade de inundações em áreas baixas devido ao aumento do nível do rio. Fique atento aos avisos das autoridades.",
    image: "https://images.unsplash.com/photo-1544144433-d50aff500b91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    link: "#",
    buttonText: "Detalhes",
  },
  {
    category: "Alagamento",
    title: "Alagamento em Estrada",
    description: "Estrada bloqueada por alagamento. Desvie sua rota para garantir segurança.",
    image: "https://images.unsplash.com/photo-1544144433-d50aff500b91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    link: "#",
    buttonText: "Rotas alternativas",
  },
  {
    category: "Enchente",
    title: "Enchente em Zona Rural",
    description: "Áreas rurais próximas ao rio enfrentam enchentes. Agricultores devem tomar precauções.",
    image: "https://images.unsplash.com/photo-1544144433-d50aff500b91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    link: "#",
    buttonText: "Ações recomendadas",
  },
]} />

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
