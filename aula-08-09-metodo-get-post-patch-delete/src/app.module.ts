import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConvidadosController } from './convidados.controller.js';
import { ConvidadosService } from './convidados.service.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [],
  controllers: [AppController,ConvidadosController],
  providers: [AppService, ConvidadosService],
})
export class AppModule {}