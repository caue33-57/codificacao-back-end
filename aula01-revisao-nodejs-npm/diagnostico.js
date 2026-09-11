//! importando modulo os
const os = require ('os')

const plataforma = os.platform();
const memoriaTotal = (os.totalmem() /(1024 **3)).toFixed(2);
const memorialivre = (os.freemem() /(1024 **3)).toFixed(2);
const processador = os.cpus();

console.log('=== DIAGNOSTICO DO SERVIDOR ===');
console.log(`Arquitetura OS; ${plataforma}`);
console.log(`Memoria ram total: ${memoriaTotal}`)
console.log(`Memoria ram livre: ${memorialivre}`)
console.log(`Cores do Processador: ${processador.length}`)
console.log(`Processador: ${processador[0].model}`)
console.log(`Velocidade do Processador: ${processador[0].speed}`)