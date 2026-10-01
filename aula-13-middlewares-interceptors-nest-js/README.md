📁 Estrutura do projeto

src/
│
├── logger/
│   ├── logger.middleware.spec.ts
│   └── logger.middleware.ts
│
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts

🧩 Entendendo cada arquivo

🪵 logger/logger.middleware.ts

É o arquivo responsável pelo Middleware de Logger.

O Middleware pode interceptar uma requisição antes que ela chegue ao Controller.

Exemplo:

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} ${req.originalUrl}`);

    next();
  }
}

🔎 O que cada parte significa?

Request

Representa a requisição recebida.

req

Pode fornecer informações como:

método HTTP;

URL;

parâmetros;

headers;

body.

Response

Representa a resposta que será enviada ao cliente.

res

NextFunction

Permite continuar o processamento da requisição.

next();

⚠️ O next() é importante porque permite que a requisição continue para o próximo estágio da aplicação.

🪵 Logger

O Logger pode registrar informações como:

GET /
POST /usuarios
PATCH /usuarios/1
DELETE /usuarios/1

Isso ajuda durante o desenvolvimento porque permite acompanhar o comportamento da API pelo terminal.

Exemplo:

GET /
GET /usuarios
POST /usuarios
DELETE /usuarios/5

🎯 app.controller.ts

O Controller é responsável por lidar com as rotas da aplicação.

Exemplo:

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

O decorator:

@Get()

indica que o método será executado para uma requisição HTTP GET.

⚙️ app.service.ts

O Service concentra a lógica utilizada pelo Controller.

Exemplo:

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

O Controller chama o Service:

Controller
     ↓
Service
     ↓
Resultado

Essa separação ajuda a manter o código organizado.

📦 app.module.ts

O Module organiza os componentes da aplicação.

É nele que podemos registrar:

Controllers;

Providers;

Imports;

Middleware;

outros módulos.

Exemplo básico:

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

O AppModule funciona como um dos principais pontos de organização da aplicação.

🚪 main.ts

O arquivo main.ts é o ponto de entrada da aplicação.

Exemplo:

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();

Quando executamos o projeto, o NestJS inicia a aplicação a partir desse arquivo.

🧪 Testes

O projeto possui arquivos:

app.controller.spec.ts
logger/logger.middleware.spec.ts

Os arquivos .spec.ts são utilizados para testes.

Eles ajudam a verificar se os componentes da aplicação estão funcionando como esperado.

Exemplo:

describe('AppController', () => {
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

E para o Middleware:

describe('LoggerMiddleware', () => {
  it('should be defined', () => {
    expect(new LoggerMiddleware()).toBeDefined();
  });
});

🔄 Fluxo da aplicação

Uma forma simples de visualizar o funcionamento é:

┌─────────────────────┐
│       CLIENTE       │
│ Browser / Postman   │
└──────────┬──────────┘
           │
           │ HTTP Request
           ▼
┌─────────────────────┐
│      MIDDLEWARE     │
│   LoggerMiddleware  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│      CONTROLLER     │
│   AppController     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│       SERVICE       │
│     AppService      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│      RESPONSE       │
└─────────────────────┘

🧠 O que é Middleware?

Middleware é uma função que participa do processamento de uma requisição.

Ele pode ser utilizado para:

🪵 Logs;

🔐 autenticação;

🛡️ validações;

📊 monitoramento;

🔎 análise de requisições;

⚙️ processamento antes do Controller.

Um dos grandes benefícios é evitar repetição de código.

Por exemplo, em vez de colocar:

console.log(req.method);

em todas as rotas, podemos centralizar o registro em um Middleware.

🌐 Métodos HTTP

Durante o desenvolvimento de APIs, alguns métodos são muito utilizados:

Método

Utilização

GET

Buscar informações

POST

Criar informações

PUT

Atualizar informações

PATCH

Atualizar parcialmente

DELETE

Remover informações

Exemplos:

GET    /usuarios
POST   /usuarios
PATCH  /usuarios/10
DELETE /usuarios/10

🛠️ Como executar o projeto

1️⃣ Instalar as dependências

Abra o terminal na pasta do projeto:

npm install

2️⃣ Executar em desenvolvimento

npm run start:dev

O NestJS ficará observando as alterações no código.

3️⃣ Executar normalmente

npm run start

4️⃣ Executar os testes

npm test

5️⃣ Executar testes acompanhando alterações

npm run test:watch

🌐 Acessando a API

Depois de iniciar o projeto:

npm run start:dev

A aplicação normalmente estará disponível em:

http://localhost:3000

Você pode testar a API usando:

🌐 Navegador

📮 Postman

🔵 Insomnia

💻 Thunder Client

🧪 outras ferramentas HTTP

🔍 Testando o Logger

Com o projeto rodando:

npm run start:dev

acesse:

http://localhost:3000

Ao realizar uma requisição, o Middleware poderá registrar no terminal algo semelhante a:

GET /

Se outra rota for acessada:

GET /usuarios

o Logger poderá apresentar:

GET /usuarios

🎓 O que foi aprendido

Ao finalizar esta etapa, os principais conceitos são:

Estrutura básica do NestJS

Organização por módulos

Criação de Controllers

Utilização de Services

Ponto de entrada com main.ts

Conceito de Middleware

Criação de Logger Middleware

Request

Response

NextFunction

next()

Métodos HTTP

Testes com arquivos .spec.ts

Execução da aplicação com npm

💡 Por que esse conhecimento é importante?

Middleware e Logger são conceitos muito utilizados em aplicações reais.

Em projetos maiores, logs podem ajudar a identificar:

Qual método foi utilizado?
Qual rota foi acessada?
Quando uma requisição aconteceu?
Qual parte da aplicação está sendo executada?

Além disso, o conceito de Middleware é utilizado como base para outros recursos importantes do desenvolvimento backend.

🏗️ Arquitetura estudada

              CLIENTE
                 │
                 ▼
          HTTP REQUEST
                 │
                 ▼
        ┌────────────────┐
        │   MIDDLEWARE   │
        │     LOGGER     │
        └───────┬────────┘
                │
                ▼
        ┌────────────────┐
        │   CONTROLLER   │
        └───────┬────────┘
                │
                ▼
        ┌────────────────┐
        │     SERVICE    │
        └───────┬────────┘
                │
                ▼
        HTTP RESPONSE

📚 Próximos assuntos

Depois dessa etapa, a sequência natural de estudos em NestJS inclui:

🔐 Guards

🔄 Interceptors

🧪 Pipes

❌ Exception Filters

✅ Validação de dados

📦 DTOs

🔑 Autenticação

🛡️ Autorização

🗄️ Banco de dados

📖 Swagger

🧪 Testes unitários e E2E

🚀 Deploy

📌 Comandos rápidos

# Instalar dependências
npm install

# Desenvolvimento
npm run start:dev

# Executar aplicação
npm run start

# Testes
npm test

# Testes em modo watch
npm run test:watch

👨‍💻 Projeto de estudos

Este projeto faz parte dos estudos de Desenvolvimento Back-end com NestJS e TypeScript.

A finalidade é praticar a construção de APIs utilizando uma arquitetura organizada e compreender o fluxo de uma requisição desde o cliente até a resposta da aplicação.