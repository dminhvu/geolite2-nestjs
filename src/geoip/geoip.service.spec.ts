import { Test, TestingModule } from '@nestjs/testing';
import { GeoipService } from './geoip.service';

describe('GeoipService', () => {
  let service: GeoipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeoipService],
    }).compile();

    service = module.get<GeoipService>(GeoipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
