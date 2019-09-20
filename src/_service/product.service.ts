import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { Product } from './../_model/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor() { }

  public get productsObjFromStorage(){
    return localStorage.getItem(environment.shoppingCart)?
    JSON.parse(localStorage.getItem(environment.shoppingCart)) : {};
  }

  public get totalQuantityFromStorage(){
    return Object.keys(this.productsObjFromStorage).map(key => this.productsObjFromStorage[key]).reduce((a, b) => a + b, 0);
  }

  sumQuantityFromStorage(index: number, end: number){
  }

  productQuantityFromStorage(name: string){
    return this.productsObjFromStorage.hasOwnProperty(name)?
    this.productsObjFromStorage[name] : 0;
  }

  addToCart(product: Product){
    var obj = this.productsObjFromStorage;
    obj[product.name] = product.quantity + this.productQuantityFromStorage(product.name);        
    localStorage.setItem(environment.shoppingCart,JSON.stringify(obj));

    // debug print out
    console.log(JSON.parse(localStorage.getItem(environment.shoppingCart)));
    //console.log(this.totalQuantityFromStorage);
  }

}