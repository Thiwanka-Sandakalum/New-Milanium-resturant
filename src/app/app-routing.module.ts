import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartComponent } from './components/cart/cart.component';
import { AddCartComponent } from './components/add-cart/add-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'Menu', component:MenuComponent},
  {path: 'Cart', component:CartComponent},
  {path: 'addCart', component:AddCartComponent},
  {path: 'checkout', component:CheckoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
