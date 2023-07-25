import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) { 
console.log(db)
  }
  getCategories(){
    this.db.list('categories')

  }
}
