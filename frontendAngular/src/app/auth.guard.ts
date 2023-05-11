import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerService } from './services/seller.service';

@Injectable({
  providedIn: 'root'
})

/* protects the routing */
export class AuthGuard implements CanActivate {
  constructor(private SellerService:SellerService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      /* if seller true go to protected routes */
      if(localStorage.getItem('seller')){
      return true;
  
  
      }
      return this.SellerService.isSellerLoggedIn; 
    /*  if seller is loggedin datatype==true==protectedroute and redirect*/
  }
  
}
