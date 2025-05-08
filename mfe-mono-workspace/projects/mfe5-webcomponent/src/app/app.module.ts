import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MfeProductsComponent } from './mfe-products/mfe-products.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  entryComponents: [MfeProductsComponent]
})
export class AppModule implements DoBootstrap{

  constructor(private component_injector: Injector) {
    console.log('mfe5 web component module');

    //call the `createCustomElement()` method to transform the component to a custom element
    const mfe = createCustomElement(MfeProductsComponent, { injector: this.component_injector });
    customElements.define('mfe5-web-app', mfe);
  }
  ngDoBootstrap(app: ApplicationRef): void {
    // if (environment.production) {
    //   const mfe = createCustomElement(AppComponent, { injector: this.component_injector });
    //   customElements.define('mfe5-web-app', mfe);
    // } else {
    //   app.bootstrap(AppComponent);
    // }

  }
}
