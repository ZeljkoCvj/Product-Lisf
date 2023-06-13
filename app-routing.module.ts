import { GuardGuard } from "src/guard/guard.guard";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { SingupComponent } from "./components/auth/singup/singup.component";
import { ProductDetailComponent } from "./components/product-list/product-detail/product-detail.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "prodlist",
    component: ProductListComponent,
    canActivate: [GuardGuard],
  },
  {
    path: "detailProduct",
    component: ProductDetailComponent,
    canActivate: [GuardGuard],
  },
  {
    path: "addProduct",
    component: AddProductComponent,
    canActivate: [GuardGuard],
  },
  { path: "", component: LoginComponent },

  { path: "singup", component: SingupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
