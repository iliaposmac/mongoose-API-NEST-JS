import { Controller, Get, HttpStatus, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('main')
  @Render('index')
  renderPageFromMVC(@Res() res){
    return {
      title: "Main page",
      message: "Hello from render nest js"
    }
  }
}
