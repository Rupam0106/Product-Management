import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/Product';
import { getProduct } from 'src/app/state/selectors/product.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  Products!: Observable<Product[]>;

  constructor(
    private store: Store<AppState>,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.Products = this.store.select(getProduct);
    console.log(this.store.select(getProduct))
  }
}
