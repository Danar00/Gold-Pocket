import { ResponseHistory, ResponsePurchase } from './../../../../shared/models/response.models';
import { HttpClient } from '@angular/common/http';
import { History, Purchase, PurchaseDetails } from './../models/history.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  history: History[] = []
  purhcases: Purchase[] = []

  constructor(private readonly http: HttpClient) {}

  getAll(id: string): Observable<ResponseHistory<History[]>> {
    
    return this.http
      .get<ResponseHistory<History[]>>(`http://localhost:8080/product-history/${id}`)
      .pipe(retry(3))

  }

  getPurchaseByCustomerId(id: string): Observable<ResponsePurchase<Purchase[]>> {

    return this.http
      .get<ResponsePurchase<Purchase[]>>(`http://localhost:8080/customer/${id}/purchase`)
      .pipe(retry(3))
  }

  
}

// 8a68e4d478f8d7340178f8da705c0000
