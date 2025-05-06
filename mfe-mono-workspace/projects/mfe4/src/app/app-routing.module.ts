import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MfeProductsComponent } from './mfe-products/mfe-products.component';

const routes: Routes = [
  {path:'', redirectTo:'/mfe-products', pathMatch:'full'},
  // { path: 'mfe-products', loadComponent: () => import("./mfe-products/mfe-products.component").then(m => m.MfeProductsComponent) }
  {path:'mfe-products', component:MfeProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
