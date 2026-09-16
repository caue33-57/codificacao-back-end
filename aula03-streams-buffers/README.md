# Processamento de Logs com Streams

## 📌 Descrição

Este projeto foi desenvolvido como parte dos estudos de **Codificação para Back-End**, utilizando **Node.js** para trabalhar com processamento de arquivos por meio de **Streams**.

A atividade consiste na geração e no processamento de um arquivo de logs simulado. Inicialmente, a aplicação cria o arquivo `servidor.log` contendo **40.000 linhas**, classificadas entre os tipos `ERROR` e `INFO`. Em seguida, outro processo realiza a leitura desse arquivo linha por linha e identifica os registros que possuem a palavra `ERROR`.

As linhas que correspondem aos erros são armazenadas em um segundo arquivo chamado `apenas_erros.log`, enquanto a aplicação também contabiliza a quantidade total de erros encontrados durante o processamento.

O projeto utiliza Streams para realizar a leitura e escrita dos arquivos de forma eficiente, evitando a necessidade de carregar todo o conteúdo do arquivo na memória de uma única vez.

---

## 🎯 Objetivos

O desenvolvimento desta atividade teve como objetivos:

* Compreender o funcionamento de Streams no Node.js;
* Trabalhar com leitura de arquivos utilizando `fs.createReadStream()`;
* Trabalhar com escrita de arquivos utilizando `fs.createWriteStream()`;
* Processar arquivos linha por linha utilizando o módulo `readline`;
* Identificar registros específicos dentro de um arquivo;
* Filtrar linhas que possuem a informação `ERROR`;
* Criar um novo arquivo contendo somente os erros encontrados;
* Contabilizar a quantidade de erros durante o processamento;
* Monitorar o consumo de memória da aplicação;
* Trabalhar com arquivos de grande quantidade de dados.

---

## 🛠️ Tecnologias utilizadas

* **Node.js**
* **JavaScript**
* **fs**
* **readline**
* **Streams**

---

## 📂 Arquivos do projeto

### `servidor.log`

Arquivo de log simulado gerado pela aplicação.

O arquivo contém **40.000 linhas**, sendo que algumas são classificadas como `ERROR` e outras como `INFO`.

### `apenas_erros.log`

Arquivo criado durante o processamento. Ele recebe somente as linhas do `servidor.log` que possuem a classificação `ERROR`.

---

## ⚙️ Geração dos logs

O arquivo `servidor.log` é criado utilizando:

```javascript
const streamEscrita = fs.createWriteStream('servidor.log');
```

Em seguida, um laço de repetição gera 40.000 registros:

```javascript
for (let i = 0; i < 40000; i++) {
```

A cada registro, o sistema define se a linha será `ERROR` ou `INFO`:

```javascript
const tipo = i % 7 === 0 ? 'ERROR' : 'INFO';
```

Dessa forma, os registros são distribuídos automaticamente durante a geração do arquivo.

---

## 🔎 Filtragem dos erros

Para realizar o processamento, o projeto utiliza:

```javascript
const streamLeitura = fs.createReadStream('servidor.log');
```

A leitura é realizada utilizando o módulo `readline`, permitindo que o arquivo seja processado **linha por linha**:

```javascript
const leitorLinhaALinha = readline.createInterface({
    input: streamLeitura,
    crlfDelay: Infinity
});
```

Durante a leitura, o sistema verifica se cada linha contém a palavra `ERROR`:

```javascript
if (linha.includes('ERROR')) {
```

Quando um erro é encontrado, a linha é gravada no arquivo `apenas_erros.log` e o contador é incrementado:

```javascript
streamEscrita.write(linha + '\n');
totalErros++;
```

---

## 💾 Monitoramento de memória

O projeto também utiliza:

```javascript
process.memoryUsage();
```

para acompanhar o consumo de memória durante o processamento.

São exibidas informações relacionadas ao:

* **RSS** — memória utilizada pelo processo;
* **Heap utilizado** — memória utilizada pelo JavaScript.

O consumo é exibido no início e no final do processamento, permitindo observar o comportamento da aplicação durante a leitura do arquivo.

---

## ▶️ Como executar

No terminal, dentro da pasta do projeto, execute primeiro o arquivo responsável pela geração do log:

```bash
node gerarLogGigante.js
```

Depois, execute o arquivo responsável pela filtragem:

```bash
node filtrarErros.js
```

Ao final do processamento, será exibida no terminal a quantidade de erros encontrados.

---

## 📊 Resultado esperado

Após a execução, o projeto deverá possuir:

```text
servidor.log
apenas_erros.log
```

O arquivo `servidor.log` conterá os 40.000 registros gerados, enquanto `apenas_erros.log` conterá somente os registros classificados como `ERROR`.

No terminal, também serão apresentadas informações semelhantes a:

```text
iniciando processamento com stream...
[Inicio] RSS: XX.XX MB | Heap Utilizado: XX.XX MB
processamento concluindo!

quantidade de Erros Encontrados: XXXX linhas.

[FIM] RSS: XX.XX MB | Heap Utilizado: XX.XX MB
```

---

## 📚 Conclusão

A atividade permitiu colocar em prática o conceito de **Streams no Node.js**, demonstrando como arquivos com grande quantidade de informações podem ser processados de maneira gradual, por meio da leitura e escrita de dados em fluxo.

Além da filtragem dos registros, o projeto possibilitou trabalhar com geração de arquivos, processamento linha por linha, contagem de ocorrências e monitoramento do consumo de memória, reforçando conceitos importantes para o desenvolvimento Back-End.
