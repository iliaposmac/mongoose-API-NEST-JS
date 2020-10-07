import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose'
import { UsersModule } from './users/users.module';


@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://root:280398ftr@cluster0.hiwhy.mongodb.net/users?retryWrites=true&w=majority"), ItemsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
