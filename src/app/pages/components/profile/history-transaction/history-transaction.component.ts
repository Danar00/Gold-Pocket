import { PurchaseDetails } from './../models/history.model';
import { ResponseHistory, ResponsePurchase } from './../../../../shared/models/response.models';
import { HistoryService } from './../service/history.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { History, Purchase } from '../models/history.model';

@Component({
  selector: 'app-history-transaction',
  templateUrl: './history-transaction.component.html',
  styleUrls: ['./history-transaction.component.css']
})
export class HistoryTransactionComponent implements OnInit {

  histories: History[] = [];
  purchases: Purchase[] = []
  purchaseDetail: PurchaseDetails = {
    id: '',
    price: 0,
    quantityInGram: 0
  }
  isBuy: boolean;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly historyService: HistoryService
  ) { }

  ngOnInit(): void {
    this.getAllHistoryByProductId();
    this.getPurchaseByCustomerId();
    console.log("ini oninitnya history");
    
  }

  getAllHistoryByProductId(): void {
    
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      
      console.log('query string:', queryParams);

      const id = queryParams.id || '1';

      this.historyService.getAll(id)
        .subscribe((response: ResponseHistory<History[]>) => {
          
          this.histories = this.histories.concat(response);

          console.log('ini data history: ',this.histories);
          
        })
    })
  }

  getPurchaseByCustomerId(): void {
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      console.log('query string:', queryParams);

      const id = queryParams.id || '2c9380827a844fb1017a84530696002d'

      this.historyService.getPurchaseByCustomerId(id)
        .subscribe((response: ResponsePurchase<Purchase[]>) => {

          // this.purchases = this.purchases.concat(response)
          // this.purchaseDetail = this.purchaseDetail.concat(response)
          

          console.log('ini data purchase: ', this.purchases);
          
        })
      
    })
  }


}
