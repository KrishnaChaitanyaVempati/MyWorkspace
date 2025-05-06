import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { WebComponentComponent } from './web-component/web-component.component';
import { HostLoginComponent } from './host-login/host-login.component';
import { HostSignupComponent } from './host-signup/host-signup.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { AuthGuardGuard } from './shared-service/auth-guard.guard';

const MFE2_APP_URL = "http://localhost:4300/remoteEntry.js";
const MFE3_APP_URL = "http://localhost:4400/remoteEntry.js";
const MFE4_APP_URL = "http://localhost:4500/remoteEntry.js";
const MFE5_APP_URL = "http://localhost:4600/remoteEntry.js"

const routes: Routes = [
  { path: '', redirectTo: '/homeLogin/login', pathMatch: 'full' },// Default route
  {
    path: 'homeLogin', component: LoginComponent, children: [
      { path: 'login', component: HostLoginComponent },
      { path: 'signup', component: HostSignupComponent, canDeactivate: [AuthGuardGuard] },
    ]
  },
  {
    path: 'homePage', component: MainComponent, canActivateChild: [AuthGuardGuard],
    children: [
      // { path: '', redirectTo: '/home', pathMatch: "full" },
      { path: 'home', component: HomeComponent },
      // {path:'todo-list',component:TodoListComponent}
      {
        path: 'todo-list', loadChildren: () => {
          return loadRemoteModule({
            remoteEntry: MFE2_APP_URL,
            remoteName: "mfe2",
            exposedModule: "./TodoListModule"
          }).then(m => m.TodoListModule).catch(err => console.log(err));
          // return loadRemoteModule({
          //   remoteEntry: MFE3_APP_URL,
          //   remoteName: "mfe3",
          //   exposedModule: "./ProductsListModule"
          // }).then(m => m.ProductsListModule).catch(err => console.log(err));
        }
      },
      {
        path: 'products-list', loadChildren: () => {
          return loadRemoteModule({
            remoteEntry: MFE3_APP_URL,
            remoteName: "mfe3",
            exposedModule: "./ProductsListModule"
          }).then(m => m.ProductsListModule).catch(err => console.log(err));
        }
      },
      {
        path: 'dell-items', loadComponent: () => {
          return loadRemoteModule({
            remoteEntry: MFE4_APP_URL,
            remoteName: "mfe4",
            exposedModule: "./MfeProductsComponent"
          }).then(m => m.MfeProductsComponent).catch(err => console.log(err));
        }
      },
      /*{
        path: 'web-items', pathMatch: 'prefix', component: WebComponentWrapper,
        data: {
          type: 'module',
          remoteEntry: MFE5_APP_URL,
          remoteName: "mfe5Webcomponent",
          exposedModule: "./Mfe5AngularElement",
          elementName: 'mfe5-web-app'
        } as WebComponentWrapperOptions

      }*/
      // {
      //   matcher: startsWith('web-items'), component: WebComponentWrapper,
      //   data: {
      //     type: 'module',
      //     remoteEntry: MFE5_APP_URL,
      //     remoteName: "mfe5Webcomponent",
      //     exposedModule: "./Mfe5AngularElement",
      //     elementName: 'mfe5-web-app'
      //   } as WebComponentWrapperOptions

      // }
      // {
      //   matcher: startsWith('web-items'), loadComponent: () => {
      //     return loadRemoteModule({
      //       remoteEntry: MFE5_APP_URL,
      //       remoteName: "mfe5Webcomponent",
      //       exposedModule: "./AppModule"
      //     }).then(m => m.mfe5Webcomponent).catch(err => console.log(err));
      //   }

      // }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
