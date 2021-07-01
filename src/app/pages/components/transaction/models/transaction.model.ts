import { PurchaseDetails } from "../../profile/models/history.model";

export interface Transaction {
    id: string;
    pocketName?: string;
    pocketQty?: number;
}

export interface Customer {
    id: string
}

export interface Product {
    id: string;
    productName: string;
    productPriceBuy: number;
    productPriceSell: number;
    productImage: string;
    productStatus: string;
}

export interface Pocket {
    id: string;
    pocketQty: number;
}

export interface Purchase {
    purchaseType: number;
}