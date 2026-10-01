import { Module, NestModule, MiddlewareConsumer,} from '@nestjs/common';
import { AppController } from './app.controller.js';
import { LoggerMiddleware } from './logger/logger.middleware.js';

@Module({
  controllers: [AppController],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }

}
