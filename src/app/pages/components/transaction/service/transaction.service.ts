import { Customer, Purchase } from './../models/transaction.model';
import { ResponseProduct } from './../../../../shared/models/response.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, Transaction } from '../models/transaction.model';
import { ResponseTransaction } from 'src/app/shared/models/response.models';
import { retry, tap, map } from 'rxjs/operators';

let id = JSON.parse(sessionStorage.getItem('user-id'))

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transaction: Transaction[] = [];

  constructor(private readonly http: HttpClient) { }

  // POCKET BY USER
  getAll(id: string): Observable<ResponseTransaction<Transaction[]>> {

    return this.http
      .get<ResponseTransaction<Transaction[]>>(`http://localhost:8080/customer/${id}/pockets`)
      .pipe(retry(3))

  }

  //PRICE SELL AND BUY
  getPocketById(id: string): Observable<ResponseProduct<Product[]>> {

    return this.http
      .get<ResponseProduct<Product>>(`http://localhost:8080/product/${id}`)
      .pipe(retry(3))

  }

  postPocket(pocketPost: {pocketName: String, pocketQty: number, customer: Customer, product: Transaction}): Observable<any> {

    return this.http.post(`http://localhost:8080/pocket`, pocketPost).pipe(retry(3))
  }

  deletePocket(idPocket: string) {
    console.log(`Id Pocket : ${idPocket}`);
    
    return this.http.delete(`http://localhost:8080/pocket/${idPocket}`).pipe(retry(3))
  }

  updatePocket(pocketPut: {id: string, pocketName: string, pocketQty: number, customer: Customer, product: Transaction}): Observable<any> {

    return this.http.put(`http://localhost:8080/pocket`, pocketPut).pipe(retry(3)) 
  }

  createPurchase(purchase: {purchaseType: number, purchaseDetails: any}): Observable<Purchase> {
    
    return this.http
    .post<Purchase>(`http://localhost:8080/purchase?customerId=${id}`, purchase)
    .pipe(retry(3))
  }

}
