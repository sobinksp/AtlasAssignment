import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getWeather(postCode: String) {
    const API_KEY = '65c30b3194d7c141789fc9f4789c59e2';
    const geoRes = await fetch(
      `http://api.openweathermap.org/geo/1.0/zip?zip=${postCode},TH&appid=${API_KEY}`,
    );

    const geoData = await geoRes.json();
    const { lat, lon } = geoData;
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(weatherApiUrl);
    console.log(lat, lon);
    const res = await fetch(weatherApiUrl);
    const result = res.json();
    return result;
  }
}
