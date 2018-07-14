import { TestBed, inject } from '@angular/core/testing';

import { infoService } from './info.service';

describe('infoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [infoService]
    });
  });

  it('should be created', inject([infoService], (service: infoService) => {
    expect(service).toBeTruthy();
  }));
});
