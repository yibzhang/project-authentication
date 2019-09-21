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
    this.product.name = "samsung mobile phone";
    this.product.src = "https://cdn.verk.net/960/images/40/2_491556-2000x1437.jpeg";
  }

  addToCart(){
    if(this.product.name){
      // Add to cart 1 piece of product mininmun
      this.product.quantity = this.productFormGroup.controls['quantity'].value ?
      this.productFormGroup.controls['quantity'].value : 1;
      this.productService.addToCart(this.product);
    }else{
      console.log("Product doesn't exist");
    }
  }

  deleteFromCart(){}
}