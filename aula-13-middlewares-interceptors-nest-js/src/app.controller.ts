import { Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {
 @Get()
 getPublic(){
  return{
     mensagem: 'Rota Publica acessa com sucesso!',
     data: new Date()
  }
 }

 @Get('admin')
 getprivate(){
  return{
    mensagem: 'Bem vindo ao Painel administrativo',
    data: new Date(),
  }
 }
 }
