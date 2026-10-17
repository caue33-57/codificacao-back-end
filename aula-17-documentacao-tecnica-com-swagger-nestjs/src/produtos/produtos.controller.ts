import { Controller,Post, Body} from "@nestjs/common";
import { ApiTags,ApiOperation,ApiResponse} from "@nestjs/swagger";
 import { CriarProdutosDto } from "./dto/criar-produto.dto.js";

 @ApiTags('produtos')
 @Controller('produtos')
 export class ProdutosController {
    @Post()
    @ApiOperation({
        summary:'Cadastrar um novo produto no estoque',
    })
    @ApiResponse({
        status: 201,
        description:'produto cadastrado com sucesso.'
    })
    @ApiResponse({
        status: 400,
        description:'Playload enviado contem dados, mal formatados e/ou invalidos'
    })
    async criar(@Body()criarprodutosdto: CriarProdutosDto){
        return{
            id: 67,
            ...criarprodutosdto,
            criadoEm: new Date().toLocaleDateString(),
        };
    }
 }