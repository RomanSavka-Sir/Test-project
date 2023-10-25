import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppService } from 'src/app.service';
import { RequestDataDto } from 'src/dto/request.data.dto';
import { ResponseAggregationDataDto } from 'src/dto/response.aggregation.data.dto';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private appService: AppService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const request = context.switchToHttp().getRequest();

    return next.handle().pipe(
      tap(async (responseData: ResponseAggregationDataDto) => {
        const requestDuration = Date.now() - now;

        const requestData: RequestDataDto = {
          method: request.method,
          url: request.url,
          query: request.query
        };

        await this.appService.logRequest({
          requestData,
          responseData,
          httpStatus: request.res.statusCode,
          requestDuration
        });
      })
    );
  }
}
