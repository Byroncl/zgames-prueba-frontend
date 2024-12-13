import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendaryComponent } from "./pages/calendary/calendary.component";

const routes: Routes = [
  {
    path: "",
    component: CalendaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CalendaryRoutingModule {}
