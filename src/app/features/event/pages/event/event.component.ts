import { Component, OnInit } from "@angular/core";
import { EventService } from "../../../../core/services/api/event.service";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"],
})
export class EventComponent implements OnInit {
  events: any[] = [];
  selectedBet: any = null;
  isBetSlipOpen = true;
  isFilterOpen = true;
  isModalOpen = false;
  selectedSportId = "sr:sport:1";

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents(this.selectedSportId);
  }

  loadEvents(sportId: string): void {
    this.eventService.getSportsEvents(sportId).subscribe((response) => {
      if (response && response.data) {
        // Transformar los datos
        this.events = response.data.map((event: any) => {
          const market = event.markets.find((m: any) => m.marketId === 1)
            ?.marketLines[0]?.outcomes;

          return {
            eventId: event.eventId, // ID único del evento
            date: event.scheduled, // Fecha del evento
            homeTeam: event.competitorHome.competitorName.es, // Equipo local
            awayTeam: event.competitorAway.competitorName.es, // Equipo visitante
            odds: market
              ? market.map((o: any) => ({
                  id: o._id, // ID del resultado
                  name: o.outcomeName.es, // Nombre del resultado (es)
                  odds: o.odds, // Cuota
                }))
              : [], // Manejo de caso sin odds
          };
        });
      }
    });
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  toggleBetSlip(): void {
    this.isBetSlipOpen = !this.isBetSlipOpen;
  }

  toggleFilter(): void {
    this.isFilterOpen = !this.isFilterOpen;
  }

  handleBetSelected(bet: any): void {
    this.selectedBet = bet;
  }

  handleFilterChanged(sportId: string): void {
    this.selectedSportId = sportId;
    this.loadEvents(sportId);
  }
}
