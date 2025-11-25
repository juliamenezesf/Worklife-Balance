# 🌿 Worklife Balance — Trabalho Híbrido
Aplicação Front-End desenvolvida para a **Global Solution FIAP – 2025/2**.

O projeto propõe uma plataforma simples, moderna e objetiva para ajudar profissionais que atuam no modelo **híbrido** a organizarem suas rotinas, realizando check-ins de humor, cadastrando tarefas, visualizando logs de humor e navegando por páginas informativas com uma interface limpa, responsiva e intuitiva.

---

## 📌 Objetivo do Projeto
Criar uma aplicação front-end funcional, estilizada e acessível, utilizando componentes modulares, TailwindCSS, React Router e Context API, promovendo uma experiência agradável ao usuário que busca equilíbrio entre produtividade e bem-estar.

---

## 🚀 Funcionalidades Principais

### 🏡 **Home**
Página inicial com apresentação do projeto.

### 🧠 **Check-in de Humor**
Registro diário de humor integrado à API.

### 📋 **Tarefas (Organização)**
Página para cadastrar, listar e remover tarefas via API.

### 🧩 **Páginas Informativas**
- Sobre  
- Integrantes  
- Contato/FAQ  

### 🌓 **Tema Claro/Escuro**
Controlado via Context API.

### 🧭 **Rotas (SPA)**
Navegação via React Router.

---

## 🌐 API Utilizada
A aplicação consome dados da seguinte API Java hospedada no Render:

🔗 **Base URL**
```
https://api-java-1-w4eg.onrender.com
```

---

## 📡 Endpoints da API

### 📋 TASKS
| Método | Endpoint |
|--------|----------|
| **GET** | `/v1/tasks` |
| **GET** | `/v1/tasks/{id}` |
| **POST** | `/v1/tasks` |
| **DELETE** | `/v1/tasks/{id}` |

---

### 😄 MOOD LOGS
| Método | Endpoint |
|--------|----------|
| **GET** | `/v1/mood-logs` |
| **GET** | `/v1/mood-logs/{id}` |
| **POST** | `/v1/mood-logs` |
| **DELETE** | `/v1/mood-logs/{id}` |

---

## 📁 Estrutura do Projeto

```
worklife-balance/
 ├── public/
 │   └── imgs/
 │        ├── julia.jfif
 │        └── pedro.jpg
 ├── src/
 │   ├── api/
 │   │   └── client.ts
 │   ├── assets/
 │   │   └── logo-worklifebalance.png
 │   ├── components/
 │   │   ├── Header.tsx
 │   │   ├── PageHeader.tsx
 │   │   └── ThemeToggle.tsx
 │   ├── context/
 │   │   └── ThemeContext.tsx
 │   ├── pages/
 │   │   ├── About.tsx
 │   │   ├── Contact.tsx
 │   │   ├── Home.tsx
 │   │   ├── Members.tsx
 │   │   ├── Mood.tsx
 │   │   └── Tasks.tsx
 │   ├── router/
 │   │   └── Router.tsx
 │   ├── services/
 │   │   ├── moodlogs.ts
 │   │   └── tasks.ts
 │   ├── types/
 │   │   ├── mood.ts
 │   │   └── task.ts
 │   ├── App.tsx
 │   ├── App.css
 │   ├── index.css
 │   └── main.tsx
 ├── .env
 ├── package.json
 ├── vite-env.d.ts
 └── README.md
```

---

## ▶️ Como Rodar o Projeto

### 1️⃣ Clonar
```bash
git clone https://github.com/juliamenezesf/Worklife-Balance.git
cd Worklife-Balance
```

### 2️⃣ Instalar dependências
```bash
npm install
```

### 3️⃣ Rodar aplicação
```bash
npm run dev
```

Acesse: http://localhost:5173

---

## 🌐 Deploy
```
https://worklife-balance-kappa.vercel.app/
```

---

## 👥 Integrantes
* Pedro Henrique Costa — RM: 559932 — Turma: 1TDSPV  
* Júlia Kauane Menezes — RM: 565568 — Turma: 1TDSPV

---

## 🛡️ Licença
Projeto acadêmico — uso exclusivamente educacional.

Repositorio:  
https://github.com/juliamenezesf/Worklife-Balance
