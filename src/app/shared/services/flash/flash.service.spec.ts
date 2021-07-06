import { TestBed } from '@angular/core/testing';
import { FlashMessageService } from './flash.service';

describe('FlashService', () => {
  let service: FlashMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created get', () => {
    let mock = service.get()
    expect(mock).toBeDefined();
  });

  it('should be created set', () => {
    let mock = service.set("/")
    expect(mock).toBeUndefined();
  });

});
