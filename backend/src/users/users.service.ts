import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  findAll() {
    return this.userRepository.findAll();
  }

  async findOne(id: number) {
    // const user = await this.userRepository.findOne(id);
    // if (!user) {
    //   throw new NotFoundException(
    //     `User ${id} not found`,
    //   );
    // }
    // return user;
  }

  async create(body: CreateUserDto) {
    const password = await bcrypt.hash(body.password, 10);
    return this.userRepository.create({ ...body, password });
  }

  async update(id: number, body: any) {
    await this.findOne(id);

    return this.userRepository.update(id, body);
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.userRepository.remove(id);
  }
}
