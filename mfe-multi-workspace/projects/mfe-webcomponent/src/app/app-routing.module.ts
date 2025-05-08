import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MfeProductsComponent } from './mfe-products/mfe-products.component';

const routes: Routes = [
  { path: '', redirectTo: "/mfe-web-products", pathMatch: "full" },
  { path: 'mfe-web-products', component: MfeProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("mfe web component app routing")
  }

}
