import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { ProductListService } from "src/app/list-service/product-list.service";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent {
  constructor(
    private prdocutS: ProductListService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  addProductForm = new FormGroup({
    category: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    details: new FormGroup({
      brand: new FormControl("", Validators.required),
      color: new FormControl("", Validators.required),
      model: new FormControl("", Validators.required),
      weight: new FormControl("", Validators.required),
    }),
    name: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
  });

  onSubmit() {
    if (this.addProductForm.valid) {
      this.prdocutS.sendNewProductInDb(this.addProductForm);
      this.snackBar.open("Forma je uspesno poslata");
      setTimeout(() => {
        this.router.navigate(["/prodlist"]);
      }, 1500);

      this.addProductForm.reset();
      this.addProductForm.controls.details.reset();
    } else {
      this.addProductForm.markAllAsTouched();
      this.addProductForm.controls.details.markAllAsTouched();
      this.snackBar.open("Popunite prazna polja", "Undo", {
        duration: 1500,
      });
    }
  }
}
