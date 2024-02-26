import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeoipService } from './geoip/geoip.service';
import { CityController } from './city/city.controller';

@Module({
  imports: [],
  controllers: [AppController, CityController],
  providers: [AppService, GeoipService],
})
export class AppModule {}
