import { TestBed } from '@angular/core/testing';

import { HeadCountServiceService } from './head-count-service.service';

describe('HeadCountServiceService', () => {
  let service: HeadCountServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadCountServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
