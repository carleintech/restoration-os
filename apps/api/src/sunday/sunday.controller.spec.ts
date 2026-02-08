import { Test, TestingModule } from '@nestjs/testing';
import { SundayController } from './sunday.controller';

describe('SundayController', () => {
  let controller: SundayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SundayController],
    }).compile();

    controller = module.get<SundayController>(SundayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
