import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { AggregationDataFilterInterface } from './interface/aggregation.data.filter.interface';
import { ResponseAggregationDataDto } from './dto/response.aggregation.data.dto';
import { LogRequestInterface } from './interface/log.request.interface';

@Injectable()
export class AppService {
  async aggregateData(data: AggregationDataFilterInterface): Promise<any> {
    console.log(11111);
    return {
      name: 'Ivan',
      age: 12,
      limit: data.limit,
      offset: data.offset
    };
  }

  async logRequest(data: LogRequestInterface): Promise<void> {
    try {
      const { requestData, responseData, httpStatus, requestDuration } = data;

      await axios.post('http://localhost:8765/logging', {
        requestDuration,
        requestData,
        responseData,
        httpStatus
      });

      Logger.log('Logging request sent successfully.');
    } catch (error) {
      Logger.log('Error sending logging request:', error);
    }
  }
}
