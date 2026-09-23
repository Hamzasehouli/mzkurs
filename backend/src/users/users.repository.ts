import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UUID } from 'node:crypto';
import { UpdateUserDto } from './dto/update-suer.dto';

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

  findOne(id: UUID) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  update(id: UUID, body: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: body,
    });
  }

  remove(id: UUID) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
