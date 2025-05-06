import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListModule } from './products-list/products-list.module';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  // { path: 'products', loadChildren: () => import("./products-list/products-list.module").then(m => m.ProductsListModule) }
  { path: '', redirectTo: "/mfe-products-list", pathMatch: "full" },
  { path: 'mfe4Products', component: ProductsListComponent },
  { path: 'mfe-products-list', loadChildren:()=>import("./products-list/products-list.module").then(m=>m.ProductsListModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
