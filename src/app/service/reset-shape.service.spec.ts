import { TestBed } from '@angular/core/testing';

import { ResetShapeService } from './reset-shape.service';

describe('ResetShapeService', () => {
  let service: ResetShapeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetShapeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
