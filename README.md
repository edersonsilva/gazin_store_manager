# Gazin Store Manager

Projeto fullstack criado para simular um sistema de gestão de produtos e pedidos, com foco em boas práticas modernas de desenvolvimento, CI/CD e containers.

---

## 🧰 Tecnologias Utilizadas

### Backend

- Node.js + Express
- Clean Architecture
- Jest (testes)
- Docker
- Swagger (em breve)

### Frontend

- Next.js
- React
- Chakra UI
- Axios

### DevOps

- Docker Compose
- GitHub Actions (CI)

---

## 📁 Estrutura do Projeto

```
project/
├── backend/     → API REST com Node.js/Express
├── frontend/    → App web com Next.js
├── .github/     → Workflow CI
├── docker-compose.yml
└── README.md
```

---

## 🚀 Como rodar o projeto

### Pré-requisitos

- Docker + Docker Compose

### Rodar localmente (ambos os serviços)

```bash
git clone https://github.com/seu-usuario/gazin-store-manager.git
cd gazin-store-manager
docker-compose up --build
```

Acesse:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000/api/products](http://localhost:5000/api/products)

---

## 📦 Backend

### Rodar local sem Docker

```bash
cd backend
npm install
npm run dev
```

### Testes

```bash
npm test
```

---

## 💻 Frontend

### Rodar local sem Docker

```bash
cd frontend
npm install
npm run dev
```

---

## ✅ Pipeline CI

Workflow do GitHub Actions está configurado para:

- Instalar dependências
- Rodar testes no backend
- Rodar build no frontend

Arquivo: `.github/workflows/ci.yml`

---

## 🧪 Funcionalidades

- [x] Listar produtos (API + Front)
- [ ] Cadastro e edição de produtos (em breve)
- [ ] Integração com banco de dados
- [ ] Testes de integração completos

---

## 📌 Observações

Este projeto foi criado com fins de aprendizado e demonstração de capacidade técnica com foco na stack proposta pela Gazin Tech. Mesmo com pouca experiência anterior com Node.js, o backend foi implementado com boas práticas, testes e containerização.

---

## 👨‍💻 Autor

**Seu Nome Aqui**  
[linkedin.com/in/seu-perfil](https://linkedin.com/in/seu-perfil)  
[github.com/seu-usuario](https://github.com/seu-usuario)

---

## 🌟 Contribua

Sugestões, críticas e contribuições são bem-vindas!

---

## 📝 Licença

MIT License
