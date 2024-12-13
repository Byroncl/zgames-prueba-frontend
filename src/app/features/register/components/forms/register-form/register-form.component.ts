import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../../../../../core/services/api/user.service";
import { User } from "../../../../../core/interfaces/api/user.interface"; 

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"],
})
export class RegisterFormComponent {
  user: User = {
    username: "",
    email: "",
    password: "",
  };

  constructor(private userService: UserService, private router: Router) {}

  register(): void {
    this.userService.create(this.user).subscribe(() => {
      this.router.navigate(["/login"]);
    });
  }
}
