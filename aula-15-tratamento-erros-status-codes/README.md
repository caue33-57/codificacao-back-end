# 🚀 Aula 15 — Tratamento de Erros com NestJS

## 📚 Sobre o Projeto

Este projeto faz parte dos estudos de desenvolvimento Back-End com **Node.js e NestJS**, com foco no tratamento de erros e na organização de uma API REST.

O objetivo é compreender como identificar, controlar e retornar respostas adequadas quando ocorrem erros durante a execução de uma aplicação, garantindo mais segurança, organização e confiabilidade no desenvolvimento de APIs.

## 🎯 Objetivos da Aula

* Compreender a importância do tratamento de erros no Back-End.
* Conhecer os mecanismos de exceção do NestJS.
* Aprender a retornar respostas HTTP adequadas para diferentes situações.
* Organizar controllers e services de maneira eficiente.
* Desenvolver e testar endpoints relacionados a produtos.
* Conhecer a estrutura de testes automatizados do projeto.

## 🛠️ Tecnologias Utilizadas

* **Node.js** — ambiente de execução JavaScript.
* **TypeScript** — linguagem utilizada no desenvolvimento.
* **NestJS** — framework para construção de aplicações Back-End.
* **npm** — gerenciador de pacotes.
* **Jest** — ferramenta de testes, caso esteja configurada no projeto.

## 📁 Estrutura do Projeto

```text
aula-15-tratamento-erros/
├── node_modules/
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   ├── produtos.controller.spec.ts
│   └── produtos.service.ts
├── package.json
├── package-lock.json
└── README.md
```

**Principais arquivos:**

* `main.ts`: ponto de entrada da aplicação NestJS, responsável por inicializar o servidor.
* `app.module.ts`: módulo principal que organiza os componentes da aplicação.
* `app.controller.ts`: responsável por receber e tratar requisições HTTP da aplicação principal.
* `app.service.ts`: concentra a lógica de serviço relacionada ao controller principal.
* `produtos.service.ts`: arquivo destinado à lógica de negócio relacionada aos produtos.
* `produtos.controller.spec.ts`: arquivo de testes do controller de produtos, conforme sua configuração.
* `app.controller.spec.ts`: arquivo de testes do controller principal.

## ⚠️ O Que é Tratamento de Erros?

O tratamento de erros é uma prática fundamental no desenvolvimento de aplicações. Ele permite identificar situações inesperadas e responder de forma controlada, evitando falhas sem explicação e retornando informações adequadas ao cliente da API.

No NestJS, podemos utilizar exceções específicas para representar diferentes situações.

### Exemplos de exceções do NestJS

| Exceção                        | Status HTTP | Finalidade               |
| ------------------------------ | ----------: | ------------------------ |
| `BadRequestException`          |         400 | Requisição inválida      |
| `UnauthorizedException`        |         401 | Usuário não autenticado  |
| `ForbiddenException`           |         403 | Acesso não permitido     |
| `NotFoundException`            |         404 | Recurso não encontrado   |
| `ConflictException`            |         409 | Conflito na operação     |
| `InternalServerErrorException` |         500 | Erro interno do servidor |

Essas exceções ajudam a padronizar as respostas da API e facilitam a identificação de problemas durante o desenvolvimento.

## 💻 Exemplo Prático

Um exemplo de tratamento de erro em um service do NestJS:

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProdutosService {
  private produtos = [
    { id: 1, nome: 'Notebook', preco: 3500 },
    { id: 2, nome: 'Mouse', preco: 100 },
  ];

  listarTodos() {
    return this.produtos;
  }

  buscarPorId(id: number) {
    const produto = this.produtos.find(
      (item) => item.id === id,
    );

    if (!produto) {
      throw new NotFoundException(
        `Produto com ID ${id} não encontrado.`,
      );
    }

    return produto;
  }
}
```

### Como funciona o exemplo?

1. O service mantém uma lista de produtos para demonstração.
2. O método `listarTodos()` retorna os produtos cadastrados na lista.
3. O método `buscarPorId()` procura um produto pelo identificador.
4. Se o produto não existir, o NestJS lança uma exceção `NotFoundException`.
5. A API retorna automaticamente uma resposta HTTP `404 Not Found`.

**Observação:** esse código é um exemplo didático. Ele deve ser adaptado aos métodos e às propriedades que já existem no seu projeto.

## ▶️ Como Executar o Projeto

### 1. Abrir o terminal

No VS Code, abra o terminal integrado pelo menu **Terminal → Novo Terminal**.

### 2. Acessar a pasta do projeto

Entre na pasta correspondente à aula 15:

```bash
cd aula-15-tratamento-erros
```

Se o terminal já estiver dentro dessa pasta, não é necessário executar esse comando.

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar a aplicação

Em projetos NestJS com os scripts padrão, utilize:

```bash
npm run start:dev
```

O servidor será iniciado conforme a configuração do projeto. Verifique o terminal para confirmar a porta utilizada.

## 🧪 Executando os Testes

Para executar os testes automatizados, caso os scripts estejam configurados no `package.json`, utilize:

```bash
npm run test
```

Os testes ajudam a verificar se os controllers e services estão funcionando conforme o comportamento esperado.

## 📌 Importância do Tratamento de Erros

O tratamento adequado de erros oferece diversos benefícios:

* Melhora a experiência de quem consome a API.
* Facilita a identificação de falhas.
* Evita respostas genéricas para situações conhecidas.
* Ajuda a manter a consistência dos códigos HTTP.
* Torna a aplicação mais previsível e fácil de manter.
* Contribui para a segurança, evitando a exposição desnecessária de detalhes internos.

## ✅ Conclusão

Nesta aula, o foco é compreender a importância do tratamento de erros no desenvolvimento de APIs utilizando NestJS. Por meio de exceções específicas, é possível controlar situações inesperadas e retornar respostas HTTP coerentes com cada problema.

A organização entre controllers, services e testes também contribui para a criação de aplicações mais estruturadas, confiáveis e fáceis de evoluir.

O conhecimento adquirido nesta atividade serve como base para desenvolver APIs mais robustas, melhorar a depuração de problemas e aplicar boas práticas de programação no Back-End.

---

**Tecnologias:** Node.js • TypeScript • NestJS • npm

**Projeto:** Aula 15 — Tratamento de Erros

**Área de estudo:** Desenvolvimento Back-End
