import { NgModule } from "@angular/core";

import { SharedModule } from "../../shared/shared.module";
import { EventComponent } from "./pages/event/event.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { EventRoutingModule } from "./event-routing.module";
import { EventTableComponent } from "./components/event-table/event-table.component";
import { EventFormBetSlipComponent } from "./components/forms/event-form-bet-slip/event-form-bet-slip.component";
import { EventFilterFormComponent } from "./components/filter/event-filter-form/event-filter-form.component";
import { EventFormModalBetSlipComponent } from "./components/forms/event-form-modal-bet-slip/event-form-modal-bet-slip.component";

@NgModule({
  declarations: [
    EventComponent,
    EventTableComponent,
    EventFormBetSlipComponent,
    EventFilterFormComponent,
    EventFormModalBetSlipComponent,
  ],
  imports: [SharedModule, EventRoutingModule, FormsModule, ReactiveFormsModule],
})
export class EventModule {}
