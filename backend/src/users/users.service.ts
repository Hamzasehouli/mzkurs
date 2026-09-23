import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import bcrypt from 'bcrypt';
import { type UUID } from 'node:crypto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  findAll() {
    return this.userRepository.findAll();
  }

  async create(body: CreateUserDto) {
    const password = await bcrypt.hash(body.password, 10);
    return this.userRepository.create({ ...body, password });
  }

  async findOne(id: UUID) {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }

  async update(id: UUID, body: any) {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return this.userRepository.update(id, body);
  }

  async remove(id: UUID) {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return this.userRepository.remove(id);
  }
}
