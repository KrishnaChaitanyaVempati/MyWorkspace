import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule, 
    // ProductsListRoutingModule
    RouterModule.forChild([
      //{ path: '', redirectTo: '/mfe-products-list', pathMatch: 'full' },
      { path: '', component: ProductsListComponent }
    ])
  ]
})
export class ProductsListModule { }
