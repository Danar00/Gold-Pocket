import { Customer } from './../../transaction/models/transaction.model';
export interface History {
    id: string;
    historyDate: string;
    priceBuy: number;
    priceSell: number;
}

export interface Purchase {
    id: string;
    purchaseDate: string;
    purchaseType: number;
    customer: Customer;
    purchaseDetail: PurchaseDetails[];

}

export interface PurchaseDetails {
    id: string;
    price: number;
    quantityInGram: number;
}
