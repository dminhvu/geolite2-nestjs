import { Controller, Get, Param } from '@nestjs/common';
import { GeoipService } from '../geoip/geoip.service';

@Controller('city')
export class CityController {
  constructor(private readonly geoipService: GeoipService) {}

  @Get(':ip')
  async getCityByIp(@Param('ip') ip: string): Promise<any> {
    return await this.geoipService.lookupIp(ip);
  }
}
