import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ProductListService } from "src/app/list-service/product-list.service";

@Component({
  selector: "app-changes",
  templateUrl: "./changes.component.html",
  styleUrls: ["./changes.component.scss"],
})
export class ChangesComponent {
  @Output() addProductFormEmitter = new EventEmitter<FormGroup>();
  constructor(private snackBar: MatSnackBar) {}

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
      this.addProductFormEmitter.emit(this.addProductForm);
      this.snackBar.open("Forma je uspesno poslata", "Undo", {
        duration: 1500,
      });
      this.addProductForm.reset();
      this.addProductForm.controls.details.reset();
    } else {
      this.addProductForm.markAllAsTouched();
      this.addProductForm.controls.details.markAllAsTouched();
    }
  }
}
