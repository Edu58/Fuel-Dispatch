import { TestBed } from '@angular/core/testing';

import { FirebaseCallService } from './firebase-call.service';

describe('FirebaseCallService', () => {
  let service: FirebaseCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
