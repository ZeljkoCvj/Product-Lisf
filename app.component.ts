import { Component, OnInit } from "@angular/core";
import { AuthService } from "./list-service/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "Product-List";
  constructor(private auths: AuthService) {}
  ngOnInit() {
    this.auths.isLoginLogout();
  }
}
