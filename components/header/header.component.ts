import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/list-service/auth.service";
import { ProductListService } from "src/app/list-service/product-list.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  isAuth!: boolean;
  constructor(private auths: AuthService) {}

  logout() {
    this.auths.logout();
  }
  ngOnInit() {
    this.auths.isAuth.subscribe((result) => {
      this.isAuth = result;
    });
  }
}
