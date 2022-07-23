import { TestBed } from '@angular/core/testing';

import { RequireAutenticationGuard } from './require-autentication.guard';

describe('RequireAutenticationGuard', () => {
  let guard: RequireAutenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RequireAutenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
