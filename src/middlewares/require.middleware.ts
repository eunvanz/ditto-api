import { NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction } from 'express';

export class RequireMiddleware implements NestMiddleware {
  async use(req: Request, _res: Response, next: NextFunction) {
    const uid = req.headers['uid'];
    if (!uid) {
      throw new UnauthorizedException('Sign in is required.');
    }
    next();
  }
}
