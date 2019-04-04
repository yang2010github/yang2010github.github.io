import { TestBed } from '@angular/core/testing';

import { HttpPostService } from './httpPost.service';

describe('PostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpPostService = TestBed.get(HttpPostService);
    expect(service).toBeTruthy();
  });
});
