import { AggregationDataInterface } from './aggregation.data.interface';
import { RequestDataInterface } from './request.data.interface';

export interface LogRequestInterface {
  requestData: RequestDataInterface;
  responseData: AggregationDataInterface;
  httpStatus: number;
  requestDuration: number;
}
