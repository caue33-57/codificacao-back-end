import { Controller } from "@nestjs/common";
import { ProdutosService } from "./produtos.service.js";

@Controller('produtos')
 export class ProdutosController{
    constructor(private readonly produtosService: ProdutosService) {}
 }