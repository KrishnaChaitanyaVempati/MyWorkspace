import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mfe-products',
  templateUrl: './mfe-products.component.html',
  styleUrls: ['./mfe-products.component.scss']
})
export class MfeProductsComponent {

  constructor(){
    console.log("mfe web component")
  }

}
