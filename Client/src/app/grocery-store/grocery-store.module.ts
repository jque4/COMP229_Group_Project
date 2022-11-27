import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { GroceryStoreComponent } from '../grocery-store/grocery-store.component';
import { CounterDirective } from './counter.directive';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [GroceryStoreComponent, CounterDirective, CartDetailComponent, CheckoutComponent],
  exports: [GroceryStoreComponent, CounterDirective, CheckoutComponent]
})
export class GroceryStoreModule {}