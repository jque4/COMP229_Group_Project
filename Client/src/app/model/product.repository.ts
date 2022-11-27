import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepository
{
  private products: Product[] = [];
  private names: string[] = [];

  constructor(private dataSource: StaticDataSource)
  {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.names = data.map(p => p.name)
        .filter((n, index, array) => array.indexOf(n) === index).sort();
    });
  }

  getProducts(name: string = null): Product[]
  {
    return this.products
      .filter(p => name == null || name === p.name);
  }

  getProduct(id: number): Product
  {
    return this.products.find(p => p._id === id);
  }

  getNames(): string[]
  {
    return this.names;
  }
}