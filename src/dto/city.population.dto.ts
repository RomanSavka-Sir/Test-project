import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CityMembersDto } from './city.members.dto';

export class CityPopulationDto {
  @ApiProperty({
    example: 'London',
    description: 'Name of city'
  })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({
    example: 100,
    description: 'Cities count'
  })
  @IsNotEmpty()
  @IsInt()
  count: number;

  @ApiProperty({
    example: [
      {
        firstName: 'Alex',
        count: 100
      }
    ],
    description: 'members of city',
    type: 'array',
    items: {
      $ref: '#/components/schemas/CityMembersDto'
    }
  })
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CityMembersDto)
  members: CityMembersDto[];
}
