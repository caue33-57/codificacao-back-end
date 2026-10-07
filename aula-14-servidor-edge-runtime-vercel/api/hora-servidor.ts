export const  config= {
    runtime: 'edge',
};

export default async function handler(req: Request) {
    const inicio = new Date();
    return new Response (
        JSON.stringify({
            mensagem: 'Funçao executada na borda de rede',
            horarioDoServidor: new Date().toISOString(),
            regiao: 'local-dev',
            tempoDeExecuçao: `${Date.now() - inicio.getTime()}ms`,
        }),
        {
            status: 200,
            headers:{
                'content-type':'application/json',
            },
        },
    );
    
}