import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {bootstrap} from '@angular-architects/module-federation-tools';
import { environment } from 'projects/mfe5-webcomponent/src/environments/environment';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
// bootstrap(
//   AppModule, {
//     production: environment.production,
//     appType: 'shell'
//   }
// );
