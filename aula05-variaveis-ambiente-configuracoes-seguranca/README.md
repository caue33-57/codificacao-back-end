# Aula 05 - Variáveis de Ambiente, Configurações e Segurança

Nesta aula, foram estudados conceitos relacionados ao uso de **variáveis de ambiente** em aplicações Node.js, com foco na organização das configurações e na proteção de informações sensíveis.

Foi utilizado o pacote **dotenv**, que permite carregar informações armazenadas em um arquivo `.env` para dentro da aplicação por meio do objeto `process.env`.

## 🎯 Objetivo

O objetivo desta aula é compreender como separar as configurações da aplicação do código-fonte, evitando que informações importantes, como senhas, chaves de acesso, URLs de banco de dados e outras credenciais, sejam inseridas diretamente no código.

Essa prática contribui para uma aplicação mais **organizada, segura e fácil de configurar** em diferentes ambientes.

## 📚 Conteúdos estudados

### Variáveis de ambiente

As variáveis de ambiente são utilizadas para armazenar informações de configuração que podem variar de acordo com o ambiente em que a aplicação está sendo executada.

No Node.js, essas informações podem ser acessadas utilizando:

```js
process.env.NOME_DA_VARIAVEL