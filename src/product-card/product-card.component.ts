import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('imgSrc')
  imgSrc: string;

  private productFormGroup = this.formBuilder.group({
    productNum: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {    
  }

  addToCart(){
    console.log(`Add to cart number: ${this.productFormGroup.controls['productNum'].value}`)
  }

}