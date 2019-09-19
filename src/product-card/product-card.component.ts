import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Product } from './../_model/product';
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

  constructor(private formBuilder: FormBuilder) {
    this.product = new Product();
  }

  ngOnInit() {    
    this.product.name = "samsung tv";
    this.product.src = "https://cdn.verk.net/960/images/40/2_491556-2000x1437.jpeg";
  }

  addToCart(){
    var numInTotal: number;
    var numInForm = this.productFormGroup.controls['quantity'].value;
    var numInStorage = localStorage.getItem(`${environment.brand}_${this.product.name}`);

    if(numInForm){
      if(!numInStorage){
        numInTotal = numInForm;
      }else{
        numInTotal = numInForm + Number(numInStorage);
      }
      localStorage.setItem(`${environment.brand}_${this.product.name}`, numInTotal);
    }
    
    console.log(localStorage.getItem(`${environment.brand}_${this.product.name}`) + ` ${this.product.name} in cart`);
  }

}