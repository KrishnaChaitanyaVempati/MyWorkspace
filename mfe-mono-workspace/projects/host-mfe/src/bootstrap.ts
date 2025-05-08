import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {bootstrap} from '@angular-architects/module-federation-tools';
import { environment } from 'projects/mfe5-webcomponent/src/environments/environment';
import { platformBrowser } from '@angular/platform-browser';

// better just take the major version 
// const ngVersion = require('../package.json').dependencies['@angular/core'];
const ngVersion = "15.2.0";

(window as any).plattform = (window as any).plattform || {};
let platform = (window as any).plattform[ngVersion];
if (!platform) {
  platform = platformBrowserDynamic();
  (window as any).plattform[ngVersion] = platform; 
}

platform.bootstrapModule(AppModule)
  .catch(err => console.error(err));

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
// bootstrap(
//   AppModule, {
//     production: environment.production,
//     appType: 'shell'
//   }
// );
