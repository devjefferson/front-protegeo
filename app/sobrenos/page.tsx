import { ScrollDefault } from "@/components/ScrollDefault";

export default function teste() {
    const data = [
   
  {
    "location": "Centro de São Paulo - Bacia do Anhangabaú",
    "details": "Áreas mais afetadas: Anhangabaú, Praça da Sé, Av. 23 de Maio Média de dias com enchentes por ano: 10 a 15 dias Volume de água durante enchentes: Pode superar 50 mm em 1 hora durante tempestades fortes Danos estimados (2019): R$ 400 milhões devido a perdas econômicas causadas por enchentes no centro da cidade",
    "text":"O centro de São Paulo, principalmente nas áreas próximas ao Vale do Anhangabaú e à Avenida 23 de Maio, é vulnerável a enchentes durante o verão devido à sua baixa altitude e à urbanização intensa. Destaques: Inundações rápidas durante tempestades fortes Prejudica o trânsito em uma das principais vias da cidade Risco elevado de alagamentos em áreas comerciais",
    "date": "2024-09-20",
    "summary": "Resumo do artigo 1",
    "content": "Conteúdo completo do artigo 1"
  }
]
return(
    <>
        {data.map((item)=>(
            <ScrollDefault
                location={item.location}
                details={item.details}
                text={item.text}
                key={item.content}
                onClick={()=>console.log('ok')}
        />
        ))}
        </>
);
}
