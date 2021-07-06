import { PurchaseDetails } from './../profile/models/history.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Product,
  Transaction,
  Customer,
  Pocket,
  Purchase,
} from './models/transaction.model';
import {
  ResponseProduct,
  ResponseTransaction,
} from './../../../shared/models/response.models';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Params,
} from '@angular/router';
import { TransactionService } from './service/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  formPocket: FormGroup;
  formUpdatePocket: FormGroup;
  formTransactionBuy: FormGroup;

  responseCustomerId = JSON.parse(sessionStorage.getItem('user-id'));

  customerId: Customer = {
    id: this.responseCustomerId,
  };

  transaction: Transaction = {
    id: '8a68e4d478fd79e90178fd7a53b50000',
  };

  transactions: Transaction[] = [];

  pocket: Pocket = {
    id: '',
    pocketQty: 0,
  };

  products: Product = {
    id: '',
    productName: '',
    productPriceBuy: 0,
    productPriceSell: 0,
    productImage: '',
    productStatus: '',
  };

  pocketQty: number = 0;

  productPrice: number;

  purchase: Purchase = {
    purchaseType: 0
  }

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.formPocket = new FormGroup({
      pocketName: new FormControl('', [Validators.required]),
    });

    this.formUpdatePocket = new FormGroup({
      pocketUpdateName: new FormControl('', [Validators.required]),
    });

    this.formTransactionBuy = new FormGroup({
      gramPurchase: new FormControl('', [Validators.required]),
      idPocket: new FormControl('', [Validators.required])
    });

    this.getAllPocketById();
    this.getAllProductById();
  }

  submitForm(): void {
    const namesPocket: any = this.formPocket.value;
    this.transactionService
      .postPocket({
        pocketName: namesPocket.pocketName,
        pocketQty: 0,
        customer: this.customerId,
        product: this.transaction,
      })
      .subscribe();
    console.log('formPocket', this.formPocket.value);
    // window.location.reload();
  }

  updateForm(): void {
    const namesPocket: any = this.formUpdatePocket.value;
    this.transactionService
      .updatePocket({
        id: this.pocket.id,
        pocketName: namesPocket.pocketUpdateName,
        pocketQty: this.pocket.pocketQty,
        customer: this.customerId,
        product: this.transaction,
      })
      .subscribe();
    console.log('formUpdatePocket', this.formUpdatePocket.value);
    // window.location.reload();
  }

  //SemuaPocket
  getAllPocketById(): void {
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      console.log('query string:', queryParams);

      const id = queryParams.id || '8a68e4d478f8d7340178f8da705c0000';

      this.transactionService
        .getAll(id)
        .subscribe((response: ResponseTransaction<Transaction[]>) => {
          this.transactions = this.transactions.concat(response);

          console.log('ini all pocket : ', this.transactions);
          

          for (let i = 0; i < this.transactions.length; i++) {
            this.pocketQty += response[i].pocketQty;
          }
          console.log(this.pocketQty);

          console.log(this.transactions);
        });
    });
  }

  //PRICE BUY AND SELL PRODUCT
  getAllProductById(): void {
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      console.log('query string: ', queryParams);

      const id = queryParams.id || '8a68e4d478fd79e90178fd7a53b50000';

      this.transactionService.getPocketById(id).subscribe((response: any) => {
        this.products = response;
        this.productPrice = this.products.productPriceSell;

        console.log('ini produk: ', this.products);
      });
    });
  }

  deletePocketById(id: string): void {
    console.log('ini id : ', id);
    this.transactionService.deletePocket(id).subscribe();
    // window.location.reload();
  }

  purchaseBuy(): void {
    const purchaseTransaction: any = this.formTransactionBuy.value;
    const payLoad = [
      {
        quantityInGram: purchaseTransaction.gramPurchase,
        pocket: {
          id: purchaseTransaction.idPocket,
        },
      },
    ];
    console.log('ini payload', payLoad);
  
    this.transactionService.createPurchase({
      purchaseType: this.purchase.purchaseType,
      purchaseDetails: payLoad
    }).subscribe();
    // window.location.reload();

  }
}
