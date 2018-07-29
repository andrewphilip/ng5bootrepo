import { TestBed, inject } from '@angular/core/testing';

import { WebsrvcService } from './websrvc.service';

describe('WebsrvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsrvcService]
    });
  });

  it('should be created', inject([WebsrvcService], (service: WebsrvcService) => {
    expect(service).toBeTruthy();
  }));
});
