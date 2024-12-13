import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-event-filter-form",
  templateUrl: "./event-filter-form.component.html",
  styleUrls: ["./event-filter-form.component.scss"],
})
export class EventFilterFormComponent {
  @Output() filterChanged = new EventEmitter<string>();

  sportIds = [
    { id: "sr:sport:1", name: "Fútbol" },
    { id: "sr:sport:2", name: "Baloncesto" },
    { id: "sr:sport:3", name: "Tenis" },
  ];

  selectedSportId = "sr:sport:1";

  onFilterChange(event: Event): void {
    const target = event.target as HTMLSelectElement; 
    const newSportId = target.value; 
    this.selectedSportId = newSportId;
    this.filterChanged.emit(newSportId);
  }
}
