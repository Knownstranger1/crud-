/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './table/user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('user')
export class AppController {
  constructor(private readonly userService: AppService,@InjectRepository(User)
  private readonly userRepository: Repository<User>,) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(+id);
  }

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: User): Promise<User> {
    return this.userService.update(+id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(+id);
  }
}
