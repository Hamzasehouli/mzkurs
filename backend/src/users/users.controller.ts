import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { type UUID } from 'node:crypto';
import { UpdateUserDto } from './dto/update-suer.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  //Fetch all users
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  //Add a new user
  @Post()
  create(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  //Find a user by id
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.userService.findOne(id);
  }

  //Update a user by id
  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: UUID, @Body() body: UpdateUserDto) {
    return this.userService.update(id, body);
  }

  //Delete a user by id
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.userService.remove(id);
  }
}
