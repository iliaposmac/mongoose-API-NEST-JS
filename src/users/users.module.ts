import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models/user.model';

@Module({
  imports: [MongooseModule.forFeature([{name: "Users", schema: UserSchema}])],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
