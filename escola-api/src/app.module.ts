import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlunosModule } from './alunos/aluno.module.js';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/escola_dbn'),
AlunosModule,
],

})
export class AppModule {}
