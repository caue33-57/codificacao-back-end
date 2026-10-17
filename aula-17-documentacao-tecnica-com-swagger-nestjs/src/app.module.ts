import { Module } from '@nestjs/common';
import { ProdutosController } from './produtos/produtos.controller.js';

@Module({
  imports: [],
  controllers: [ProdutosController],
  providers: [],
})
export class AppModule {}
