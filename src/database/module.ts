import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';
import { DbClient } from './client';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
  ],
  providers: [DbClient],
  exports: [DbClient]
})
export class DbModule {}