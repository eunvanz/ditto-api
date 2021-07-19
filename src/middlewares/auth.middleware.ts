import {
  ForbiddenException,
  InternalServerErrorException,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction } from 'express';
import * as admin from 'firebase-admin';

export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, _res: Response, next: NextFunction) {
    const token = req.headers['x-authorization'];
    if (token) {
      try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        const { uid } = decodedToken;
        req.headers['uid'] = uid;
      } catch (error) {
        if (error.code === 'auth/argument-error') {
          throw new ForbiddenException('Invalid user access.');
        } else {
          throw new InternalServerErrorException();
        }
      }
    }
    next();
  }
}
