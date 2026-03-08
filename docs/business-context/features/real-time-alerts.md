# Documentação de Funcionalidade: Sistema de Alertas em Tempo Real

## Visão Geral

O Sistema de Alertas em Tempo Real é a funcionalidade crítica do Protegeo responsável por notificar usuários sobre riscos iminentes, garantindo que a informação certa chegue à pessoa certa no momento certo.

## Propósito e Valor

### Finalidade

- Disparar notificações push, SMS e emails baseados na geolocalização do usuário e áreas de interesse configuradas.
- Fornecer instruções de segurança imediatas (ex: "Procure local elevado").
- Manter o usuário informado sobre a evolução de uma crise em andamento.

### Proposta de Valor

- **Salvamento de Vidas:** Alertas precoces que permitem a evacuação segura.
- **Proteção de Bens:** Tempo hábil para mover veículos ou proteger estoques de lojas.
- **Tranquilidade:** Monitoramento ativo 24/7 sem que o usuário precise abrir o app constantemente.

## Tipos de Alerta e Prioridade

### 1. Alerta Crítico (Vermelho - Prioridade Máxima)

- **Cenário:** Risco iminente de morte ou destruição (ex: inundação repentina, incêndio florestal próximo).
- **Comportamento:** Som de sirene diferenciado (mesmo em modo silencioso, se permitido), vibração intensa, mensagem persistente na tela de bloqueio.

### 2. Alerta de Atenção (Amarelo - Prioridade Média)

- **Cenário:** Riscos potenciais ou mudanças bruscas de tempo (ex: previsão de tempestade forte, ruas alagadas na rota do usuário).
- **Comportamento:** Notificação padrão com som de atenção.

### 3. Alerta Informativo (Azul - Prioridade Baixa)

- **Cenário:** Atualizações de rotina, dicas de prevenção ou encerramento de alertas anteriores.
- **Comportamento:** Notificação silenciosa ou som discreto.

## Funcionamento Técnico (Resumo)

### 1. Detecção do Gatilho

O sistema detecta uma nova ocorrência verificada ou recebe um sinal de sensores oficiais (ex: nível do rio subiu 2 metros em 1 hora).

### 2. Definição do Polígono de Risco

O motor geoespacial (PostGIS) calcula a área afetada e gera um polígono de risco no mapa.

### 3. Filtro de Usuários Afetados

O sistema cruza o polígono de risco com:

- Localização atual dos usuários (GPS).
- Áreas de Interesse salvas (Casa, Trabalho).
- Preferências de notificação do usuário.

### 4. Disparo Massivo e Multicanal

O broker de mensagens (Kafka) orquestra o disparo simultâneo de milhares de notificações via Firebase (Push), Twilio (SMS) e SendGrid (Email).

## Regras de Negócio

- **Geofencing Dinâmico:** O alerta acompanha o usuário em movimento. Se ele entrar em uma área de risco, recebe o alerta imediatamente.
- **Frequência de Alertas:** Evitar fadiga de notificações. Se houver múltiplos alertas para a mesma área, o sistema consolida em um único "Status de Crise".
- **Confirmação de Leitura:** O sistema rastreia se alertas críticos foram visualizados para métricas de eficácia.

## Métricas de Sucesso da Funcionalidade

- **Latência de Entrega:** Tempo entre o gatilho e o recebimento no celular do usuário (Meta: < 30s).
- **Taxa de Abertura (CTR):** % de usuários que clicam no alerta para ver detalhes.
- **Eficácia da Ação:** Feedback do usuário indicando se o alerta foi útil para sua segurança.

---

_Última Atualização: 8 de março de 2026_
