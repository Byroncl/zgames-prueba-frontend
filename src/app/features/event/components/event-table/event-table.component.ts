import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-event-table",
  templateUrl: "./event-table.component.html",
  styleUrls: ["./event-table.component.scss"],
})
export class EventTableComponent {
  @Input() events: any[] = [];
  @Output() betSelected = new EventEmitter<any>();

  selectBet(event: any, odd: any): void {
    const selectedBet = {
      team: odd.name,
      odds: odd.odds,
      eventId: event.eventId, // ID único del evento
      event: `${event.homeTeam} vs. ${event.awayTeam}`, // Descripción del evento
      tournament: event.tournamentName,
    };
    this.betSelected.emit(selectedBet); // Emitir el evento seleccionado
  }
}
