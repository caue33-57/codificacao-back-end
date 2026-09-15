# 📋 Sistema de Registro de Logs

## 📌 Descrição

Este projeto foi desenvolvido durante os estudos da unidade curricular de **Codificação para Back-End**, utilizando **Node.js** e **JavaScript com ES Modules**.

A aplicação implementa um sistema simples de **registro de logs**, responsável por armazenar mensagens relacionadas aos eventos de execução de um sistema. Os registros são gravados em um arquivo chamado `syslog.log`, permitindo acompanhar informações importantes, como a inicialização do servidor e a conexão com o banco de dados.

Cada mensagem registrada recebe automaticamente a **data e o horário** de sua geração, facilitando a organização e o acompanhamento dos eventos.

---

## 🎯 Objetivos

O desenvolvimento desta atividade teve como principais objetivos:

* Praticar a utilização do Node.js no desenvolvimento Back-End;
* Trabalhar com módulos ES utilizando `import` e `export`;
* Manipular arquivos de forma assíncrona;
* Criar e organizar diretórios automaticamente;
* Trabalhar com caminhos de arquivos e diretórios;
* Registrar informações em arquivos de log;
* Utilizar funções reutilizáveis para formatação de dados;
* Aplicar `async/await` em operações assíncronas;
* Utilizar `try...catch` para tratamento de erros.

---

## 🛠️ Tecnologias e módulos utilizados

* **Node.js**
* **JavaScript**
* **ES Modules**
* **fs/promises** — criação e manipulação de arquivos e diretórios;
* **path** — manipulação de caminhos de arquivos e pastas;
* **url** — obtenção do caminho do arquivo atual.

---

## 📂 Estrutura do projeto

```text
aula04-logs/
│
├── Logs/
│   └── syslog.log
│
├── index.js
├── utilitario.js
└── package.json
```

### 📄 `index.js`

Arquivo principal da aplicação. Contém a função `salvarlogSistema()`, responsável por:

1. Definir o local onde os logs serão armazenados;
2. Criar a pasta `Logs`, caso ela ainda não exista;
3. Formatar a mensagem recebida;
4. Adicionar o registro ao arquivo `syslog.log`;
5. Informar no terminal se o registro foi realizado;
6. Tratar possíveis erros durante o processo.

### 📄 `utilitario.js`

Contém a função `formatLog()`, responsável por formatar as mensagens antes de serem armazenadas.

A função adiciona automaticamente a **data**, o **horário** e a **mensagem recebida**, mantendo um padrão para os registros.

### 📄 `syslog.log`

Arquivo responsável por armazenar os logs gerados pela aplicação. Novos registros são adicionados sem apagar as informações anteriores.

---

## ⚙️ Funcionamento

A função principal utilizada no projeto é:

```javascript
async function salvarlogSistema(mensagemLog)
```

Ela recebe uma mensagem como parâmetro e realiza o processo de gravação no arquivo de log.

Para criar a pasta de armazenamento, é utilizado:

```javascript
await fs.mkdir(pastaLog, { recursive: true });
```

A opção `recursive: true` permite que o diretório seja criado automaticamente caso ainda não exista.

Depois, a mensagem é enviada para a função `formatLog()`:

```javascript
const registro = formatLog(mensagemLog);
```

Após a formatação, o registro é adicionado ao arquivo utilizando:

```javascript
await fs.appendFile(arquivoLog, registro, 'utf-8');
```

O método `appendFile()` permite adicionar novas informações ao final do arquivo, preservando os registros anteriores.

---

## 📝 Exemplos de registros

A aplicação pode registrar mensagens como:

```javascript
salvarlogSistema('Inicialização do servidor concluída!\n');

salvarlogSistema('Conexão com banco de dados estabelecida!\n');
```

Os registros são armazenados no arquivo:

```text
Logs/syslog.log
```

O conteúdo seguirá o padrão definido pela função `formatLog()`, contendo a data, o horário e a mensagem registrada.

---

## 🚨 Tratamento de erros

Para evitar que erros durante a criação da pasta ou gravação do arquivo interrompam a aplicação, foi utilizado o bloco `try...catch`.

```javascript
try {
    // processamento do log
} catch (erro) {
    console.error('Erro ao registrar log:', erro);
}
```

Caso ocorra algum problema, o erro será apresentado no terminal para facilitar a identificação da falha.

---

## ▶️ Como executar o projeto

### 1. Verifique se o Node.js está instalado

No terminal, execute:

```bash
node --version
```

### 2. Acesse a pasta do projeto

Abra o terminal na pasta onde os arquivos estão localizados.

### 3. Execute a aplicação

```bash
node index.js
```

Após a execução, a pasta `Logs` será criada automaticamente e o arquivo `syslog.log` receberá os registros gerados pela aplicação.

---

## 📚 Conceitos praticados

Durante o desenvolvimento foram praticados conceitos importantes de Back-End, como:

* Módulos ES;
* Importação e exportação de funções;
* Manipulação de arquivos;
* Manipulação de diretórios;
* Caminhos absolutos e relativos;
* Operações assíncronas;
* `async/await`;
* Tratamento de exceções;
* Organização de arquivos;
* Registro e formatação de logs.

---

## ✅ Conclusão

A atividade possibilitou aplicar, na prática, conceitos fundamentais de **Node.js e desenvolvimento Back-End**, especialmente relacionados à manipulação de arquivos e diretórios.

O sistema desenvolvido demonstra uma forma simples e organizada de registrar eventos de uma aplicação, mantendo as informações armazenadas em um arquivo de log e adicionando automaticamente a data e o horário de cada registro.

Dessa forma, a atividade contribui para a compreensão de como sistemas de registro podem ser utilizados para acompanhar a execução de aplicações e auxiliar na identificação de possíveis ocorrências.
