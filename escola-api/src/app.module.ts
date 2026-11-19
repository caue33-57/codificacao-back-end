import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlunosModule } from './alunos/aluno.module.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi from 'joi';




@Module({
  imports: [
    AlunosModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema:Joi.object({
        NODE_ENV: Joi.string()
        .valid('development','production','test')
        .default('development'),
        PORT: Joi.number().default(3000),
        DATABASE_URI: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:(ConfigService: ConfigService) => ({
        uri: ConfigService.get<string>('DATABASE_URI'),
      }),
    }),
  ],
  controllers:[],
  providers:[],
})
export class AppModule {}