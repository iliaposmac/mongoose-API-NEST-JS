import { Body, Controller, Get, Logger, Post, Render, Res } from '@nestjs/common';
import { UserCreateDto } from './dto/user.create-dto'
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    private logger:Logger = new Logger("UsersController")

    @Get()
    @Render('register')
    getUsers(){
        const users = this.userService.findUsers()
        return {title: "Register new user", users: users}
    }

    @Post()
    @Render('users')
    async getNewUser(@Res() res,@Body() userDto: UserCreateDto){
        const newUser = await this.userService.createUser(userDto)
        this.logger.log(newUser)
        return {title: "Users", users: newUser}
    }


}
