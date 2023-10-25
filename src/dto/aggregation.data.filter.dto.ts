import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class AggregationDataFilterDto {
  @ApiProperty({
    example: 100,
    description: 'The number of items to return per page (LIMIT)',
    default: 50,
    required: false
  })
  @IsOptional()
  @IsInt()
  @IsPositive()
  @Transform((o) => Number(o.value))
  limit?: number = 50;

  @ApiProperty({
    example: 1,
    description: 'The number of items to skip (OFFSET)',
    default: 0,
    required: false
  })
  @IsOptional()
  @IsInt()
  @Transform((o) => Number(o.value))
  offset?: number = 0;

  @ApiProperty({
    example: 'London',
    description: 'Filter date by city',
    required: false
  })
  @IsOptional()
  @IsString()
  city?: string;
}
