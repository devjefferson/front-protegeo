'use client';
import AccordionFaq from '@/components/AccordionFaq';
import FeatureSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';
import { Hero } from '@/components/Hero';

import Slider from '@/components/Slider';
import { servicesPosts } from '@/services/post';

const features = [
  {
    title: 'Alertas de enchentes',
    description:
      'Receba alertas em tempo real sobre áreas afetadas por enchentes próximas a você.',
    iconColor: 'blue',
    iconPath:
      'M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z',
  },
  {
    title: 'Notificações de incêndios',
    description:
      'Saiba quando incêndios florestais estão ameaçando a sua região.',
    iconColor: 'red',
    iconPath:
      'M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z',
  },
  {
    title: 'Monitoramento de alagamentos',
    description:
      'Receba alertas e monitore o nível dos rios e chuvas que podem causar alagamentos.',
    iconColor: 'yellow',
    iconPath:
      'M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z',
  },
];
export default async function Mapa() {
  const [data] = await Promise.all([servicesPosts()]);
  return (
    <>
        <Hero
        title="Explore e Mapeie Desastres Naturais em Tempo Real"
        description="Nosso site oferece uma plataforma interativa que permite monitorar e mapear desastres naturais, como incêndios florestais e alagamentos, em tempo real. Utilizando dados atualizados e tecnologia de geolocalização, ajudamos comunidades e autoridades a responder de forma mais rápida e eficaz às emergências, minimizando impactos e salvando vidas. Participe e contribua com informações para proteger nossa sociedade."
        sobText="Monitore Incêndios, Alagamentos e Outros Desastres Naturais para Ação Rápida e Prevenção"
        aboutLink="/#quiz"
        aboutText="Saiba mais"
        actionLink="#"
        actionText="Cadastra-se"
      />
      <FeatureSection
        title="Segurança em tempo real"
        description="Mantenha-se seguro com alertas precisos de desastres naturais"
        features={features}
        imageUrl="/istockphoto-1333043586-612x612.jpg"
      />
      <Slider
        slides={data.data}
      />

      <AccordionFaq
        questions={[
          {
            question:
              'Quais são as vantagens de usar nosso app para mapear desastres naturais, alagamentos e enchentes?',
            answer:
              'Nosso app oferece alertas em tempo real e um mapa detalhado das áreas afetadas, ajudando as comunidades e autoridades a responderem rapidamente a desastres como alagamentos. Ele melhora a coordenação na resposta emergencial e otimiza a distribuição de recursos.',
          },
          {
            question:
              'Como o app pode ajudar na prevenção de desastres naturais?',
            answer:
              'O app permite monitoramento contínuo de áreas de risco, oferecendo previsões de desastres baseadas em dados climáticos e geográficos. Com essas informações, as autoridades e cidadãos podem agir preventivamente, reduzindo os danos causados por alagamentos e enchentes.',
          },
          {
            question: 'Posso relatar um alagamento em tempo real usando o app?',
            answer:
              'Sim! Nosso app permite que os usuários enviem relatos instantâneos de alagamentos e enchentes, com fotos e descrições. Isso ajuda a criar um mapa atualizado e dinâmico das áreas afetadas, facilitando ações emergenciais.',
          },
          {
            question:
              'Como o app auxilia na segurança das comunidades em áreas de risco?',
            answer:
              'O app fornece alertas antecipados de alagamentos e desastres naturais, permitindo que as comunidades sejam notificadas a tempo de evacuar ou tomar medidas preventivas. Além disso, o mapeamento contínuo ajuda a planejar rotas seguras e evitar áreas de risco.',
          },
          {
            question: 'O app funciona em regiões com pouca conectividade?',
            answer:
              'Sim, nosso app foi projetado para funcionar mesmo em áreas com pouca conectividade. Ele salva os dados localmente e os envia assim que a conexão é restabelecida, garantindo que informações importantes sobre alagamentos e enchentes sejam registradas e compartilhadas.',
          },
        ]}
      />

      <Footer />
    </>
  );
}
