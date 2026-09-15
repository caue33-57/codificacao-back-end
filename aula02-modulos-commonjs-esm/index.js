import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { formatLog } from './utilitario.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function salvarlogSistema(mensagemLog){
    try{
        const pastaLog = path.join(__dirname, 'Logs');
        const arquivoLog = path.join(pastaLog, 'syslog.log');

        await fs.mkdir(pastaLog, {recursive:true});
        const registro = formatLog(mensagemLog);
        await fs.appendFile(arquivoLog, registro, 'utf-8');
        
        console.log('Log Registrado com sucesso...');
    }catch(erro){
        console.error('Erro ao registrar log:', erro);
    }
}
    
salvarlogSistema('Inicialização do servidor concluida!\n');
salvarlogSistema('Conexão com banco de dados estabelicada!\n');