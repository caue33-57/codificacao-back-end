# ⚡ Aula 14 — Servidor Edge Runtime

<p align="center">
  **API de horário do servidor utilizando TypeScript e Edge Runtime**
</p>

---

## 📖 Sobre o projeto

Este projeto foi desenvolvido como parte dos estudos de desenvolvimento Back-End e tem como objetivo demonstrar a criação de uma API utilizando **TypeScript** e o ambiente **Edge Runtime**.

A aplicação disponibiliza um endpoint HTTP que retorna informações sobre a execução da função, incluindo uma mensagem, o horário atual em formato ISO 8601, a região identificada no ambiente de desenvolvimento e o tempo aproximado de execução.

O projeto utiliza a estrutura de API da Vercel e pode ser executado localmente para fins de aprendizado e testes.

## 🎯 Objetivos

* Compreender o funcionamento do Edge Runtime.
* Criar um endpoint utilizando TypeScript.
* Trabalhar com requisições e respostas HTTP.
* Retornar dados estruturados no formato JSON.
* Manipular datas e horários com JavaScript.
* Calcular o tempo de execução de uma função.
* Testar uma API em ambiente local.

## 🛠️ Tecnologias utilizadas

| Tecnologia   | Finalidade                           |
| ------------ | ------------------------------------ |
| TypeScript   | Desenvolvimento da função da API     |
| Node.js      | Ambiente de execução das ferramentas |
| npm          | Gerenciamento de dependências        |
| Vercel       | Desenvolvimento e hospedagem da API  |
| Edge Runtime | Execução da função em ambiente Edge  |
| HTTP e JSON  | Comunicação e formato dos dados      |

## 📂 Estrutura do projeto

```text
aula-14-servidor-edge-runtime/
│
├── api/
│   └── hora-servidor.ts
│
├── .gitignore
├── package.json
└── README.md
```

### 📄 Descrição dos arquivos

* **`api/hora-servidor.ts`** — contém a função responsável por processar a requisição e retornar os dados.
* **`.gitignore`** — define os arquivos e diretórios que não devem ser enviados ao Git.
* **`package.json`** — contém as informações do projeto, dependências e scripts.
* **`README.md`** — documenta a instalação, execução e utilização da aplicação.

## ⚙️ Pré-requisitos

Antes de começar, verifique se você possui:

* [Node.js](https://nodejs.org/) instalado.
* npm instalado junto com o Node.js.
* [Visual Studio Code](https://code.visualstudio.com/) ou outro editor de código.
* Acesso ao terminal para executar os comandos.

## 🚀 Como executar o projeto

### 1. Acesse a pasta do projeto

Abra o terminal integrado do VS Code e execute:

```bash
cd aula-14-servidor-edge-runtime
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor local

```bash
npx vercel dev
```

Caso seja solicitado, conclua a configuração inicial da Vercel CLI.

### 4. Acesse a API

Com o servidor em execução, abra o navegador no endereço:

```text
http://localhost:3000/api/hora-servidor
```

Se o projeto estiver configurado corretamente, a API retornará uma resposta JSON.

> **Observação:** o comando `npx vercel dev` pressupõe que o projeto esteja configurado para execução com a Vercel CLI. Confira o `package.json` e a configuração do projeto caso a inicialização apresente erros.

## 🌐 Endpoint da aplicação

| Propriedade         | Valor                |
| ------------------- | -------------------- |
| Método HTTP         | `GET`                |
| Caminho             | `/api/hora-servidor` |
| Formato de resposta | JSON                 |
| Resposta esperada   | `200 OK`             |

### Exemplo de resposta

```json
{
  "mensagem": "Função executada na borda de rede",
  "horarioDoServidor": "2026-10-06T21:00:00.000Z",
  "regiao": "local-dev",
  "tempoDeExecucao": "1ms"
}
```

*Os valores de horário e duração são ilustrativos e variam conforme cada execução.*

## 💻 Funcionamento do código

O arquivo `api/hora-servidor.ts` contém a implementação principal da API.

### 1. Configuração do ambiente

```typescript
export const config = {
  runtime: 'edge',
};
```

Essa configuração declara o ambiente Edge Runtime no formato de configuração utilizado pelo projeto. A compatibilidade exata depende da versão e do modelo de funções da plataforma Vercel.

### 2. Captura do horário inicial

```typescript
const inicio = new Date();
```

Cria um objeto de data para registrar o instante inicial da execução.

### 3. Geração do horário atual

```typescript
horarioDoServidor: new Date().toISOString(),
```

Obtém a data e a hora atuais e converte o valor para o formato ISO 8601, normalmente representado em UTC.

### 4. Cálculo do tempo de execução

```typescript
tempoDeExecucao: `${Date.now() - inicio.getTime()}ms`,
```

Calcula a diferença entre o instante atual e o instante inicial, expressando o resultado em milissegundos. É uma medição aproximada da duração até esse ponto da função.

### 5. Construção da resposta HTTP

```typescript
return new Response(
  JSON.stringify({
    mensagem: 'Função executada na borda de rede',
    horarioDoServidor: new Date().toISOString(),
    regiao: 'local-dev',
    tempoDeExecucao: `${Date.now() - inicio.getTime()}ms`,
  }),
  {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  },
);
```

O código transforma o objeto em JSON e cria uma resposta HTTP com status `200` e cabeçalho indicando o formato do conteúdo.

## ⚡ O que é Edge Runtime?

O Edge Runtime é um ambiente de execução voltado a funções leves que podem ser executadas em infraestrutura distribuída próxima dos usuários.

Dependendo da plataforma e da arquitetura da aplicação, esse modelo pode reduzir a latência e melhorar o tempo de resposta.

### Principais características

* **Distribuição geográfica:** possibilita executar funções em infraestrutura Edge.
* **Baixa latência:** pode aproximar o processamento dos usuários.
* **Respostas HTTP:** permite criar funções que recebem requisições e retornam respostas.
* **Ambiente específico:** possui APIs e limitações diferentes das encontradas em um ambiente Node.js completo.

> A utilização do Edge Runtime não garante, por si só, menor latência. O resultado depende da infraestrutura, da região, da lógica executada e das condições da rede.

## 🧪 Como testar

1. Inicie o servidor local.
2. Acesse `/api/hora-servidor` no navegador.
3. Verifique se a resposta está no formato JSON.
4. Confira se o horário está no formato ISO 8601.
5. Atualize a página para obter uma nova resposta.

Também é possível testar o endpoint com ferramentas como o Postman ou o Insomnia.

## 🔒 Boas práticas

* Não exponha senhas, tokens ou credenciais no código.
* Mantenha as dependências atualizadas.
* Utilize o `.gitignore` para evitar o envio de arquivos desnecessários.
* Verifique a compatibilidade do runtime com as APIs utilizadas.
* Não trate a região `local-dev` como uma localização real detectada automaticamente: neste exemplo, ela é um valor fixo definido no código.

## 📚 Aprendizados

Ao concluir este projeto, será possível praticar conceitos fundamentais de desenvolvimento Back-End, incluindo:

* Criação de endpoints HTTP.
* Utilização de TypeScript em funções de servidor.
* Manipulação de datas e horários.
* Serialização de dados com JSON.
* Construção de respostas HTTP.
* Introdução ao Edge Runtime.
* Execução e testes locais de APIs.

## 👨‍💻 Autor

**Cauê Pietro Gonçalves Leite**

Projeto desenvolvido para fins educacionais durante os estudos de desenvolvimento Full Stack, com foco em tecnologias Back-End.

## 📄 Licença

Projeto destinado a fins educacionais e de aprendizado.

---

<p align="center">
  🚀 Desenvolvido para praticar conceitos de APIs, TypeScript e Edge Runtime.
</p>
