# 🎓 Escola API

API REST para gerenciamento de alunos, desenvolvida com **NestJS**, **TypeScript** e **MongoDB** (Mongoose). Inclui validação de dados com DTOs e operações completas de CRUD.

---

## 📋 Sumário

- [Tecnologias](#-tecnologias)
- [Funcionalidades](#-funcionalidades)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Executando o projeto](#-executando-o-projeto)
- [Endpoints](#-endpoints)
- [Exemplo de requisição](#-exemplo-de-requisição)
- [Validação (DTO)](#-validação-dto)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Testes](#-testes)
- [Scripts úteis](#-scripts-úteis)
- [Autor](#-autor)

---

## 🚀 Tecnologias

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [class-validator](https://github.com/typestack/class-validator) e [class-transformer](https://github.com/typestack/class-transformer)
- [Vitest](https://vitest.dev/) (testes)
- [Oxlint](https://oxc.rs/) e [Prettier](https://prettier.io/) (qualidade de código)

---

## ✅ Funcionalidades

- [x] Cadastrar aluno (**C**reate)
- [x] Listar todos os alunos (**R**ead)
- [x] Buscar aluno por ID (**R**ead)
- [x] Atualizar aluno (**U**pdate)
- [x] Remover aluno (**D**elete)
- [x] Validação dos dados de entrada com DTOs
- [x] Tratamento de erro `404` quando o aluno não é encontrado

---

## 📦 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) rodando localmente **ou** uma conta no [MongoDB Atlas](https://www.mongodb.com/atlas)
- [Git](https://git-scm.com/)
- Um cliente HTTP, como [Postman](https://www.postman.com/)

---

## 🔧 Instalação

```bash
# Clone o repositório
git clone <URL-DO-SEU-REPOSITORIO>

# Entre na pasta do projeto
cd escola-api

# Instale as dependências
npm install
```

---

## ⚙️ Configuração

Configure a string de conexão com o MongoDB no `src/app.module.ts`:

```ts
MongooseModule.forRoot('mongodb://localhost:27017/escola')
```

> 💡 Para MongoDB Atlas, substitua pela sua connection string.
> Dica: use variáveis de ambiente (`.env`) para não expor credenciais no repositório.

---

## ▶️ Executando o projeto

```bash
# Modo desenvolvimento (com hot reload)
npm run start:dev

# Modo produção
npm run build
npm run start:prod
```

A API ficará disponível em: **http://localhost:3000**

> ⚠️ Se aparecer o erro `ECONNREFUSED 127.0.0.1:3000` no Postman, o servidor não está rodando. Suba a API antes de testar.

---

## 🛣️ Endpoints

Base URL: `http://localhost:3000/alunos`

| Método   | Rota          | Descrição                  |
| -------- | ------------- | -------------------------- |
| `POST`   | `/alunos`     | Cadastra um novo aluno     |
| `GET`    | `/alunos`     | Lista todos os alunos      |
| `GET`    | `/alunos/:id` | Busca um aluno pelo ID     |
| `PATCH`  | `/alunos/:id` | Atualiza um aluno          |
| `DELETE` | `/alunos/:id` | Remove um aluno            |

---

## 📮 Exemplo de requisição

**POST** `/alunos`

```json
{
  "nome": "Daniel Teixeira",
  "idade": 19,
  "matricula": "777",
  "cursos": ["engenharia de producao"]
}
```

**Resposta (201 Created)**

```json
{
  "_id": "6720f1c2a1b2c3d4e5f60789",
  "nome": "Daniel Teixeira",
  "idade": 19,
  "matricula": "777",
  "cursos": ["engenharia de producao"]
}
```

**Aluno não encontrado (404)**

```json
{
  "statusCode": 404,
  "message": "Aluno com ID 123 nao encontrado.",
  "error": "Not Found"
}
```

---

## 🛡️ Validação (DTO)

Os dados enviados são validados antes de chegar ao service.

| Campo       | Tipo       | Regra                       |
| ----------- | ---------- | --------------------------- |
| `nome`      | `string`   | Obrigatório, não vazio      |
| `idade`     | `number`   | Obrigatório, inteiro        |
| `matricula` | `string`   | Obrigatório, não vazio      |
| `cursos`    | `string[]` | Obrigatório, lista de texto |

Para ativar a validação globalmente, o `main.ts` deve conter:

```ts
app.useGlobalPipes(new ValidationPipe());
```

> ⚠️ Atenção ao JSON: falta de vírgula entre campos gera erro de sintaxe, e `matricula` deve ser enviada como **string** (`"777"`).

---

## 📁 Estrutura de pastas

```
escola-api/
├── src/
│   ├── alunos/
│   │   ├── dto/
│   │   │   ├── create-aluno.dto.ts
│   │   │   └── update-aluno.dto.ts
│   │   ├── aluno.module.ts
│   │   ├── alunos.controller.ts
│   │   └── alunos.service.ts
│   ├── schemas/
│   │   └── aluno.schema.ts
│   ├── app.module.ts
│   └── main.ts
├── test/
│   └── app.e2e-spec.ts
├── nest-cli.json
├── package.json
├── tsconfig.json
├── vitest.config.ts
└── vitest.config.e2e.ts
```

---

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes end-to-end
npm run test:e2e
```

---

## 📜 Scripts úteis

| Comando              | Descrição                      |
| -------------------- | ------------------------------ |
| `npm run start:dev`  | Inicia em modo desenvolvimento |
| `npm run build`      | Compila o projeto para `dist/` |
| `npm run start:prod` | Executa a versão compilada     |
| `npm run test`       | Roda os testes unitários       |
| `npm run test:e2e`   | Roda os testes end-to-end      |

---

## 👨‍💻 Autor

Desenvolvido por **Cauê Piettro**.

---

⭐ Se este projeto ajudou você, deixe uma estrela no repositório!