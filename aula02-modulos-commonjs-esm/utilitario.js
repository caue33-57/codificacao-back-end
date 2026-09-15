    export function formatLog(mensagem) {
        const dataAtual = new Date()
        .toISOString().split('T')[0];

        const horaAtual = new Date()
        .toISOString();
        return(`[${dataAtual} - ${horaAtual} : ${mensagem}]`);
    
    }