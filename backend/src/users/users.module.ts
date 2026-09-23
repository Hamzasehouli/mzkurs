import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { UserRepository } from './users.repository';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
  ],
})
export class UserModule {}
