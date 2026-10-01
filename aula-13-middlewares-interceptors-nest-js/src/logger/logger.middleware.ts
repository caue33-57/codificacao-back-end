import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response , next: NextFunction) {
    console.log(`[LOG] Metodo: ${req.method} | Rota: ${req.path}`);
    const currentUrl = req.originalUrl|| req.url
    if(currentUrl.startsWith('admin')){
      const base = req.headers['x-user-base'];
      if(base !== 'administrator'){
        return res.status(403).json({
          Codigo:403,
          mensagem:'Acesso Negado: Privilegio de Aministrator necessario',
          registro: new Date,
        })
        
        }
      }
    next();
  }
} 