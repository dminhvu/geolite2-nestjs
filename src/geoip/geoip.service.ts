import { Injectable } from '@nestjs/common';
import * as maxmind from 'maxmind';
import * as path from 'path';

@Injectable()
export class GeoipService {
  private lookupService: maxmind.Reader<maxmind.Response>;

  constructor() {
    const dbPath = path.join('data', 'GeoLite2-City.mmdb');
    maxmind
      .open(dbPath)
      .then((lookup) => {
        this.lookupService = lookup;
      })
      .catch((err) => {
        console.error('Error loading GeoLite2 database', err);
      });
  }

  async lookupIp(ip: string): Promise<any> {
    return this.lookupService.get(ip);
  }
}
