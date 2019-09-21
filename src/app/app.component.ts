import { Component } from '@angular/core';
import { AuthenticationService } from './../_service/authentication.service';
import { ProductService } from './../_service/product.service';
import { Router } from '@angular/router';

import { environment } from './../environments/environment';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css']
})
export class AppComponent  {
  public isCollapsed = true;

  constructor(private authenticationService: AuthenticationService,
              private productService: ProductService,
              private router: Router
  ){};
  
  deleteProductFromCart(e: Event, productName: string){
    console.log(`add product: ${productName}, but not close the dropdown`);
    this.productService.deleteFromCart(productName, 1);
    e.stopPropagation();
  }

  clearProductFromCart(e: Event, productObj){
    console.log(`clear product: ${productObj.key}, but not close the dropdown`);
    this.productService.deleteFromCart(productObj.key, productObj.value);
    e.stopPropagation();
  }

  emptyCart(){
    console.log('Empty cart!');
    this.productService.clearCart();
  }
}
