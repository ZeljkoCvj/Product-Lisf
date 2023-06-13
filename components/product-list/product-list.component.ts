import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { Observable, Subscription } from "rxjs";
import { ProductListService } from "src/app/list-service/product-list.service";
import { Product } from "src/app/models/product";
import { DeleteDialogComponent } from "./delete-dialog/delete-dialog.component";
import { ChangesComponent } from "./changes/changes.component";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent {
  products!: Observable<{ products: Product[] }>;

  productSubscriber!: Subscription;
  constructor(
    private prodcutSerice: ProductListService,
    private dialog: MatDialog,
    private store: Store<{ productList: { products: Product[] } }>
  ) {}

  openDetail(item: number) {
    this.prodcutSerice.selectSameProduct(item);
  }

  openDialog(event: Event, id: any) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DeleteDialogComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.prodcutSerice.deleteOneProduct(id);
      } else {
        return;
      }
    });
  }

  openChangeDialog(event: Event, id: any) {
    event!.stopPropagation();
    const dialogRef = this.dialog.open(ChangesComponent, {});

    dialogRef.componentInstance.addProductFormEmitter.subscribe(
      (formValue: any) => {
        this.prodcutSerice.changeProduct(id, formValue);
      }
    );
  }

  // ...

  ngOnInit() {
    this.products = this.store.select("productList");
    console.log(this.products);
    console.log(this.prodcutSerice.getProducts());
    this.prodcutSerice.getProducts();

    // this.productSubscriber =
    //   this.prodcutSerice.aviliablrProdcutChange.subscribe((result) => {
    //     this.products = result;
    //   });
  }
}
