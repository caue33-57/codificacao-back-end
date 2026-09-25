import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { NestExpressApplication } from '@nestjs/core';
import { join } from 'path';
import { create } from 'domain';

async function bootstrap() {
 const app = await NestFactory:create<NestExpressApplication>(AppModule);
}
 bootstrap();
