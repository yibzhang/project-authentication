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

  productQuantityFromStorage(name: string){
    return this.productsObjFromStorage.hasOwnProperty(name)?
    this.productsObjFromStorage[name] : 0;
  }

  addToCart(product: Product){
    var obj = this.productsObjFromStorage;
    obj[product.name] = product.quantity + this.productQuantityFromStorage(product.name);      
    localStorage.setItem(environment.shoppingCart,JSON.stringify(obj));

    // debug print out
    console.log(this.productsObjFromStorage);
    //console.log(this.totalQuantityFromStorage);
  }

  deleteFromCart(productName: string, quantity: number){
    var obj = this.productsObjFromStorage;
    if(obj.hasOwnProperty(productName)){
      if(obj[productName] > quantity){
        obj[productName] = obj[productName] - quantity;
      }else{
        delete obj[productName];
      }
    }
    localStorage.setItem(environment.shoppingCart, JSON.stringify(obj));

    // debug print
    console.log(this.productsObjFromStorage);
  }

  clearCart(){
    localStorage.setItem(environment.shoppingCart, JSON.stringify({}));
  }
}