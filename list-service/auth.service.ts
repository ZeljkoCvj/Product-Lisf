import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { auth } from "../models/auth";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isAuthoritation!: boolean;
  isAuth = new Subject<boolean>();
  isAuthitication!: boolean;
  constructor(
    private auths: AngularFireAuth,
    private router: Router,
    private snacbar: MatSnackBar
  ) {}

  async login(auth: auth) {
    try {
      const resolve = await this.auths.signInWithEmailAndPassword(
        auth.email,
        auth.password
      );
      localStorage.setItem("Product-List", resolve.user?.uid as string);
      this.snacbar.open("Succes Login", "Undo", {
        duration: 1500,
      });
    } catch (err) {
      this.snacbar.open("Eror", "err", {
        duration: 1500,
      });
    }
  }

  async singup(auth: auth) {
    try {
      const resolve = await this.auths.createUserWithEmailAndPassword(
        auth.email,
        auth.password
      );

      localStorage.setItem("Product-List", resolve.user?.uid as string);
      this.snacbar.open("Succes SingUp", "Undo", {
        duration: 1500,
      });
    } catch (err) {
      this.snacbar.open("Eror", "err", {
        duration: 1500,
      });
    }
  }

  isLoginLogout() {
    this.auths.authState.subscribe((result) => {
      if (result) {
        this.isAuth.next(true);
        this.isAuthitication = true;
        this.router.navigate(["/prodlist"]);
      } else {
        this.isAuth.next(false);
        this.isAuthitication = false;
        this.router.navigate(["/"]);
      }
    });
  }

  logout() {
    localStorage.removeItem("Product-List");
    this.auths.signOut();
    this.isAuthitication = false;
  }

  isAuths(): boolean {
    return this.isAuthitication;
  }
}
