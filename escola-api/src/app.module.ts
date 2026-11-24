import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlunosModule } from './alunos/aluno.module.js';
import { ConfigModule, ConfigService,} from '@nestjs/config';
import { ConfigType } from '@nestjs/config';
import Joi from 'joi';
import  database from './config/database.config.js'
import authConfig from './config/auth.config.js';
import databaseConfig from './config/database.config.js';




@Module({
  imports: [
    AlunosModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load:[databaseConfig, authConfig],
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
    
      useFactory:(dbConfig:ConfigType<typeof databaseConfig>) => ({
        uri:dbConfig.uri,
        maxPoolSize:dbConfig.maxPoolSize,
      }),
      inject:[databaseConfig.KEY]
    }),
  ],
  controllers:[],
  providers:[],
})
export class AppModule {}