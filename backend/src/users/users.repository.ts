import { Injectable } from '@nestjs/common';

class CreateUserDto {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class UserRepository {
  findAll() {
    // TODO: get all users
  }

  create(body: CreateUserDto) {
    // TODO: create user
  }

  findOne(id: number) {
    // TODO: get one user
  }

  update(id: number, body: any) {
    // TODO: update user
  }

  remove(id: number) {
    // TODO: delete user
  }
}
