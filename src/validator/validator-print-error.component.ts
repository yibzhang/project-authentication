import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-validator-print-error',
  templateUrl: './validator-print-error.component.html',
  styleUrls: ['./validator-print-error.component.css'],
})
export class ValidatorPrintErrorComponent {

  @Input("control")
  control: any;
}