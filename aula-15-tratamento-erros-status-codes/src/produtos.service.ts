import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutosService {
    produtos = [
        {id: 1, nome: 'arroz Namorados', preco: 9.99},
        {id: 2, nome: 'Feijao timbiras ', preco: 7,00},
        {id: 3, nome: 'Marcarao Galo', preco: 5.99},
        {id: 4, nome: 'açucar uniao', preco: 4.99},
        {id: 5, nome: 'sal lebre', preco: 2.99},
    ];
    listarprodutos(){
        return this.produtos;
    }
}