import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { noop } from 'rxjs';
import { bootstrap } from '@angular-architects/module-federation-tools';
import { environment } from './environments/environment.prod';
import { enableProdMode } from '@angular/core';

// better just take the major version 
// const ngVersion = require('../package.json').dependencies['@angular/core'];
// const ngVersion = "15.2.0";

// (window as any).plattform = (window as any).plattform || {};
// let platform = (window as any).plattform[ngVersion];
// if (!platform) {
//   platform = platformBrowserDynamic();
//   (window as any).plattform[ngVersion] = platform; 
// }

// platform.bootstrapModule(AppModule, { ngZone: 'noop' })
//   .catch(err => console.error(err));

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: 'noop' })
  .catch(err => console.error(err));

// bootstrap(
//   AppModule, {
//     production: environment.production,
//     appType: 'microfrontend'
//   }
// );
