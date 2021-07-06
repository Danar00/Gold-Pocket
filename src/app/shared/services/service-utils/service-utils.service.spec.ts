import { TestBed } from '@angular/core/testing';

import { ServiceUtilsService } from './service-utils.service';

describe('ServiceUtilsService', () => {
  let service: ServiceUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created store:Login', () => {
    let mock = service.storeLogin("danarhikmah@student.ub.ac.id", "password")
    expect(mock).toBeTruthy();
  });

  it('should be created', () => {
    let mock = service.storeRegister("danarhikmah@student.ub.ac.id", "danar", "password")
    expect(mock).toBeTruthy();
  });
});
