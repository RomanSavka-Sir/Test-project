import { Controller, Get, HttpCode, Query, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AggregationDataFilterDto } from './dto/aggregation.data.filter.dto';
import { AppService } from './app.service';
import { ResponseAggregationDataDto } from './dto/response.aggregation.data.dto';
import { LoggingInterceptor } from './interceptor/logging.interceptor';

@ApiTags('test-project')
@Controller('aggregate')
export class AppController {
  constructor(private appService: AppService) {}

  @ApiOperation({ summary: 'Get aggregate data and log it' })
  @ApiResponse({ status: 200, type: ResponseAggregationDataDto })
  @HttpCode(200)
  @UseInterceptors(LoggingInterceptor)
  @Get()
  async aggregateData(@Query() query: AggregationDataFilterDto): Promise<any> {
    return this.appService.aggregateData(query);
  }
}
