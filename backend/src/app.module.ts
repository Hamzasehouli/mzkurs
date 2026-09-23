import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './users/users.service';
import { UserController } from './users/users.controller';
import { UserRepository } from './users/users.repository';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, UserRepository, PrismaService],
})
export class AppModule {}
