import { Module } from '@nestjs/common';
import { ModuleNameController } from './module-name.controller';
import { ModuleNameService } from './module-name.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from '../../entities/entity';

@Module({
  imports:  [TypeOrmModule.forFeature([users])],
  controllers: [ModuleNameController,],
  providers: [ModuleNameService],
})
export class ModuleNameModule {}