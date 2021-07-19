import { NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import * as admin from 'firebase-admin';

export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.get('x-authorization');
    const decodedToken = await admin.auth().verifyIdToken(token);
    const { uid } = decodedToken;
    req.headers.set('uid', uid);
    next();
  }
}
