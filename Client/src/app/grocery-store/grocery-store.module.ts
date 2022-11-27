import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { GroceryStoreComponent } from '../grocery-store/grocery-store.component';
import { CounterDirective } from './counter.directive';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [GroceryStoreComponent, CounterDirective],
  exports: [GroceryStoreComponent, CounterDirective]
})
export class GroceryStoreModule {}