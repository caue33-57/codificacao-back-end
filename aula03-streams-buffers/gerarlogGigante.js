import fs from 'fs';

const data = new Date().toISOString().split('T')[0];
const hora = new Date().toLocaleDateString();

const streamEscrita = fs.createWriteStream('servidor.log');
console.log('Gerando arquivo de log simulado....');

for( let i = 0; i < 40000; i++){
    const tipo = i % 7 === 0? 'ERROR' : 'INFO';
    streamEscrita.write(`[${data} - ${hora}] Linha ${i}:status 200
        - Mensagem de teste ${tipo} \n`);
}
streamEscrita.end(); 