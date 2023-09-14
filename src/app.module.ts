import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ModuleNameModule } from './modules/module-name/module-name.module';
import { ConfigModule } from '@nestjs/config';
console.log('🚀  file: app.module.ts:15  __dirname:', __dirname)
@Module({
  imports:  [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
        url:process.env.DATABASE_URL,
        ssl: true,
        entities: [__dirname + '/entities/entity.js'] 
      }),
      
      ModuleNameModule
    ],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {
  
}