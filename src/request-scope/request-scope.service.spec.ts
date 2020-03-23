import { Test, TestingModule } from '@nestjs/testing';
import { RequestScopeService } from './request-scope.service';

describe('RequestScopeService', () => {
  let service: RequestScopeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestScopeService],
    }).compile();

    service = module.get<RequestScopeService>(RequestScopeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
