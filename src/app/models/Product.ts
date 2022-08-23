import {Order} from "./Order";

export interface Product {
    id?: number;
    title: string;
    price: number;
    storageQuantity: number;
    createdDate: string;
    order: Order;
    image?: File;
}