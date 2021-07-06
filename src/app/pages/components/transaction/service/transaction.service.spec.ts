import { TestBed, getTestBed } from '@angular/core/testing';
import { TransactionService } from './transaction.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('TransactionService', () => {
  let transactionService: TransactionService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let id: "4028808d7913850e01791385f0430000";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransactionService],
    });
    injector = getTestBed();
    transactionService = TestBed.inject(TransactionService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  it('should be created', () => {
    expect(transactionService).toBeTruthy();
  });

  it('should be created getAll', () => {
    expect(transactionService.getAll).toBeTruthy();
  });

  it('should be created getPocketById', () => {
    expect(transactionService.getPocketById).toBeTruthy();
  });

  it('should be created deletePocket', () => {
    expect(transactionService.deletePocket).toBeTruthy();
  });

  it('should be created postPocket', () => {
    expect(transactionService.postPocket).toBeTruthy();
  });

  it('should be created updatePocket', () => {
    expect(transactionService.updatePocket).toBeTruthy();
  });

  it('should be created createPurchase', () => {
    expect(transactionService.createPurchase).toBeTruthy();
  });

  describe('#getProductById', () => {
    it('should return an Observable<ResponseProduct<Product[]>>', () => {
      const mock = [
        {
          id: '8a68e4d478fd79e90178fd7a53b50000',
          productName: 'Platinum',
          productPriceBuy: 850000,
          productPriceSell: 860000,
          productImage: 'Ini image bronze',
          productStatus: 1,
          historyPrices: [
            {
              id: '8a68e4d478fd79e90178fd7a53d80001',
              historyDate: '2021-04-23T06:45:55.744+00:00',
              priceBuy: 850000,
              priceSell: 860000,
              product: {
                id: '8a68e4d478fd79e90178fd7a53b50000',
                productName: 'Platinum',
                productPriceBuy: 850000,
                productPriceSell: 860000,
                productImage: 'Ini image bronze',
                productStatus: 1,
                createdAt: '2021-04-22T17:00:00.000+00:00',
                updatedAt: '2021-04-22T17:00:00.000+00:00',
              },
            },
            {
              id: '4028808a7a52d233017a52d42cd70000',
              historyDate: '2021-07-07T00:00:00.000+00:00',
              priceBuy: 855000,
              priceSell: 865000,
              product: {
                id: '8a68e4d478fd79e90178fd7a53b50000',
                productName: 'Platinum',
                productPriceBuy: 850000,
                productPriceSell: 860000,
                productImage: 'Ini image bronze',
                productStatus: 1,
                createdAt: '2021-04-22T17:00:00.000+00:00',
                updatedAt: '2021-04-22T17:00:00.000+00:00',
              },
            },
          ],
          createdAt: '2021-04-22T17:00:00.000+00:00',
          updatedAt: '2021-04-22T17:00:00.000+00:00',
        },
      ];

      transactionService
        .getPocketById('8a68e4d478fd79e90178fd7a53b50000')
        .subscribe((response: any) => {
          console.log('response from user.service.spec', response);
          expect(response).toEqual(mock);
        });

      const request = httpMock.expectOne(
        `http://localhost:8080/product/8a68e4d478fd79e90178fd7a53b50000`
      );
      request.flush(mock);
      expect(request.request.method).toBe('GET');
    });
  });

  describe('#getAll', () => {
    it('should return an Observable<ResponseTransaction<Transaction[]>>', () => {
      const mock = [
        {
          id: '4028808d7913850e01791385f0430000',
          pocketName: 'Tabungan Kuliah',
          pocketQty: 3.5,
          customer: {
            id: '8a68e4d478f8d7340178f8da705c0000',
            firstName: 'Melia',
            lastName: 'Suspariana',
            birthDate: '1999-09-20T17:00:00.000+00:00',
            address: 'Jl Pepaya Sungai Salak',
            status: 1,
            phoneNumber: '08123412342',
            username: 'melia',
            password: 'password',
            email: 'danarhikmah@student.ub.ac.id',
            pockets: [
              {
                id: '4028808d7913850e01791385f0430000',
                pocketName: 'Tabungan Kuliah',
                pocketQty: 3.5,
                product: {
                  id: '8a68e4d478fd79e90178fd7a53b50000',
                  productName: 'Platinum',
                  productPriceBuy: 850000,
                  productPriceSell: 860000,
                  productImage: 'Ini image bronze',
                  productStatus: 1,
                  historyPrices: [
                    {
                      id: '8a68e4d478fd79e90178fd7a53d80001',
                      historyDate: '2021-04-23T06:45:55.744+00:00',
                      priceBuy: 850000,
                      priceSell: 860000,
                      product: {
                        id: '8a68e4d478fd79e90178fd7a53b50000',
                        productName: 'Platinum',
                        productPriceBuy: 850000,
                        productPriceSell: 860000,
                        productImage: 'Ini image bronze',
                        productStatus: 1,
                        createdAt: '2021-04-22T17:00:00.000+00:00',
                        updatedAt: '2021-04-22T17:00:00.000+00:00',
                      },
                    },
                    {
                      id: '4028808a7a52d233017a52d42cd70000',
                      historyDate: '2021-07-07T00:00:00.000+00:00',
                      priceBuy: 855000,
                      priceSell: 865000,
                      product: {
                        id: '8a68e4d478fd79e90178fd7a53b50000',
                        productName: 'Platinum',
                        productPriceBuy: 850000,
                        productPriceSell: 860000,
                        productImage: 'Ini image bronze',
                        productStatus: 1,
                        createdAt: '2021-04-22T17:00:00.000+00:00',
                        updatedAt: '2021-04-22T17:00:00.000+00:00',
                      },
                    },
                  ],
                  createdAt: '2021-04-22T17:00:00.000+00:00',
                  updatedAt: '2021-04-22T17:00:00.000+00:00',
                },
              },
              {
                id: '4028808a7a57e4c6017a5819c1660004',
                pocketName: 'Tabungan Rumahh',
                pocketQty: 1.0,
                product: {
                  id: '8a68e4d478fd79e90178fd7a53b50000',
                  productName: 'Platinum',
                  productPriceBuy: 850000,
                  productPriceSell: 860000,
                  productImage: 'Ini image bronze',
                  productStatus: 1,
                  historyPrices: [
                    {
                      id: '8a68e4d478fd79e90178fd7a53d80001',
                      historyDate: '2021-04-23T06:45:55.744+00:00',
                      priceBuy: 850000,
                      priceSell: 860000,
                      product: {
                        id: '8a68e4d478fd79e90178fd7a53b50000',
                        productName: 'Platinum',
                        productPriceBuy: 850000,
                        productPriceSell: 860000,
                        productImage: 'Ini image bronze',
                        productStatus: 1,
                        createdAt: '2021-04-22T17:00:00.000+00:00',
                        updatedAt: '2021-04-22T17:00:00.000+00:00',
                      },
                    },
                    {
                      id: '4028808a7a52d233017a52d42cd70000',
                      historyDate: '2021-07-07T00:00:00.000+00:00',
                      priceBuy: 855000,
                      priceSell: 865000,
                      product: {
                        id: '8a68e4d478fd79e90178fd7a53b50000',
                        productName: 'Platinum',
                        productPriceBuy: 850000,
                        productPriceSell: 860000,
                        productImage: 'Ini image bronze',
                        productStatus: 1,
                        createdAt: '2021-04-22T17:00:00.000+00:00',
                        updatedAt: '2021-04-22T17:00:00.000+00:00',
                      },
                    },
                  ],
                  createdAt: '2021-04-22T17:00:00.000+00:00',
                  updatedAt: '2021-04-22T17:00:00.000+00:00',
                },
              },
              {
                id: '4028808a7a5797eb017a57d22c910001',
                pocketName: 'Tabungan Nikah',
                pocketQty: 2.0,
                product: {
                  id: '8a68e4d478fd79e90178fd7a53b50000',
                  productName: 'Platinum',
                  productPriceBuy: 850000,
                  productPriceSell: 860000,
                  productImage: 'Ini image bronze',
                  productStatus: 1,
                  historyPrices: [
                    {
                      id: '8a68e4d478fd79e90178fd7a53d80001',
                      historyDate: '2021-04-23T06:45:55.744+00:00',
                      priceBuy: 850000,
                      priceSell: 860000,
                      product: {
                        id: '8a68e4d478fd79e90178fd7a53b50000',
                        productName: 'Platinum',
                        productPriceBuy: 850000,
                        productPriceSell: 860000,
                        productImage: 'Ini image bronze',
                        productStatus: 1,
                        createdAt: '2021-04-22T17:00:00.000+00:00',
                        updatedAt: '2021-04-22T17:00:00.000+00:00',
                      },
                    },
                    {
                      id: '4028808a7a52d233017a52d42cd70000',
                      historyDate: '2021-07-07T00:00:00.000+00:00',
                      priceBuy: 855000,
                      priceSell: 865000,
                      product: {
                        id: '8a68e4d478fd79e90178fd7a53b50000',
                        productName: 'Platinum',
                        productPriceBuy: 850000,
                        productPriceSell: 860000,
                        productImage: 'Ini image bronze',
                        productStatus: 1,
                        createdAt: '2021-04-22T17:00:00.000+00:00',
                        updatedAt: '2021-04-22T17:00:00.000+00:00',
                      },
                    },
                  ],
                  createdAt: '2021-04-22T17:00:00.000+00:00',
                  updatedAt: '2021-04-22T17:00:00.000+00:00',
                },
              },
            ],
          },
          product: {
            id: '8a68e4d478fd79e90178fd7a53b50000',
            productName: 'Platinum',
            productPriceBuy: 850000,
            productPriceSell: 860000,
            productImage: 'Ini image bronze',
            productStatus: 1,
            historyPrices: [
              {
                id: '8a68e4d478fd79e90178fd7a53d80001',
                historyDate: '2021-04-23T06:45:55.744+00:00',
                priceBuy: 850000,
                priceSell: 860000,
                product: {
                  id: '8a68e4d478fd79e90178fd7a53b50000',
                  productName: 'Platinum',
                  productPriceBuy: 850000,
                  productPriceSell: 860000,
                  productImage: 'Ini image bronze',
                  productStatus: 1,
                  createdAt: '2021-04-22T17:00:00.000+00:00',
                  updatedAt: '2021-04-22T17:00:00.000+00:00',
                },
              },
              {
                id: '4028808a7a52d233017a52d42cd70000',
                historyDate: '2021-07-07T00:00:00.000+00:00',
                priceBuy: 855000,
                priceSell: 865000,
                product: {
                  id: '8a68e4d478fd79e90178fd7a53b50000',
                  productName: 'Platinum',
                  productPriceBuy: 850000,
                  productPriceSell: 860000,
                  productImage: 'Ini image bronze',
                  productStatus: 1,
                  createdAt: '2021-04-22T17:00:00.000+00:00',
                  updatedAt: '2021-04-22T17:00:00.000+00:00',
                },
              },
            ],
            createdAt: '2021-04-22T17:00:00.000+00:00',
            updatedAt: '2021-04-22T17:00:00.000+00:00',
          },
        },
        {
          id: '4028808a7a57e4c6017a5819c1660004',
          pocketName: 'Tabungan Rumahh',
          pocketQty: 1.0,
          customer: {
            id: '8a68e4d478f8d7340178f8da705c0000',
            firstName: 'Melia',
            lastName: 'Suspariana',
            birthDate: '1999-09-20T17:00:00.000+00:00',
            address: 'Jl Pepaya Sungai Salak',
            status: 1,
            phoneNumber: '08123412342',
            username: 'melia',
            password: 'password',
            email: 'danarhikmah@student.ub.ac.id',
            pockets: [
              {
                id: '4028808d7913850e01791385f0430000',
                pocketName: 'Tabungan Kuliah',
                pocketQty: 3.5,
                product: {
                  id: '8a68e4d478fd79e90178fd7a53b50000',
                  productName: 'Platinum',
                  productPriceBuy: 850000,
                  productPriceSell: 860000,
                  productImage: 'Ini image bronze',
                  productStatus: 1,
                  historyPrices: [
                    {
                      id: '8a68e4d478fd79e90178fd7a53d80001',
                      historyDate: '2021-04-23T06:45:55.744+00:00',
                      priceBuy: 850000,
                      priceSell: 860000,
                      product: {
                        id: '8a68e4d478fd79e90178fd7a53b50000',
                        productName: 'Platinum',
                        productPriceBuy: 850000,
                        productPriceSell: 860000,
                        productImage: 'Ini image bronze',
                        productStatus: 1,
                        createdAt: '2021-04-22T17:00:00.000+00:00',
                        updatedAt: '2021-04-22T17:00:00.000+00:00',
                      },
                    },
                    {
                      id: '4028808a7a52d233017a52d42cd70000',
                      historyDate: '2021-07-07T00:00:00.000+00:00',
                      priceBuy: 855000,
                      priceSell: 865000,
                      product: {
                        id: '8a68e4d478fd79e90178fd7a53b50000',
                        productName: 'Platinum',
                        productPriceBuy: 850000,
                        productPriceSell: 860000,
                        productImage: 'Ini image bronze',
                        productStatus: 1,
                        createdAt: '2021-04-22T17:00:00.000+00:00',
                        updatedAt: '2021-04-22T17:00:00.000+00:00',
                      },
                    },
                  ],
                  createdAt: '2021-04-22T17:00:00.000+00:00',
                  updatedAt: '2021-04-22T17:00:00.000+00:00',
                },
              },
              {
                id: '4028808a7a57e4c6017a5819c1660004',
                pocketName: 'Tabungan Rumahh',
                pocketQty: 1.0,
                product: {
                  id: '8a68e4d478fd79e90178fd7a53b50000',
                  productName: 'Platinum',
                  productPriceBuy: 850000,
                  productPriceSell: 860000,
                  productImage: 'Ini image bronze',
                  productStatus: 1,
                  historyPrices: [
                    {
                      id: '8a68e4d478fd79e90178fd7a53d80001',
                      historyDate: '2021-04-23T06:45:55.744+00:00',
                      priceBuy: 850000,
                      priceSell: 860000,
                      product: {
                        id: '8a68e4d478fd79e90178fd7a53b50000',
                        productName: 'Platinum',
                        productPriceBuy: 850000,
                        productPriceSell: 860000,
                        productImage: 'Ini image bronze',
                        productStatus: 1,
                        createdAt: '2021-04-22T17:00:00.000+00:00',
                        updatedAt: '2021-04-22T17:00:00.000+00:00',
                      },
                    },
                    {
                      id: '4028808a7a52d233017a52d42cd70000',
                      historyDate: '2021-07-07T00:00:00.000+00:00',
                      priceBuy: 855000,
                      priceSell: 865000,
                      product: {
                        id: '8a68e4d478fd79e90178fd7a53b50000',
                        productName: 'Platinum',
                        productPriceBuy: 850000,
                        productPriceSell: 860000,
                        productImage: 'Ini image bronze',
                        productStatus: 1,
                        createdAt: '2021-04-22T17:00:00.000+00:00',
                        updatedAt: '2021-04-22T17:00:00.000+00:00',
                      },
                    },
                  ],
                  createdAt: '2021-04-22T17:00:00.000+00:00',
                  updatedAt: '2021-04-22T17:00:00.000+00:00',
                },
              },
              {
                id: '4028808a7a5797eb017a57d22c910001',
                pocketName: 'Tabungan Nikah',
                pocketQty: 2.0,
                product: {
                  id: '8a68e4d478fd79e90178fd7a53b50000',
                  productName: 'Platinum',
                  productPriceBuy: 850000,
                  productPriceSell: 860000,
                  productImage: 'Ini image bronze',
                  productStatus: 1,
                  historyPrices: [
                    {
                      id: '8a68e4d478fd79e90178fd7a53d80001',
                      historyDate: '2021-04-23T06:45:55.744+00:00',
                      priceBuy: 850000,
                      priceSell: 860000,
                      product: {
                        id: '8a68e4d478fd79e90178fd7a53b50000',
                        productName: 'Platinum',
                        productPriceBuy: 850000,
                        productPriceSell: 860000,
                        productImage: 'Ini image bronze',
                        productStatus: 1,
                        createdAt: '2021-04-22T17:00:00.000+00:00',
                        updatedAt: '2021-04-22T17:00:00.000+00:00',
                      },
                    },
                    {
                      id: '4028808a7a52d233017a52d42cd70000',
                      historyDate: '2021-07-07T00:00:00.000+00:00',
                      priceBuy: 855000,
                      priceSell: 865000,
                      product: {
                        id: '8a68e4d478fd79e90178fd7a53b50000',
                        productName: 'Platinum',
                        productPriceBuy: 850000,
                        productPriceSell: 860000,
                        productImage: 'Ini image bronze',
                        productStatus: 1,
                        createdAt: '2021-04-22T17:00:00.000+00:00',
                        updatedAt: '2021-04-22T17:00:00.000+00:00',
                      },
                    },
                  ],
                  createdAt: '2021-04-22T17:00:00.000+00:00',
                  updatedAt: '2021-04-22T17:00:00.000+00:00',
                },
              },
            ],
          },
          product: {
            id: '8a68e4d478fd79e90178fd7a53b50000',
            productName: 'Platinum',
            productPriceBuy: 850000,
            productPriceSell: 860000,
            productImage: 'Ini image bronze',
            productStatus: 1,
            historyPrices: [
              {
                id: '8a68e4d478fd79e90178fd7a53d80001',
                historyDate: '2021-04-23T06:45:55.744+00:00',
                priceBuy: 850000,
                priceSell: 860000,
                product: {
                  id: '8a68e4d478fd79e90178fd7a53b50000',
                  productName: 'Platinum',
                  productPriceBuy: 850000,
                  productPriceSell: 860000,
                  productImage: 'Ini image bronze',
                  productStatus: 1,
                  createdAt: '2021-04-22T17:00:00.000+00:00',
                  updatedAt: '2021-04-22T17:00:00.000+00:00',
                },
              },
              {
                id: '4028808a7a52d233017a52d42cd70000',
                historyDate: '2021-07-07T00:00:00.000+00:00',
                priceBuy: 855000,
                priceSell: 865000,
                product: {
                  id: '8a68e4d478fd79e90178fd7a53b50000',
                  productName: 'Platinum',
                  productPriceBuy: 850000,
                  productPriceSell: 860000,
                  productImage: 'Ini image bronze',
                  productStatus: 1,
                  createdAt: '2021-04-22T17:00:00.000+00:00',
                  updatedAt: '2021-04-22T17:00:00.000+00:00',
                },
              },
            ],
            createdAt: '2021-04-22T17:00:00.000+00:00',
            updatedAt: '2021-04-22T17:00:00.000+00:00',
          },
        },
        {
          id: '4028808a7a5797eb017a57d22c910001',
          pocketName: 'Tabungan Nikah',
          pocketQty: 2.0,
          customer: {
            id: '8a68e4d478f8d7340178f8da705c0000',
            firstName: 'Melia',
            lastName: 'Suspariana',
            birthDate: '1999-09-20T17:00:00.000+00:00',
            address: 'Jl Pepaya Sungai Salak',
            status: 1,
            phoneNumber: '08123412342',
            username: 'melia',
            password: 'password',
            email: 'danarhikmah@student.ub.ac.id',
            pockets: [
              {
                id: '4028808d7913850e01791385f0430000',
                pocketName: 'Tabungan Kuliah',
                pocketQty: 3.5,
                product: {
                  id: '8a68e4d478fd79e90178fd7a53b50000',
                  productName: 'Platinum',
                  productPriceBuy: 850000,
                  productPriceSell: 860000,
                  productImage: 'Ini image bronze',
                  productStatus: 1,
                  historyPrices: [
                    {
                      id: '8a68e4d478fd79e90178fd7a53d80001',
                      historyDate: '2021-04-23T06:45:55.744+00:00',
                      priceBuy: 850000,
                      priceSell: 860000,
                      product: {
                        id: '8a68e4d478fd79e90178fd7a53b50000',
                        productName: 'Platinum',
                        productPriceBuy: 850000,
                        productPriceSell: 860000,
                        productImage: 'Ini image bronze',
                        productStatus: 1,
                        createdAt: '2021-04-22T17:00:00.000+00:00',
                        updatedAt: '2021-04-22T17:00:00.000+00:00',
                      },
                    },
                    {
                      id: '4028808a7a52d233017a52d42cd70000',
                      historyDate: '2021-07-07T00:00:00.000+00:00',
                      priceBuy: 855000,
                      priceSell: 865000,
                      product: {
                        id: '8a68e4d478fd79e90178fd7a53b50000',
                        productName: 'Platinum',
                        productPriceBuy: 850000,
                        productPriceSell: 860000,
                        productImage: 'Ini image bronze',
                        productStatus: 1,
                        createdAt: '2021-04-22T17:00:00.000+00:00',
                        updatedAt: '2021-04-22T17:00:00.000+00:00',
                      },
                    },
                  ],
                  createdAt: '2021-04-22T17:00:00.000+00:00',
                  updatedAt: '2021-04-22T17:00:00.000+00:00',
                },
              },
              {
                id: '4028808a7a57e4c6017a5819c1660004',
                pocketName: 'Tabungan Rumahh',
                pocketQty: 1.0,
                product: {
                  id: '8a68e4d478fd79e90178fd7a53b50000',
                  productName: 'Platinum',
                  productPriceBuy: 850000,
                  productPriceSell: 860000,
                  productImage: 'Ini image bronze',
                  productStatus: 1,
                  historyPrices: [
                    {
                      id: '8a68e4d478fd79e90178fd7a53d80001',
                      historyDate: '2021-04-23T06:45:55.744+00:00',
                      priceBuy: 850000,
                      priceSell: 860000,
                      product: {
                        id: '8a68e4d478fd79e90178fd7a53b50000',
                        productName: 'Platinum',
                        productPriceBuy: 850000,
                        productPriceSell: 860000,
                        productImage: 'Ini image bronze',
                        productStatus: 1,
                        createdAt: '2021-04-22T17:00:00.000+00:00',
                        updatedAt: '2021-04-22T17:00:00.000+00:00',
                      },
                    },
                    {
                      id: '4028808a7a52d233017a52d42cd70000',
                      historyDate: '2021-07-07T00:00:00.000+00:00',
                      priceBuy: 855000,
                      priceSell: 865000,
                      product: {
                        id: '8a68e4d478fd79e90178fd7a53b50000',
                        productName: 'Platinum',
                        productPriceBuy: 850000,
                        productPriceSell: 860000,
                        productImage: 'Ini image bronze',
                        productStatus: 1,
                        createdAt: '2021-04-22T17:00:00.000+00:00',
                        updatedAt: '2021-04-22T17:00:00.000+00:00',
                      },
                    },
                  ],
                  createdAt: '2021-04-22T17:00:00.000+00:00',
                  updatedAt: '2021-04-22T17:00:00.000+00:00',
                },
              },
              {
                id: '4028808a7a5797eb017a57d22c910001',
                pocketName: 'Tabungan Nikah',
                pocketQty: 2.0,
                product: {
                  id: '8a68e4d478fd79e90178fd7a53b50000',
                  productName: 'Platinum',
                  productPriceBuy: 850000,
                  productPriceSell: 860000,
                  productImage: 'Ini image bronze',
                  productStatus: 1,
                  historyPrices: [
                    {
                      id: '8a68e4d478fd79e90178fd7a53d80001',
                      historyDate: '2021-04-23T06:45:55.744+00:00',
                      priceBuy: 850000,
                      priceSell: 860000,
                      product: {
                        id: '8a68e4d478fd79e90178fd7a53b50000',
                        productName: 'Platinum',
                        productPriceBuy: 850000,
                        productPriceSell: 860000,
                        productImage: 'Ini image bronze',
                        productStatus: 1,
                        createdAt: '2021-04-22T17:00:00.000+00:00',
                        updatedAt: '2021-04-22T17:00:00.000+00:00',
                      },
                    },
                    {
                      id: '4028808a7a52d233017a52d42cd70000',
                      historyDate: '2021-07-07T00:00:00.000+00:00',
                      priceBuy: 855000,
                      priceSell: 865000,
                      product: {
                        id: '8a68e4d478fd79e90178fd7a53b50000',
                        productName: 'Platinum',
                        productPriceBuy: 850000,
                        productPriceSell: 860000,
                        productImage: 'Ini image bronze',
                        productStatus: 1,
                        createdAt: '2021-04-22T17:00:00.000+00:00',
                        updatedAt: '2021-04-22T17:00:00.000+00:00',
                      },
                    },
                  ],
                  createdAt: '2021-04-22T17:00:00.000+00:00',
                  updatedAt: '2021-04-22T17:00:00.000+00:00',
                },
              },
            ],
          },
          product: {
            id: '8a68e4d478fd79e90178fd7a53b50000',
            productName: 'Platinum',
            productPriceBuy: 850000,
            productPriceSell: 860000,
            productImage: 'Ini image bronze',
            productStatus: 1,
            historyPrices: [
              {
                id: '8a68e4d478fd79e90178fd7a53d80001',
                historyDate: '2021-04-23T06:45:55.744+00:00',
                priceBuy: 850000,
                priceSell: 860000,
                product: {
                  id: '8a68e4d478fd79e90178fd7a53b50000',
                  productName: 'Platinum',
                  productPriceBuy: 850000,
                  productPriceSell: 860000,
                  productImage: 'Ini image bronze',
                  productStatus: 1,
                  createdAt: '2021-04-22T17:00:00.000+00:00',
                  updatedAt: '2021-04-22T17:00:00.000+00:00',
                },
              },
              {
                id: '4028808a7a52d233017a52d42cd70000',
                historyDate: '2021-07-07T00:00:00.000+00:00',
                priceBuy: 855000,
                priceSell: 865000,
                product: {
                  id: '8a68e4d478fd79e90178fd7a53b50000',
                  productName: 'Platinum',
                  productPriceBuy: 850000,
                  productPriceSell: 860000,
                  productImage: 'Ini image bronze',
                  productStatus: 1,
                  createdAt: '2021-04-22T17:00:00.000+00:00',
                  updatedAt: '2021-04-22T17:00:00.000+00:00',
                },
              },
            ],
            createdAt: '2021-04-22T17:00:00.000+00:00',
            updatedAt: '2021-04-22T17:00:00.000+00:00',
          },
        },
      ];

      transactionService
        .getAll('8a68e4d478f8d7340178f8da705c0000')
        .subscribe((response: any) => {
          console.log('response from user.service.spec', response);
          expect(response).toEqual(mock);
        });

      const request = httpMock.expectOne(
        `http://localhost:8080/customer/8a68e4d478f8d7340178f8da705c0000/pockets`
      );

      request.flush(mock);
      expect(request.request.method).toBe('GET');
    });
  });

  describe('#postPocket', () => {
    it('should return an Observable<any>', () => {
      const mock = [];

      const credentials = {
        pocketName: 'CEK 1',
        pocketQty: 0,
        customer: {
          id: '8a68e4d478f8d7340178f8da705c0000',
        },
        product: {
          id: '8a68e4d478fcb20f0178fcb2f70b0000',
        },
      };
      transactionService.postPocket(credentials).subscribe((response: any) => {
        console.log('response from login.spec', response);
        expect(response).toEqual(mock);
      });

      const request = httpMock.expectOne(`http://localhost:8080/pocket`);
      request.flush(mock);
      expect(request.request.method).toBe('POST');
    });
  });

  describe('#updatePocket', () => {
    it('should return an Observable<any>', () => {
      const mock = [];

      const credentials = {
        id: '4028808d7912ad9a017912b107230000',
        pocketName: 'Tabungan Rumah',
        pocketQty: 3,
        customer: {
          id: '8a68e4d478f8d7340178f8da705c0000',
        },
        product: {
          id: '8a68e4d478fcb20f0178fcb2f70b0000',
        },
      };

      transactionService.updatePocket(credentials).subscribe((response: any) => {
        console.log('response from login.spec', response);
        expect(response).toEqual(mock);
      });

      const request = httpMock.expectOne(`http://localhost:8080/pocket`);
      request.flush(mock);
      expect(request.request.method).toBe('PUT');
    });
  });

  describe('#purchase pocket', () => {
    it('should return an Observable<any>', () => {
      const mock = {
        "id": "4028808a7a7aadd6017a7ae56fa20000",
        "purchaseDate": "2021-07-06T08:18:14.463+00:00",
        "purchaseType": 1,
        "customer": {
            "id": "8a68e4d478f8d7340178f8da705c0000",
            "firstName": "Melia",
            "lastName": "Suspariana",
            "birthDate": "1999-09-20T17:00:00.000+00:00",
            "address": "Jl Pepaya Sungai Salak",
            "status": 1,
            "phoneNumber": "08123412342",
            "username": "melia",
            "password": "password",
            "email": "danarhikmah@student.ub.ac.id",
            "pockets": [
                {
                    "id": "4028808d7913850e01791385f0430000",
                    "pocketName": "Tabungan Kuliah",
                    "pocketQty": 3.2,
                    "product": {
                        "id": "8a68e4d478fd79e90178fd7a53b50000",
                        "productName": "Platinum",
                        "productPriceBuy": 850000,
                        "productPriceSell": 860000,
                        "productImage": "Ini image bronze",
                        "productStatus": 1,
                        "historyPrices": [
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
                        ],
                        "createdAt": "2021-04-22T17:00:00.000+00:00",
                        "updatedAt": "2021-04-22T17:00:00.000+00:00"
                    }
                },
                {
                    "id": "4028808a7a57e4c6017a5819c1660004",
                    "pocketName": "Tabungan Rumahh",
                    "pocketQty": 1.0,
                    "product": {
                        "id": "8a68e4d478fd79e90178fd7a53b50000",
                        "productName": "Platinum",
                        "productPriceBuy": 850000,
                        "productPriceSell": 860000,
                        "productImage": "Ini image bronze",
                        "productStatus": 1,
                        "historyPrices": [
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
                        ],
                        "createdAt": "2021-04-22T17:00:00.000+00:00",
                        "updatedAt": "2021-04-22T17:00:00.000+00:00"
                    }
                },
                {
                    "id": "4028808a7a5797eb017a57d22c910001",
                    "pocketName": "Tabungan Nikah",
                    "pocketQty": 2.0,
                    "product": {
                        "id": "8a68e4d478fd79e90178fd7a53b50000",
                        "productName": "Platinum",
                        "productPriceBuy": 850000,
                        "productPriceSell": 860000,
                        "productImage": "Ini image bronze",
                        "productStatus": 1,
                        "historyPrices": [
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
                        ],
                        "createdAt": "2021-04-22T17:00:00.000+00:00",
                        "updatedAt": "2021-04-22T17:00:00.000+00:00"
                    }
                }
            ]
        },
        "purchaseDetails": [
            {
                "id": "4028808a7a7aadd6017a7ae56faa0001",
                "price": 860000,
                "quantityInGram": 0.3,
                "product": {
                    "id": "8a68e4d478fd79e90178fd7a53b50000",
                    "productName": "Platinum",
                    "productPriceBuy": 850000,
                    "productPriceSell": 860000,
                    "productImage": "Ini image bronze",
                    "productStatus": 1,
                    "historyPrices": [
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
                    ],
                    "createdAt": "2021-04-22T17:00:00.000+00:00",
                    "updatedAt": "2021-04-22T17:00:00.000+00:00"
                },
                "pocket": {
                    "id": "4028808d7913850e01791385f0430000",
                    "pocketName": null,
                    "pocketQty": null,
                    "customer": null,
                    "product": null
                }
            }
        ]
    }

      const credentials =
        {
            "purchaseType":1,
            "purchaseDetails": [
                {
                    "quantityInGram":0.3,
                    "pocket":{ 
                        "id":"4028808d7913850e01791385f0430000"
                    } 
                }
            ]
        }
    
      transactionService.createPurchase(credentials).subscribe((response: any) => {
        console.log('response from login.spec', response);
        expect(response).toEqual(mock);
      });
    });
  });

  describe('#delete pocket', () => {
    
    it('should return an Observable<any>', () => {
      const mock = []
        
      transactionService.deletePocket(id).subscribe((response: any) => {
        console.log('response from login.spec', response);
        expect(response).toEqual(mock);
      });

      transactionService.deletePocket(id).subscribe((response: any) => {
        console.log('response from login.spec', response);
        expect(response).toEqual(mock);
      });
    });    
  });


});
