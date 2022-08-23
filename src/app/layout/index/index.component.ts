import { Component, OnInit } from '@angular/core';
import {Order} from "../../models/Order";
import {User} from "../../models/User";
import {OrderService} from "../../service/order.service";
import {UserService} from "../../service/user.service";
import {ProductService} from "../../service/product.service";
import {NotificationService} from "../../service/notification.service";

@Component({
  selector: 'app-index',
  templateUrl:  './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isOrdersLoaded = false;
  orders: Order[];
  isUserDataLoaded = false;
  user: User;

  constructor(
      private orderService: OrderService,
      private userService: UserService,
      private productService: ProductService,
      private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.orderService.getAllOrders()
        .subscribe(data => {
          console.log(data);
          this.orders = data;
          this.getProductsToOrder(this.orders)
          this.isOrdersLoaded = true;
        });

    this.userService.getCurrentUser()
        .subscribe(data => {
          this.user = data;
          this.isUserDataLoaded = true;
        })
  }

  getProductsToOrder(orders: Order[]): void {
    orders.forEach(p => {
      this.productService.getProductsToOrder(p.id)
          .subscribe(data => {
            p.products = data
          })
    });
  }

  likeOrder(orderId: number, orderIndex: number): void {
    const order = this.orders[orderIndex];
    console.log(order);
    }

    orderProduct(message: string, orderId: number, orderIndex: number): void {
      const order = this.orders[orderIndex];

      console.log(order);
      this.productService.addToProductToOrder(orderId, message)
          .subscribe(data => {
            console.log(data);
              order.products.push(data);
          });
    }

    formatImage(img: any): any {
      if(img == null) {
        return null;
      }
      return 'data:image/jpeg;base64,' + img;
    }


}
