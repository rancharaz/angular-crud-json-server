import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';

/* routing created here */
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "seller-auth",
    component: SellerAuthComponent
  },
  {
    path: "seller-home",
    component: SellerHomeComponent,
    canActivate:[AuthGuard] /* authguard protects the routing //private routing */
  },
  {
    path: "seller-add-product",
    component: SellerAddProductComponent,
    canActivate:[AuthGuard] /* authguard protects the routing //private routing */

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
