import { AuthService } from "src/app/list-service/auth.service";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-singup",
  templateUrl: "./singup.component.html",
  styleUrls: ["./singup.component.scss"],
})
export class SingupComponent {
  hide!: boolean;
  constructor(private authService: AuthService) {}
  onSubmitSignup(form: NgForm) {
    const { email, password } = form.value;
    this.authService.singup({
      email,
      password,
    });
  }
}
