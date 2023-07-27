import { environment } from './../environment/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
import { CounterInputComponent } from './components/counter-input/counter-input.component';
import { FormsModule } from '@angular/forms';
import { appReducers } from './store/app.state';

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
    CounterInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [UserService, CategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
