# 🌿 Worklife Balance — Trabalho Híbrido  
Aplicação Front-End desenvolvida para a **Global Solution FIAP – 2025/2**.

O projeto propõe uma plataforma simples, moderna e objetiva para ajudar profissionais que atuam no modelo **híbrido** a organizarem suas rotinas, realizando check-ins de humor, visualizando métricas básicas e navegando por páginas informativas com uma interface limpa, responsiva e intuitiva.

---

## 📌 Objetivo do Projeto

Criar uma aplicação front-end funcional, estilizada e acessível, utilizando componentes modulares, TailwindCSS, React Router e Context API, promovendo uma experiência agradável ao usuário que busca equilíbrio entre produtividade e bem-estar.

---

## 🚀 Funcionalidades Principais

### 🏡 **Home**
Apresenta o conceito do projeto e direciona o usuário para os recursos disponíveis.

### 🧠 **Check-in de Humor**
Página dedicada para registrar o humor do usuário, com slider e interface amigável.

### 🧮 **Dashboard**
Página de visualização com métricas simples e interface organizada.

### 📋 **Tarefas (Organização)**
Página de organização com layout estruturado para cadastrar e visualizar tarefas.  
*(Nesta versão, ainda sem integração com API — mas preparada para expansão.)*

### 🧩 **Outras páginas informativas**
- Sobre
- Integrantes
- FAQ

### 🌓 **Tema Claro/Escuro**
Implementado com Context API, permitindo alternância simples entre temas com persistência visual.

### 🧭 **Navegação com React Router**
Todas as páginas são acessíveis a partir do header e organizadas em rotas claras.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|-----------|-----------|
| **React + Vite** | Base da aplicação e build rápido |
| **TypeScript** | Tipagem estática e segurança |
| **TailwindCSS** | Estilização responsiva e moderna |
| **React Router DOM** | Sistema de rotas |
| **Context API** | Controle global de tema |
| **Lucide Icons** | Ícones modernos |
| **CSS Utility-first** | Estilo limpo e organizado |

---

## 📁 Estrutura do Projeto

```
Worklife-Balance/
 ├── public/
 │   └── vite.svg
 ├── src/
 │   ├── assets/
 │   │   ├── integrantes/
 │   │   └── logo.png
 │   ├── components/
 │   │   ├── Logo.tsx
 │   │   ├── Header.tsx
 │   │   ├── Footer.tsx
 │   │   └── ThemeToggle.tsx
 │   ├── context/
 │   │   └── ThemeContext.tsx
 │   ├── pages/
 │   │   ├── Home.tsx
 │   │   ├── Tasks.tsx
 │   │   ├── Mood.tsx
 │   │   ├── Dashboard.tsx
 │   │   ├── About.tsx
 │   │   ├── Members.tsx
 │   │   └── Faq.tsx
 │   ├── router/
 │   │   └── index.tsx
 │   ├── App.tsx
 │   ├── main.tsx
 │   └── index.css
 ├── package.json
 ├── tailwind.config.js
 ├── tsconfig.json
 └── vite.config.ts
```

---

## ▶️ Como Rodar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/juliamenezesf/Worklife-Balance.git
cd Worklife-Balance
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Executar em modo desenvolvimento

```bash
npm run dev
```

Acesse o projeto em:

👉 http://localhost:5173

---

## 🌐 Deploy (Opcional)

```
https://worklife-balance-kappa.vercel.app/
```

---

## 📌 Requisitos FIAP Atendidos

- [x] SPA com React Router  
- [x] Componentização  
- [x] TailwindCSS configurado  
- [x] Tema claro/escuro  
- [x] Páginas obrigatórias  
- [x] Estrutura organizada  
- [x] Código limpo  
- [x] README completo  

---
## 👥 Integrantes

* Pedro Henrique Costa — RM: 559932 — Turma: 1TDSPV
* Júlia Kauane Menezes — RM: 565568 — Turma: 1TDSPV

---
## 🌿 Fluxo de Versionamento (Git Flow)

* **Branches:**

  * `main` → produção
  * `develop` → integração
  * `feature/*` → novas features

---
## 🛡️ Licença

Projeto acadêmico — uso exclusivamente **educacional**.

* **Link Repositório Github:**

https://github.com/juliamenezesf/Worklife-Balance


© 2025 - FIAP | Worklife Balance 
---
