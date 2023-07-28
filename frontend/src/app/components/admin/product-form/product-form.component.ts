import { CategoryService } from './../../../services/category.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  categories: any;
  constructor(private categoryService: CategoryService) {}

  addProduct(data: any) {
    console.log(data);
  }
}
