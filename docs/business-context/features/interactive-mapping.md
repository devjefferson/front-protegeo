# Documentação de Funcionalidade: Mapa Interativo de Riscos

## Visão Geral

O Mapa Interativo é a principal interface de visualização do Protegeo. Ele transforma dados geoespaciais complexos em uma visão intuitiva e acionável da situação de segurança em qualquer região do Brasil.

## Propósito e Valor

### Finalidade

- Fornecer uma visão panorâmica e em tempo real de todas as ocorrências e riscos.
- Permitir a exploração geográfica de áreas seguras e rotas alternativas.
- Visualizar camadas de dados oficiais (sensores de rio, pluviômetros, radares).

### Proposta de Valor

- **Consciência Situacional:** O usuário entende visualmente onde o perigo está em relação a ele.
- **Planejamento de Rota:** Ajuda a evitar áreas de risco durante o trajeto urbano.
- **Transparência:** Demonstra a cobertura e atividade da plataforma em tempo real.

## Camadas do Mapa (Layers)

### 1. Camada de Ocorrências Ativas

- Marcadores de incêndios, enchentes, quedas de árvores.
- Diferenciação visual entre reportes verificados e não verificados.
- Clusterização para visualização clara de múltiplas ocorrências próximas.

### 2. Camada de Áreas de Risco (Zonas de Calor)

- Polígonos translúcidos indicando áreas sob alerta.
- Gradiente de cores (Amarelo/Laranja/Vermelho) conforme o nível de risco.
- Mapeamento histórico de áreas propensas a alagamentos e deslizamentos.

### 3. Camada de Sensores e Infraestrutura

- Localização de pluviômetros e sensores de nível de rio.
- Visualização de hospitais, delegacias e pontos de abrigo da Defesa Civil.
- Radar meteorológico em tempo real (Overlay de chuva).

## Interações do Usuário

- **Busca por Endereço:** Verificar a situação de segurança de um local antes de se deslocar.
- **Filtros Personalizados:** Escolher ver apenas um tipo de desastre (ex: "só incêndios") ou um período de tempo (ex: "últimas 24h").
- **Clique para Detalhes:** Ao clicar em um ícone, abre-se um card com fotos, descrição, horário e status de verificação.
- **Reporte Direto via Mapa:** Longo clique em qualquer ponto do mapa para iniciar um novo reporte naquela localização.

## Funcionamento Técnico (Resumo)

- **Engine:** Leaflet.js / React-Leaflet (Web) e React Native Maps (Mobile).
- **Provedor de Tiles:** OpenStreetMap (Base) com customizações de estilo Protegeo.
- **Performance:** Renderização otimizada para milhares de pontos através de Canvas e clusterização no lado do cliente.
- **Geoprocessamento:** Uso intensivo de PostGIS para consultas espaciais rápidas (ex: "quais ocorrências estão neste retângulo de visualização?").

## Regras de Negócio

- **Privacidade do Usuário:** A localização de outros usuários no mapa é anonimizada e mostrada apenas como "presença comunitária" em áreas de calor, nunca com precisão individual.
- **Atualização Automática:** O mapa se atualiza via WebSocket sempre que uma nova ocorrência relevante entra no sistema.
- **Modo Offline:** Cache de tiles básicos para a região onde o usuário se encontra, permitindo ver o mapa mesmo sem conexão estável.

## Métricas de Sucesso da Funcionalidade

- **Tempo de Carregamento:** Tempo para o mapa estar totalmente interativo.
- **Engajamento:** Número de cliques em marcadores e trocas de camadas por sessão.
- **Precisão Visual:** Alinhamento correto dos dados de GPS com a topografia do mapa.

---

_Última Atualização: 8 de março de 2026_
