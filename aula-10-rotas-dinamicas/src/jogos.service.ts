import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class JogosService {
    private jogos =[
        {id:1, titulo: 'Minecraft', estudio:'Mojang'},
        {id:2, titulo: 'the legend of zelda : Ocarina of time', estudio:'Nintendo'},
        {id:3, titulo: 'Grand theft Auto V', estudio:'Rockstar Noth'},
        {id:4, titulo: 'elden Ring', estudio:'fromSoftware'},
        {id:5, titulo: 'God of War', estudio:'Santa Monica Studio'},
        ];
        buscarPortId(id:number){
            const jogo = this.jogos.find((j)=> j.id === id);
            if(!jogo){
                throw new NotFoundException(`jogo com ID ${id} nao localizado em nosso estoque,`);
            }
            return jogo;
        }
}