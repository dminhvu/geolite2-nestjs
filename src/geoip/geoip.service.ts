import { Injectable, Inject } from '@nestjs/common';
import * as maxmind from 'maxmind';
import * as path from 'path';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class GeoipService {
  private lookupService: maxmind.Reader<maxmind.Response>;

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {
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
    const result = await this.lookupService.get(ip);

    return {
      cached: false,
      ...result,
    };
  }
}
