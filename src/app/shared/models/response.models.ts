export interface ResponseTransaction<T> {
    id: string;
    pocketName: string;
    pocketQty: number;
    customer: T;
}

export interface ResponseProduct<T> {
    id: string;
    productName: string;
    productPriceBuy: number;
    productPriceSell: number;
    productImage: string;
    productStatus: string;
}

export interface ResponseHistory<T> {
    id: string;
    historyDate: string;
    priceBuy: number;
    priceSell: number;
    product: T;
}

export interface ResponsePurchase<T> {
    id: string;
    purchaseDate: string;
    purchaseType: string;
    customer: T;
    purchaseDetails: [];
}

export interface ResponsePurchaseTransaction<T> {
    purchaseType: number;
    purchaseDetails: T;
}