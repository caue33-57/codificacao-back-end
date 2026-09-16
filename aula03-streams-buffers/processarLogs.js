import fs from 'fs';
import readline from 'readline';


async function filtrarErros(){
    console.log('iniciando processamento com stream...');
exibirConsumoMemoria('Inicio');

const streamleitura = fs.createReadStream('servidor.log');
const streamEscrita = fs.createWriteStream('apenas_erros.log');
const leitorLinhaALinha = readline.createInterface({input: streamleitura,crlfDelay: Infinity});

let totalErros = 0;
for await(const linha of leitorLinhaALinha){
    if(linha.includes('ERROR')){
        streamEscrita.write(linha + '\n');
        totalErros++;
    }
}
exibirConsumoMemoria('FIM');
console.log('processamento concluindo!\n');
console.log(`quantidade de Erros Encontrados: ${totalErros} linhas.\n`);

}
filtrarErros();

function  exibirConsumoMemoria(consumo){
    const memoria = process.memoryUsage();
    const rssMB = (memoria.rss / 1024 / 1024).toFixed(2);
    const heapMB = (memoria.rss / 1024 / 1024).toFixed(2);
    console.log (`[${consumo}] RSS  :${rssMB} MB | Heap Utilizado: ${heapMB} MB`);
}
    
