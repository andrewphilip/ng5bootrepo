import { TestBed, inject } from '@angular/core/testing';

import { StockapiserviceService } from './stockapiservice.service';

describe('StockapiserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockapiserviceService]
    });
  });

  it('should be created', inject([StockapiserviceService], (service: StockapiserviceService) => {
    expect(service).toBeTruthy();
  }));
});
