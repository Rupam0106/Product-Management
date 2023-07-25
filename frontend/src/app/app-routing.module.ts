import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { ShoppingCartComponent } from './components/pages/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/pages/check-out/check-out.component';
import { OrderSuccessComponent } from './components/pages/order-success/order-success.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'check-out',
    component: CheckOutComponent,
  },
  {
    path: 'order-success',
    component: OrderSuccessComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin/products',
    component: AdminProductsComponent,
  },
  {
    path: 'admin/products/new',
    component: ProductFormComponent,
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
