import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order} from "../models/Order";
import {Observable} from "rxjs";

const POST_API = 'http://localhost:8080/api/post'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(post: Order): Observable<any> {
    return this.http.post(POST_API + 'create', post);
  }

  getAllOrders(): Observable<any> {
    return this.http.get(POST_API + 'api');
  }

  getOrdersForCurrentUser(): Observable<any> {
    return this.http.get(POST_API + 'user/posts');
  }

  delete(id: number): Observable<any> {
    return this.http.post(POST_API + '/delete', null)
  }
}
