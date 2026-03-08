# Stack Tecnológica - Arquitetura Protegeo

## Visão Geral

Este documento descreve a stack tecnológica completa do projeto Protegeo, incluindo frameworks, bancos de dados, infraestrutura e ferramentas de desenvolvimento. A escolha da stack baseia-se em performance, escalabilidade e confiabilidade para operações em tempo real.

## Detalhes da Stack

### 1. Camada de Frontend

#### Aplicação Web

- **Framework Principal:** React 18+ (utilizando Vite para build)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS + Material UI (para componentes complexos)
- **Gestão de Estado:** Redux Toolkit + RTK Query (para integração com API)
- **Mapas:** Leaflet.js / React-Leaflet
- **Visualização de Dados:** D3.js e Chart.js

#### Aplicações Mobile

- **Framework:** React Native (Expo)
- **Code Sharing:** Compartilhamento de lógica de domínio com o frontend web via monorepo.
- **Notificações:** Firebase Cloud Messaging (FCM) + OneSignal.

### 2. Camada de Backend (Microserviços)

- **Runtime:** Node.js (LTS)
- **Frameworks:** Express (para APIs rápidas) e NestJS (para serviços complexos)
- **Comunicação Real-time:** WebSockets (Socket.io)
- **Orquestração de Eventos:** Apache Kafka
- **Filas de Processamento:** BullMQ (com Redis)
- **Documentação:** Swagger (OpenAPI 3.0)

### 3. Banco de Dados e Persistência

- **Banco Relacional (Principal):** PostgreSQL 15+
  - **Extensão Geoespacial:** PostGIS (Essencial para cálculos de distância e polígonos de risco)
- **Cache e Estado:** Redis (Cluster mode)
- **Busca e Logs:** Elasticsearch (ELK Stack)
- **Série Temporal:** TimescaleDB (Para histórico de medições de sensores)

### 4. Infraestrutura e Cloud

- **Provedor Cloud:** AWS (Amazon Web Services)
- **Containerização:** Docker + Kubernetes (Amazon EKS)
- **Serverless:** AWS Lambda (Para gatilhos de processamento de imagem e bots)
- **CDN:** Cloudflare (Proteção DDoS e cache de borda)
- **Armazenamento de Arquivos:** Amazon S3

### 5. DevOps e CI/CD

- **Versionamento:** Git (GitHub)
- **Pipeline:** GitHub Actions
- **Qualidade de Código:** SonarQube + ESLint + Prettier
- **Testes:** Jest (Unitários), Supertest (Integração), Cypress (E2E)

### 6. Observabilidade

- **Métricas:** Prometheus
- **Dashboards:** Grafana
- **Tracing:** Jaeger
- **Logging:** Fluentd + Elasticsearch + Kibana

## Justificativa das Escolhas

### Por que PostgreSQL + PostGIS?

Para monitoramento de desastres, precisamos saber exatamente quem está dentro de um raio de inundação ou área de incêndio. PostGIS é a ferramenta mais robusta para lidar com coordenadas geográficas e geometria em larga escala.

### Por que Apache Kafka?

O sistema recebe milhares de sinais de sensores e reportes de usuários simultaneamente. Kafka garante que nenhuma mensagem seja perdida e que o processamento seja distribuído eficientemente entre os microserviços.

### Por que React Native?

Permite uma equipe de desenvolvimento unificada entre Web e Mobile, agilizando a entrega de novas funcionalidades sem sacrificar a performance nativa necessária para notificações e geolocalização em background.

---

_Versão do Documento: 1.0.0_
_Última Atualização: 8 de março de 2026_
