# Documentação de Funcionalidade: Autenticação e Gestão de Usuários

## Visão Geral

O sistema de Autenticação e Gestão de Usuários do Protegeo garante a segurança dos dados, a personalização da experiência e a integridade da rede de monitoramento comunitário. Ele é a base para o sistema de reputação de repórteres.

## Propósito e Valor

### Finalidade

- Identificar e autenticar usuários de forma segura.
- Gerenciar perfis, preferências de alerta e áreas de interesse.
- Estabelecer a base para a governança e moderação da comunidade.

### Proposta de Valor

- **Segurança e Privacidade:** Garantia de que os dados de localização e contatos estão protegidos conforme a LGPD.
- **Personalização:** Alertas que fazem sentido para a rotina específica do usuário (Casa/Trabalho).
- **Credibilidade:** Usuários autenticados têm seus reportes valorizados pelo sistema de reputação.

## Fluxos de Acesso

### 1. Cadastro e Login

- Opções de e-mail/senha com políticas de senha forte.
- Login social (Google/Apple) para facilitar a adoção rápida.
- Verificação obrigatória de e-mail para evitar contas fakes (bots).

### 2. Gestão de Perfil e Preferências

O usuário define como e quando quer ser alertado:

- **Áreas de Interesse:** Cadastro de endereços fixos para monitoramento constante.
- **Nível de Sensibilidade:** Escolher receber apenas alertas críticos ou todos os alertas informativos.
- **Canais de Fallback:** Configurar recebimento de SMS caso o app não tenha conexão.

### 3. Sistema de Reputação (Gamificação do Bem)

Cada usuário possui um "Nível de Confiança" que evolui:

- **Iniciante:** Novo usuário, reportes precisam de mais verificações.
- **Colaborador:** Histórico de reportes úteis e verificados.
- **Especialista/Oficial:** Usuários de órgãos de segurança ou voluntários treinados (selo de verificação).

## Regras de Negócio e Segurança

- **Conformidade LGPD:** Opção de exclusão total de conta e dados (Direito ao esquecimento).
- **Geolocalização Consentida:** O app só rastreia a localização em background se o usuário permitir explicitamente para fins de segurança (alertas de proximidade).
- **Prevenção de Abuso:** Bloqueio automático de contas que enviam múltiplos reportes falsos.
- **Segurança de Sessão:** Uso de JWT (JSON Web Tokens) com expiração controlada e suporte a 2FA (Autenticação de Dois Fatores) para contas administrativas/oficiais.

## Funcionamento Técnico (Resumo)

- **Auth Provider:** Implementação customizada utilizando Node.js e Passport.js (ou integração com AWS Cognito/Auth0 conforme a arquitetura).
- **Armazenamento:** Dados de perfil no PostgreSQL, tokens de sessão no Redis para performance.
- **Criptografia:** Senhas armazenadas com salt e hash (BCrypt). Comunicação via HTTPS em 100% do tráfego.

## Métricas de Sucesso da Funcionalidade

- **Taxa de Conversão de Cadastro:** % de pessoas que instalam e completam o perfil.
- **Adoção de 2FA:** % de usuários avançados que ativam segurança extra.
- **Qualidade da Base:** % de usuários com nível de confiança "Colaborador" ou superior.
- **Retenção de Perfil:** Baixo índice de solicitações de exclusão de dados.

---

_Última Atualização: 8 de março de 2026_
