import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':postCode')
  async getWeatherByPostCode(@Param('postCode') postCode: string) {
    const weatherData = await this.appService.getWeather(postCode);
    return weatherData;
  }
}
