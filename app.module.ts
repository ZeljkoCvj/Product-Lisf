import { AddnProject } from "./store/list.actions";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./modules/material/material.module";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { environment } from "../../environment/environment";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductDetailComponent } from "./components/product-list/product-detail/product-detail.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/header/header.component";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DeleteDialogComponent } from "./components/product-list/delete-dialog/delete-dialog.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { SingupComponent } from "./components/auth/singup/singup.component";
import { ChangesComponent } from "./components/product-list/changes/changes.component";
import { StoreModule } from "@ngrx/store";
import { productListReducer } from "./store/list.reduce";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    HeaderComponent,
    AddProductComponent,
    DeleteDialogComponent,
    LoginComponent,
    SingupComponent,
    ChangesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ productList: productListReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
