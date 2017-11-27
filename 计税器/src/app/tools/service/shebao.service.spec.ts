import { TestBed, inject } from '@angular/core/testing';

import { ShebaoService } from './shebao.service';

describe('ShebaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShebaoService]
    });
  });

  it('should be created', inject([ShebaoService], (service: ShebaoService) => {
    expect(service).toBeTruthy();
  }));
});
