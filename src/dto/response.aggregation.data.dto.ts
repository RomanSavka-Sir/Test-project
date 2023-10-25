import { ApiProperty } from '@nestjs/swagger';
import { CityPopulationDto } from './city.population.dto';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class ResponseAggregationDataDto {
  @ApiProperty({
    example: [
      {
        city: 'London',
        count: 100,
        members: [
          {
            firstName: 'Alex',
            count: 100
          }
        ]
      }
    ],
    description: 'cities',
    type: 'array',
    items: {
      $ref: '#/components/schemas/CityPopulationDto'
    }
  })
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CityPopulationDto)
  cities: CityPopulationDto[];
}
