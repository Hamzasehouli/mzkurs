import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './users.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  findAll() {
    return this.userRepository.findAll();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException(
        `User ${id} not found`,
      );
    }

    return user;
  }

  create(body: any) {
    return this.userRepository.create(body);
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
