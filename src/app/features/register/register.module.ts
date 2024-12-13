import { NgModule } from "@angular/core";

import { SharedModule } from "../../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterFormComponent } from "./components/forms/register-form/register-form.component";
import { RegisterComponent } from "./pages/register/register.component";
import { RegisterRoutingModule } from "./register-routing.module";

@NgModule({
  declarations: [ RegisterComponent, RegisterFormComponent ],
  imports: [ SharedModule, RegisterRoutingModule, FormsModule, ReactiveFormsModule ],
})
export class RegisterModule {}
