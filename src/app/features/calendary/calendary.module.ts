import { NgModule } from "@angular/core";

import { SharedModule } from "../../shared/shared.module";
import { CalendaryComponent } from "./pages/calendary/calendary.component";
import { CalendaryRoutingModule } from "./calendary-routing.module";



@NgModule({
  declarations: [CalendaryComponent],
  imports: [SharedModule, CalendaryRoutingModule],
})
export class CalendaryModule {}
