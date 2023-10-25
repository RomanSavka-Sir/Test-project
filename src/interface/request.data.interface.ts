import { AggregationDataFilterInterface } from "./aggregation.data.filter.interface";

export interface RequestDataInterface {
  method: string;
  url: string;
  query: AggregationDataFilterInterface;
}
