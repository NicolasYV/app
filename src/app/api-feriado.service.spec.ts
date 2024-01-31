import { TestBed } from '@angular/core/testing';

import { ApiFeriadoService } from './api-feriado.service';

describe('ApiFeriadoService', () => {
  let service: ApiFeriadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFeriadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
