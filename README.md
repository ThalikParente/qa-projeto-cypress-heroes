# 🧩 Testes End-to-End com Cypress — Cypress Heroes

Este repositório faz parte do meu processo de estudos e prática em automação de testes com **Cypress**, utilizando a aplicação **Cypress Heroes** — um projeto oficial da equipe do Cypress criado para praticar automação de testes em um ambiente realista.

---

## 🎯 Objetivo
O objetivo deste projeto é colocar em prática os aprendizados sobre:

- Identificação e documentação de cenários de teste;
- Escrita de casos de teste manuais;
- Automação end-to-end com boas práticas;
- Estruturação de Page Objects e reutilização de código.

---

## ⚙️ Pré-requisitos

Antes de executar os testes, é necessário ter:

- **Node.js** instalado (versão 18 ou superior);
- **Git** configurado;
- **Cypress** instalado localmente no projeto (ou como dependência).

---

## 🚀 Como executar o projeto

1. **Clonar o repositório oficial da aplicação (base da automação):**
   ```bash
   git clone https://github.com/cypress-io/cypress-heroes.git
   ```

2. **Clonar este repositório com os testes automatizados:**
   ```bash
   git clone https://github.com/thalikandrade/my-cypress-heroes.git
   ```

3. **Acessar o diretório da aplicação:**
   ```bash
   cd cypress-heroes
   ```

4. **Instalar as dependências:**
   ```bash
   npm install
   ```

5. **Abrir o Cypress para rodar os testes:**
   ```bash
   npx cypress open
   ```

---

## 🧩 Estrutura de Testes

Os testes deste projeto foram desenvolvidos utilizando o padrão **Page Object Model (POM)** para garantir organização, reutilização e facilidade de manutenção.

---

## 🧾 Casos de Teste Documentados

Os casos de teste manuais foram elaborados previamente e serviram de base para a automação. Cada funcionalidade da aplicação foi testada com foco em validação de fluxos críticos, mensagens de erro e comportamento esperado do sistema.

### Exemplos de casos de teste:

| ID | Nome | Descrição |
|----|------|------------|
| CT-01 | Login Admin | Verifica se o login é realizado corretamente com usuário administrador. |
| CT-02 | Login Comum | Garante o acesso com credenciais de usuário padrão. |
| CT-03 | Botão Curtir (não logado) | Verifica se o sistema solicita login ao tentar curtir sem estar autenticado. |
| CT-04 | Botão Contratar (não logado) | Verifica se o sistema exige login para contratar um herói. |
| CT-05 | Curtir Herói (Admin) | Valida o funcionamento do botão curtir com conta Admin. |
| CT-06 | Curtir Herói (Comum) | Valida o funcionamento do botão curtir com conta comum. |
| CT-07 | Contratar Herói (Admin) | Verifica a ação de contratar quando logado como Admin. |
| CT-08 | Contratar Herói (Comum) | Verifica a ação de contratar quando logado como usuário comum. |
| CT-09 | Criar Novo Herói | Garante que é possível criar um herói com dados válidos. |
| CT-10 | Deletar Herói | Verifica se o herói pode ser removido corretamente. |
| CT-11 | Editar Herói | Valida a edição bem-sucedida de um herói existente. |
| CT-12 | Editar Herói com Dados Inválidos | Garante que o sistema exibe alerta ao tentar salvar campos obrigatórios vazios. |

---

## 🧠 Aprendizados Gerais

✅ Aplicação de boas práticas na estruturação de testes com Cypress;  
✅ Criação de Page Objects para separar responsabilidades;  
✅ Uso de comandos reutilizáveis para melhor manutenção;  
✅ Validação de mensagens de erro e fluxos alternativos;  
✅ Entendimento da importância da cultura de qualidade no desenvolvimento.

---

## 🧩 Próximos Passos

🔹 Criar novos cenários de teste com dados dinâmicos (via fixtures);  
🔹 Integrar os testes a um pipeline CI/CD (ex: GitHub Actions);  
🔹 Adicionar relatórios automatizados (Allure Reports / Mochawesome).  

---

📅 **Última atualização:** 24/10/2025  
👤 **Autor:** Thálik Andrade Parente  
💬 “Qualidade não é uma fase, é uma cultura dentro do time.”
