import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list.component';

const routes: Routes = [
  // { path: '', redirectTo: '/mfe-products-list', pathMatch: 'full' },
  { path: '', component: ProductsListComponent }
  // { path: '', component: ProductsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsListRoutingModule {
  constructor(){
    console.log("product mfe3 routing module")
  }
 }
