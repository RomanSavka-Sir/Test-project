import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CityMembersDto {
  @ApiProperty({
    example: 'Alex',
    description: 'first name of citizen'
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    example: 100,
    description: 'City members count'
  })
  @IsNotEmpty()
  @IsInt()
  count: number;
}
