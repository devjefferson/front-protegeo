export default function ContentAbout() {
  return (
    <div className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        ></div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden"></div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 ">
              Protegeo
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Explorando o Impacto dos Desastres Naturais e Alagamentos: Um
                Guia para o Site Protegeo
              </h1>
              <p className="mt-6 text-xl leading-8 ">
                Desastres naturais e alagamentos são eventos que podem causar
                destruição e mudar drasticamente a vida das pessoas. Com o
                aumento das mudanças climáticas e urbanização desordenada,
                entender esses fenômenos e como se preparar para eles se tornou
                mais essencial do que nunca. Sites dedicados ao estudo e
                prevenção de desastres naturais desempenham um papel fundamental
                ao oferecer informações cruciais e estratégias para mitigar os
                efeitos desses eventos.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/Diego-Varas-Reuters-1.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7  lg:max-w-lg">
              <strong className="font-semibold ">
                Informação Educativa e Alertas Atuais{' '}
              </strong>
              <p>
                Os sites voltados para desastres naturais e alagamentos, como o
                Protegeo, são fontes essenciais de conteúdo educativo. Eles
                fornecem dados detalhados sobre diferentes tipos de desastres —
                desde enchentes e tempestades até terremotos e incêndios
                florestais. Além disso, esses sites frequentemente atualizam
                seus usuários com alertas em tempo real, previsões
                meteorológicas, mudanças climáticas e orientações sobre como
                agir em situações de emergência.{' '}
              </p>
              <ul role="list" className="mt-8 space-y-8 ">
                <li className="flex flex-col gap-x-3">

                  <span>
                    <strong className="font-semibold ">
                      Ferramentas de Prevenção e Monitoramento{' '}
                    </strong>{' '}
                    <br />
                    Plataformas como o Protegeo oferecem ferramentas interativas
                    que permitem aos usuários monitorar e prever desastres em
                    suas regiões. Mapas de risco de alagamento, por exemplo,
                    ajudam as comunidades a identificar áreas vulneráveis e
                    tomar medidas preventivas. Outros recursos incluem
                    calculadoras de impacto, que auxiliam no entendimento das
                    consequências de determinados desastres, e orientações
                    práticas sobre como preparar kits de emergência e rotas de
                    evacuação.{' '}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold ">
                      Comunidade e Colaboração para a Prevenção
                    </strong>{' '}
                    <br />
                    Sites de desastres naturais frequentemente funcionam como
                    pontos de encontro para pessoas preocupadas com a segurança
                    pública. Fóruns de discussão e comentários permitem que os
                    usuários compartilhem suas experiências, façam perguntas e
                    encontrem apoio em tempos de crise. Muitas vezes, esses
                    sites também promovem eventos comunitários, como simulações
                    de evacuação e treinamentos para preparar as pessoas para
                    emergências, fortalecendo a resiliência local.{' '}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  <span>
                    <strong className="font-semibold ">
                      Exemplos de Sites e Iniciativas sobre Desastres Naturais
                    </strong>{' '}
                    <br />
                    Alguns dos sites mais informativos e reconhecidos no campo
                    de desastres naturais incluem:{' '}
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight ">
                CEMADEN (Centro Nacional de Monitoramento e Alertas de Desastres
                Naturais):{' '}
              </h2>
              <p className="mt-2">
                O site oferece monitoramento em tempo real de áreas de risco no
                Brasil, além de informações educativas sobre desastres naturais.{' '}
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight ">
                Defesa Civil:{' '}
              </h2>
              <p className="mt-2">
                Fornece orientações, alertas e respostas rápidas para desastres
                em nível municipal, estadual e nacional.{' '}
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight ">
                FEMA (Agência Federal de Gerenciamento de Emergências dos EUA):
              </h2>
              <p className="mt-2">
                Apresenta guias de preparação e recuperação após desastres,
                focando na proteção comunitária.{' '}
              </p>

              <p className="mt-6">
                Os sites dedicados a desastres naturais, como o <b>Protegeo</b>,
                são ferramentas valiosas para educar, alertar e proteger as
                comunidades. Eles não apenas fornecem informações vitais, mas
                também promovem uma cultura de colaboração e resiliência,
                ajudando as pessoas a se unirem em prol da segurança coletiva.
                Se você vive em uma área propensa a alagamentos ou deseja se
                preparar melhor para situações de emergência, explorar esses
                sites pode ser essencial para sua proteção.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-[600px]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(60%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        ></div>
      </div>
    </div>
  );
}
