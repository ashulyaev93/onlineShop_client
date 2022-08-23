import {Product} from './Product'
export interface Order {
    id?: number;
    code: string;
    totalPrice: number;
    products?: Product[];
    username?: string;
}