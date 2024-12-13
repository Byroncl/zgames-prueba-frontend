import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./pages/login/login.component";
import { LoginFormComponent } from "./components/forms/login-form/login-form.component";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, LoginRoutingModule],
})
export class LoginModule {}
