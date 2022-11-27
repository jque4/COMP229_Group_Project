import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GroceryStoreComponent } from '../grocery-store/grocery-store.component';


@Injectable()
export class StoreFirstGuard
{
  private firstNavigation = true;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    if (this.firstNavigation)
    {
      this.firstNavigation = false;
      if (route.component !== GroceryStoreComponent)
      {
        this.router.navigateByUrl('/product-list');
        return false;
      }
    }
    return true;
  }
}
