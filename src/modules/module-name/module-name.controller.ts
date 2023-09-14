import { Controller, Get, Post, Req } from '@nestjs/common';
import { ModuleNameService } from './module-name.service';
import { Request } from 'express';
@Controller('form')
export class ModuleNameController {
  constructor(private readonly moduleNameService: ModuleNameService) {}

  @Get()
  async getModuleName(): Promise<string> {
    return this.moduleNameService.getModuleName();
  }
  @Post()
  async createUser(@Req()request: Request): Promise<any> {
  
    return this.moduleNameService.createPost(request.body);
  }
  bad
}