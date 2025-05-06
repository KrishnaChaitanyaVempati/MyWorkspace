import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MfeProductsComponent } from './mfe-products/mfe-products.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MfeProductsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
