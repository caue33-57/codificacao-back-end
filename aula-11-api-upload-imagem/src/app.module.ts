import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ImagemController } from './imagem.controller.js';

@Module({
  imports: [],
  controllers: [AppController, ImagemController],
  providers: [AppService],
})
export class AppModule {}
