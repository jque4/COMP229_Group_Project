import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, from } from 'rxjs';
import { Order } from './order.model';


@Injectable()
export class StaticDataSource
{
  private products: Product[] =
  [
    new Product(1, 'Product 1',  10, 32),
    new Product(2, 'Product 2',  10, 32),
    new Product(3, 'Product 3',  10, 32),
    new Product(4, 'Product 4',  10, 32),
    new Product(5, 'Product 5',  10, 32),
    new Product(6, 'Product 6',  10, 32),
    new Product(7, 'Product 7',  10, 32),
    new Product(8, 'Product 8',  10, 32),
    new Product(9, 'Product 9',  10, 32),
    new Product(10, 'Product 10',  10, 32),
    new Product(11, 'Product 11',  10, 32),
    new Product(12, 'Product 12',  10, 32),
    new Product(13, 'Product 13',  10, 32),
    new Product(14, 'Product 14',  10, 32),
    new Product(15, 'Product 15',  10, 32),
  ];

  getProducts(): Observable<Product[]>
  {
    return from([this.products]);
  }
  saveOrder(order: Order): Observable<Order>
  {
    console.log(JSON.stringify(order));
    return from ([order]);
  }
}
