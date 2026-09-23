import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return this.prisma.user.findMany();
  }

  create(body: CreateUserDto) {
    return this.prisma.user.create({
      data: body,
    });
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
