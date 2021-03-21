import { TestBed } from '@angular/core/testing';

import { CreateShapeService } from './create-shape.service';

describe('CreateShapeService', () => {
  let service: CreateShapeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateShapeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
