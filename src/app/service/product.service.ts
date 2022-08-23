import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const PRODUCT_API = 'http://localhost:8080/api/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addToProductToOrder(orderId: number, message:string): Observable<any> {
    return this.http.post(PRODUCT_API + orderId + '/create', {
      message:message
    });
  }

  getProductsToOrder(orderId: number): Observable<any> {
    return this.http.get(PRODUCT_API + orderId + '/all');
  }

  delete(productId: number): Observable<any> {
    return this.http.post(PRODUCT_API +productId + '/delete', null)
  }
}
