import { Subscription } from "rxjs";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ProductListService } from "src/app/list-service/product-list.service";
import { NavigationStart, Router } from "@angular/router";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  selectedProduct: any;
  selectSubscriber!: Subscription;
  constructor(
    private productService: ProductListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.selectedProduct = this.productService.getSelectedProduct();
  }
}
