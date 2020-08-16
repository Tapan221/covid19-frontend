import { TestBed } from '@angular/core/testing';

import { BasicHttpIntercepterService } from './basic-http-intercepter.service';

describe('BasicHttpIntercepterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicHttpIntercepterService = TestBed.get(BasicHttpIntercepterService);
    expect(service).toBeTruthy();
  });
});
