import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { UserCreateDto } from './dto/user.create-dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
    constructor(@InjectModel('Users') private readonly userModel: Model<User>){}

    async findUsers(): Promise<User[]>{
        return await this.userModel.find()
    }

    async createUser(user: UserCreateDto): Promise<User>{
        const newUser = new this.userModel(user)
        await newUser.save()
        return newUser
    }
}
