import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { Product } from './../_model/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor() { }

  public get productsObjFromStorage(){
    return JSON.parse(localStorage.getItem(environment.shoppingCart));
  }

  /*public get productsQuantityFromStorage(){
  }*/


  addToCart(product: Product){
    var numInTotal: number;
    var shoppingCartObject = this.productsObjFromStorage();

    if(shoppingCartObject.hasOwnProperty(product.name)){
      numInTotal = shoppingCartObject[product.name] + product.quantity;
    }else{
      numInTotal = product.quantity;
    }
    shoppingCartObject[product.name] = numInTotal;
    localStorage.setItem(environment.shoppingCart, JSON.stringify(shoppingCartObject));
    
    // debug print out
    console.log(JSON.parse(localStorage.getItem(environment.shoppingCart)));
  }

}