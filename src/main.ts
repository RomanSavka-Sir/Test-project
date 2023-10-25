import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { CityMembersDto } from './dto/city.members.dto';
import { CityPopulationDto } from './dto/city.population.dto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const documentConfig = new DocumentBuilder()
    .setTitle('Test')
    .setDescription(
      'API docs. All responses are wrapped into "{data: response}"'
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, documentConfig, {
    extraModels: [CityMembersDto, CityPopulationDto]
  });

  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT, () => {
    Logger.log(`Server is running on port ${process.env.PORT}`);
  });
}
bootstrap();
