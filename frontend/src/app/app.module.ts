import { environment } from './../environment/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ShoppingCartComponent } from './components/pages/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { CheckOutComponent } from './components/pages/check-out/check-out.component';
import { OrderSuccessComponent } from './components/pages/order-success/order-success.component';
import { MyOrdersComponent } from './components/pages/my-orders/my-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';
import { UserService } from './services/user.service';
import { CategoryService } from './services/category.service';
import { CounterComponent } from './shared/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/reducers/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.forRoot({ count: counterReducer }),
  ],
  providers: [UserService, CategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
