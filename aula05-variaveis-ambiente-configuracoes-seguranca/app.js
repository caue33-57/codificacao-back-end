import dotenv from 'dotenv';
dotenv.config();

function iniciarAplicacao(){
    const porta = process.env.PORT || 8080;
    const apiKey =process.env.API_KEY_PAGAMENTO;
    const dbUrl = process.env.DATABASE_URL;

    if(!apiKey){
        console.error(`[ERRO CRITICO]: A chave API_KEY_PAGAMENTO nao esta definida nas variaves de ambiente`);
        process.exit(1);
    }
    console.log('=== SERVICO DE CONFIGURAÇAO CARREGADO ||| ===');
    console.log('serviço rodando na porta ${porta}');
    console.log('banco de dados: ${dbUrl}');
    console.log('APIKey ${apikey}');
    console.log('Status da API: chave de tamanho ${apikey.length} autenticada.')
}

iniciarAplicacao();