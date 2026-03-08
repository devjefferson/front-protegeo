# Documentação de Funcionalidade: Sistema de Reportagem de Desastres

## Visão Geral

O Sistema de Reportagem de Desastres é o coração do Protegeo, permitindo que cidadãos reportem, verifiquem e compartilhem informações sobre eventos climáticos e emergências em tempo real. Esta abordagem comunitária cria uma rede de monitoramento capilarizada que complementa os sistemas oficiais.

## Propósito e Valor

### Finalidade

- Permitir que usuários enviem reportes rápidos de ocorrências (inundações, incêndios, quedas de árvores, etc.).
- Gerar um fluxo de dados em tempo real para o mapa da plataforma.
- Criar alertas precoces baseados na observação direta da comunidade.

### Proposta de Valor

- **Agilidade:** Informações que chegam antes dos canais de notícia oficiais.
- **Precisão Local:** Detalhamento do que está acontecendo em ruas e bairros específicos.
- **Engajamento:** O cidadão deixa de ser passivo e torna-se um agente de segurança.

## Funcionamento e Fluxo do Usuário

### 1. Identificação da Ocorrência

O usuário presencia ou toma conhecimento de um desastre e abre o app Protegeo.

- Botão de destaque "Reportar Agora" na tela principal.
- Seleção de categoria (Enchente, Fogo, Deslizamento, Outros).

### 2. Coleta de Dados Geoespaciais

O app captura a localização exata via GPS (com opção de ajuste manual no mapa).

- Captura de fotos e vídeos curtos para comprovação visual.
- Descrição em texto ou áudio da situação encontrada.

### 3. Classificação de Severidade

O usuário indica o nível de urgência:

- **Informativo (Azul):** Situação em monitoramento, sem perigo imediato.
- **Atenção (Amarelo):** Risco moderado, evitar a área.
- **Crítico (Vermelho):** Perigo iminente de vida ou danos graves.

### 4. Processo de Verificação Comunitária

Uma vez enviado, o reporte entra em estado "Pendente de Verificação".

- Outros usuários na mesma região recebem uma notificação: "Confirma esta ocorrência?".
- Sistema de reputação: Reportes de usuários com histórico positivo são validados mais rapidamente.

### 5. Validação Oficial e Alerta

Após validação comunitária ou confirmação de órgãos oficiais (Defesa Civil):

- A ocorrência torna-se "Verificada" no mapa.
- Um alerta push é disparado para todos os usuários num raio de risco definido.

## Regras de Negócio e Segurança

- **Anti-Spam:** Limite de reportes por usuário em curto espaço de tempo.
- **Localização Falsa:** Reportes só podem ser feitos se o usuário estiver fisicamente próximo da área (geofencing).
- **Proteção de Identidade:** Opção de reportar anonimamente para o público geral (apenas moderadores veem a conta real).
- **Moderação:** Conteúdo ofensivo ou falso resulta em suspensão imediata da conta.

## Métricas de Sucesso da Funcionalidade

- **Volume de Reportes:** Número total de ocorrências enviadas mensalmente.
- **Tempo Médio de Verificação:** Intervalo entre o envio e a validação do reporte.
- **Precisão dos Reportes:** % de ocorrências confirmadas por fontes oficiais posteriormente.

---

_Última Atualização: 8 de março de 2026_
