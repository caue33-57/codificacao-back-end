import express from 'express';

const app = express();
app.use(express,json());

process.on('uncaughtException',(err) =>{
console.error('[ERRO DE PROCESSO - uncaughtException];', err.message);
})
process.on('unhandledRejection',(reason) =>{
console.error('[PROMISE REJEIRADA - uhandledRejrction]:', reason);

});

app.get('/sucesso',(req, res) =>{
    res.json({success: true, mensage:'Operacao Realizada com sucesso!'});
});
 
app.get('/erro-sincrono',(req, res, next) =>{
try{
    throw new Error('falha ao processo a regra de negocios');
}catch(erro){
    next(erro);

}
});

app.get('erro-assincrono',async (req, res, next) =>{
    try{
        await Promise.reject(new Error('Error na consulta no banco de dados externos'));
    }catch(erro){
        next(erro);
    }
});
       
    
