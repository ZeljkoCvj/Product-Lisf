import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/list-service/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  hide!: boolean;
  onSubmitLogin(form: NgForm) {
    const { email, password } = form.value;
    this.authService.login({
      email,
      password,
    });
  }
}
