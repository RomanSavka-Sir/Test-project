import { IsNotEmpty, IsString, IsUrl, ValidateNested } from 'class-validator';
import { AggregationDataFilterDto } from './aggregation.data.filter.dto';
import { Type } from 'class-transformer';

export class RequestDataDto {
  @IsNotEmpty()
  @IsString()
  method: string;

  @IsNotEmpty()
  @IsUrl()
  url: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => AggregationDataFilterDto)
  query: AggregationDataFilterDto;
}
