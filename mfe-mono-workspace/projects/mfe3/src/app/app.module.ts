import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsListModule } from './products-list/products-list.module';
import { ProductsListRoutingModule } from './products-list/products-list-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
