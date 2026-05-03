# 🧪 E2E Test Automation – Heroes Web App (Cypress)

Projeto de automação de testes end-to-end focado na validação de fluxos críticos de uma aplicação web, simulando cenários reais de uso e comportamento do usuário.

A automação foi desenvolvida utilizando o Cypress, com aplicação de boas práticas de organização, reutilização de código e estruturação de testes.

---

## 🎯 Objetivo

Validar o comportamento da aplicação em cenários críticos, garantindo:

- Funcionamento correto de autenticação (login)
- Controle de acesso baseado em usuário
- Execução de ações principais (curtir, contratar, criar, editar e excluir)
- Tratamento de erros e validações de dados
- Integridade do fluxo do usuário (E2E)

---

## 🧪 Cenários cobertos

Os cenários foram definidos com base em comportamento real do usuário e priorização de fluxos críticos da aplicação.

- Login com diferentes perfis (admin e usuário comum)
- Ações restritas para usuários não autenticados
- Interações com entidades do sistema (heróis)
- Validações de permissões e comportamento do sistema
- Testes positivos e negativos (validação de erros)

---

## 🧾 Casos de Teste Documentados

Os cenários foram previamente estruturados e documentados antes da automação, seguindo uma abordagem orientada a comportamento do usuário e validação de regras de negócio.

| ID | Nome | Descrição |
|----|------|----------|
| CT-01 | Login Admin | Verifica login com credenciais de administrador |
| CT-02 | Login Comum | Valida acesso com usuário padrão |
| CT-03 | Curtir sem login | Garante que o sistema exige autenticação |
| CT-04 | Contratar sem login | Valida bloqueio de ação sem autenticação |
| CT-05 | Curtir (Admin) | Verifica ação de curtir com usuário admin |
| CT-06 | Curtir (Comum) | Verifica ação de curtir com usuário comum |
| CT-07 | Contratar (Admin) | Valida contratação com admin |
| CT-08 | Contratar (Comum) | Valida contratação com usuário comum |
| CT-09 | Criar herói | Garante criação com dados válidos |
| CT-10 | Deletar herói | Verifica exclusão correta |
| CT-11 | Editar herói | Valida edição com sucesso |
| CT-12 | Editar inválido | Garante validação de campos obrigatórios |

📌 Casos de teste detalhados disponíveis na pasta `/casosDeTeste`

---

## 🛠️ Stack utilizada

- Cypress (E2E Test Automation)
- JavaScript
- Node.js
- Page Object Model (POM)
- Custom Commands

---

## 🧩 Estrutura do projeto

A automação segue boas práticas para facilitar manutenção e escalabilidade:

- Page Objects → separação da lógica de interação  
- Custom Commands → reutilização de ações  
- Organização por funcionalidades  
- Cenários independentes e reutilizáveis  

---

## 🚀 Execução dos testes

### Pré-requisitos:
- Node.js 18+
- Git

### Passos:

```bash
# Clonar aplicação base
git clone https://github.com/cypress-io/cypress-heroes.git

# Clonar este repositório
git clone https://github.com/SEU-NOVO-NOME-AQUI.git

# Acessar aplicação
cd cypress-heroes
npm install
npm start
```

Aplicação disponível em: http://localhost:3000

```bash
# Em outro terminal
cd SEU-NOVO-NOME-AQUI

# Executar Cypress
npx cypress open
```
---

## 🧠 Abordagem de Qualidade

Os testes foram desenvolvidos com foco em:

- Priorização baseada em risco  
- Cobertura de fluxos críticos  
- Validação de comportamento esperado vs erro  
- Simulação de uso real do sistema  

---

## 💡 Diferenciais

- Estrutura baseada em boas práticas de automação  
- Separação clara de responsabilidades (POM)  
- Cobertura de cenários reais de uso  
- Foco em qualidade orientada ao usuário
- Aplicação de conceitos de STLC na construção dos testes

---

## 🔗 Recursos

- Documentação Cypress: https://docs.cypress.io  
- Projeto base: https://github.com/cypress-io/cypress-heroes  

---

## 👤 Autor

Thálik Parente  

💬 "Qualidade não é uma fase, é uma cultura dentro do time."
