import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DbModule } from "./database/module";
import { DbClient } from "./database/client";
import { ConfigModule } from "@nestjs/config";


@Module({
    imports: [DbModule,
        ConfigModule.forRoot({
            isGlobal: true,
          })],
    controllers: [AppController],
    providers: [AppService, DbClient]
})

export class AppModule {}