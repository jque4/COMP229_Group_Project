import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from './../model/product.repository';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'app-grocery-store',
  templateUrl: './grocery-store.component.html',
  styleUrls: ['./grocery-store.component.css']
})
export class GroceryStoreComponent {

  public selectedName = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: ProductRepository,
              private cart: Cart) { }

  get products(): Product[]
  {
    const pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedName)
    .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get names(): string[]
  {
    return this.repository.getNames();
  }

  changeName(newName?: string): void
  {
    this.selectedName = newName;
  }

  changePage(newPage: number): void
  {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number): void
  {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number
  {
    return Math.ceil(this.repository
      .getProducts(this.selectedName).length / this.productsPerPage);
  }

  addProductToCart(product: Product): void
  {
    this.cart.addLine(product);
  }
}


