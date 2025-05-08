import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { MfeProductsComponent } from './mfe-products/mfe-products.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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
    customElements.define('mfe-web-app', mfe);

    const mfe2 = createCustomElement(MfeProductsComponent, { injector: this.component_injector });
    customElements.define('mfe2-web-app', mfe2);
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
