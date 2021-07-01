import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';
import { ResponseHistory } from 'src/app/shared/models/response.models';

import { HistoryService } from './history.service';

describe('HistoryService', () => {
  let historyService: HistoryService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HistoryService],
    });
    injector = getTestBed();
    historyService = TestBed.inject(HistoryService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  it('should be created', () => {
    expect(historyService).toBeTruthy();
  });

  describe('#getAllHistoryByProductId', () => {
    it('should return an Observable<ResponseHistory<History[]>>', () => {
      const mock = [
        {
          "id": "8a68e4d478fd79e90178fd7a53d80001",
          "historyDate": "2021-04-23T06:45:55.744+00:00",
          "priceBuy": 850000,
          "priceSell": 860000,
          "product": {
              "id": "8a68e4d478fd79e90178fd7a53b50000",
              "productName": "Platinum",
              "productPriceBuy": 850000,
              "productPriceSell": 860000,
              "productImage": "Ini image bronze",
              "productStatus": 1,
              "createdAt": "2021-04-22T17:00:00.000+00:00",
              "updatedAt": "2021-04-22T17:00:00.000+00:00"
          }
      },
      {
          "id": "4028808a7a52d233017a52d42cd70000",
          "historyDate": "2021-07-07T00:00:00.000+00:00",
          "priceBuy": 855000,
          "priceSell": 865000,
          "product": {
              "id": "8a68e4d478fd79e90178fd7a53b50000",
              "productName": "Platinum",
              "productPriceBuy": 850000,
              "productPriceSell": 860000,
              "productImage": "Ini image bronze",
              "productStatus": 1,
              "createdAt": "2021-04-22T17:00:00.000+00:00",
              "updatedAt": "2021-04-22T17:00:00.000+00:00"
          }
      }
      ];

        historyService
          .getAll('8a68e4d478fd79e90178fd7a53b50000')
          .subscribe((response: any) => {
            console.log('response from user.service.spec', response);
            expect(response).toEqual(mock);
          });

        const request = httpMock.expectOne(
          `http://localhost:8080/product-history/8a68e4d478fd79e90178fd7a53b50000`
        );
        request.flush(mock);
        expect(request.request.method).toBe('GET');
    });

  });
});
