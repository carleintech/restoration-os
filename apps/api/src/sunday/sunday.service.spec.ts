import { Test, TestingModule } from '@nestjs/testing';
import { SundayService } from './sunday.service';

describe('SundayService', () => {
  let service: SundayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SundayService],
    }).compile();

    service = module.get<SundayService>(SundayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
