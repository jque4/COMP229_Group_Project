import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GroceryStoreComponent } from './grocery-store/grocery-store.component';
import { StoreFirstGuard } from './guards/storeFirst.guard';
import { CartDetailComponent } from './grocery-store/cart-detail/cart-detail.component';
import { CheckoutComponent } from './grocery-store/checkout/checkout.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},

  {path: 'product-list', component: GroceryStoreComponent, data: { title: 'Grocery Store'}, canActivate: [StoreFirstGuard]},
  {path: 'cart', component: CartDetailComponent, data: { title: 'Shopping Cart'}, canActivate: [StoreFirstGuard]},
  {path: 'checkout', component: CheckoutComponent, data: { title: 'Checkout'}, canActivate: [StoreFirstGuard]},

  {path: 'contact', component: ContactComponent, data: {title: 'Contact'}},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ StoreFirstGuard]
})
export class AppRoutingModule { }
