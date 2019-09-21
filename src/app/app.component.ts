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
  
  AddProductInCart(e: Event, productName: String){
    console.log(`add product: ${productName}, but not close the dropdown`);
    e.stopPropagation();
  }

  clearProductInCart(e: Event, productName: String){
    console.log(`clear product: ${productName}, but not close the dropdown`);
    e.stopPropagation();
  }
}
