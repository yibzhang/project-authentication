import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Product } from './../_model/product';
import { ProductService } from './../_service/product.service';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product')
  product: Product;

  private productFormGroup = this.formBuilder.group({
    quantity: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService) {
    this.product = new Product();
  }

  ngOnInit() {    
    this.product.name = "samsung tv";
    this.product.src = "https://cdn.verk.net/960/images/40/2_491556-2000x1437.jpeg";
  }

  addToCart(){
    if(this.product.name)
      this.product.quantity = this.productFormGroup.controls['quantity'].value ?
      this.productFormGroup.controls['quantity'].value : 0;
      this.productService.addToCart(this.product);
    }else{
      console.log("Product doesn't exist");
    }

    /*var numInTotal: number;    
    var numInStorage: number;
    var numInForm = this.productFormGroup.controls['quantity'].value;
    var shoppingCartObject = JSON.parse(localStorage.getItem(environment.shoppingCart));

    if(this.product.name){
      // numInForm default is 1    
      if(!numInForm) numInForm = 1;
      // If shoppingCartObject doesn't exist in storage, set to empty object
      if(!shoppingCartObject) shoppingCartObject = {};
      // No key in shoppingCart, set numInStorage 0
      if(shoppingCartObject.hasOwnProperty(this.product.name)){
        numInStorage = shoppingCartObject[this.product.name];
      }else{
        numInStorage = 0;
      }

      // Set storage
      numInTotal = numInForm + Number(numInStorage);
      shoppingCartObject[this.product.name] = numInTotal;
      localStorage.setItem(environment.shoppingCart, JSON.stringify(shoppingCartObject));

      // debug print out
      console.log(JSON.parse(localStorage.getItem(environment.shoppingCart)));
    }else{
      console.log("Product doesn't exist");
    }*/
  }

  deleteFromCart(){}
}