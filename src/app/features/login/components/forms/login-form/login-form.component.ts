import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../../../core/services/api/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent {
  email: string = "";
  password: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        // Guardar los datos del usuario en localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // Mensaje de éxito
        Swal.fire({
          icon: "success",
          title: "Inicio de sesión exitoso",
          showConfirmButton: false,
          timer: 1500,
        });

        // Redirigir al usuario a la página de eventos o al dashboard
        this.router.navigate(["/event"]);
      },
      (error) => {
        // Mostrar mensaje de error
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Correo electrónico o contraseña incorrectos",
        });
      }
    );
  }
}
