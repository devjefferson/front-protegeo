'use client';

import { CardContent } from "@/components/CardContent";

export default function Teste() {
    const articles = [
        {
            "titlecontent": "Título do conteúdo",
            "content": "Chamada para participação da campanha. Ideal que tenha apenas 2 ou 3 frases curtas, diretas e atrativas.Chamada para participação da campanha. Ideal que tenha apenas 2 ou 3 frases curtas, diretas e atrativas.",
            "date": "2024-09-20",
            "summary": "Resumo do artigo 1",
        }
    ];

    return (
        <>
            {articles.map((item) => (
                <CardContent
                    onClick={() => console.log('ok')}
                    titlecontent={item.titlecontent}
                    content={item.content}
                    key={item.titlecontent}
                />
            ))}
        </>
    );
}
