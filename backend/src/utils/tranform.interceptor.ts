import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
  message: string;
  timestamp: string;
  statusCode: number;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<
  T,
  Response<T>
> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const now = new Date().toISOString();
    const statusCode = context.switchToHttp().getResponse<any>().statusCode;
    return next
      .handle()
      .pipe(
        map((data: T) => ({
          statusCode,
          message: 'Success',
          timestamp: now,
          data,
        })),
      );
  }
}
