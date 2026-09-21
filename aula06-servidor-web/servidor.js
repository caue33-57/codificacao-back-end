import http from 'http';

const servidorWeb = http.createServer((req, res) =>{
    console.log(`[LOG]Metodo Recebido: ${req.method} | Rota: ${req.url}`);
     
    const cabecalhoPadrao ={
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',

    };
    
    if (req.url ==='/status'){
        res.writeHead(200,{
            ...cabecalhoPadrao,
            'Content-Type': 'application/json'
    });
     
    res.end(JSON.stringify({
        servidorWeb: 'Online'
    }));
    
    }else {
        res.writeHead(404,{
            ...cabecalhoPadrao,
            'content-type': 'application/json'
     });
    
     res.end(JSON.stringify({
        erro: 'pagina nao encontrada!'
     }));
    }
});

servidorWeb.listen(300, ()=>{

    console.log('Servidor Web ativo!');
    console.log('Porta: 3000');
});