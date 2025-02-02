import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // throw new InternalServerErrorException(
    //   'Intentional error for testing logging',
    // );
    return this.appService.getHello();
  }
  @Get('hello')
  getHelloBoy(): string {
    return 'CI/CD is working';
  }
  //create a get request which will return an object
  @Get('profile')
  getProfile(): object {
    return {
      name: 'JP',
      age: '25',
      title: 'Full Stack Developer',
    };
  }
}
