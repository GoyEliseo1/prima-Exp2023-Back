import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { users } from '../../entities/entity';
import { Repository } from 'typeorm';

@Injectable()
export class ModuleNameService {
  constructor(
    @InjectRepository(users)
    private usersRepository: Repository<users>,
  ) {}
 async getModuleName(){
    const queryBuilder = await this.usersRepository.find()
    console.log('🚀  file: module-name.service.ts:15  ModuleNameService  getModuleName  queryBuilder:', queryBuilder)
    return 'module-name'
  }
  async createPost(data:users){

    if (Number(data.age) <=13){data.color = 'yellow'}
    else if( Number(data.age) <= 16){ data.color = 'red'}
    else if( Number(data.age) <= 19){ data.color = 'green'}
    else if( Number(data.age) <= 24){ data.color = 'blue'}
    else { data.color = 'orange'}

    const newUser = new users()
    newUser.name = data.name
    newUser.lastName = data.lastName
    newUser.age = data.age
    newUser.adress = data.adress
    newUser.sick = data.sick
    newUser.email = data.email
    newUser.color= data.color
    newUser.phone = data.phone

    
    await this.usersRepository.insert(newUser)


    return  newUser
  }
}