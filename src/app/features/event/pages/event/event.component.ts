import { Component, OnInit } from "@angular/core";
import { EventService } from "../../../../core/services/api/event.service";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"],
})
export class EventComponent implements OnInit {
  events: any[] = []; // Lista de eventos
  selectedBet: any = null; // Apuesta seleccionada
  isBetSlipOpen = true; // Estado del acordeón (abierto o cerrado)

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getSportsEvents().subscribe((response) => {
      if (response && response.data) {
        this.events = response.data.map((event: any) => {
          const market = event.markets.find((m: any) => m.marketId === 1)
            ?.marketLines[0]?.outcomes;

          return {
            date: event.scheduled,
            homeTeam: event.competitorHome.competitorName.es,
            awayTeam: event.competitorAway.competitorName.es,
            odds: market
              ? market.map((o: any) => ({
                  id: o._id,
                  name: o.outcomeName.es,
                  odds: o.odds,
                }))
              : [],
          };
        });
      }
    });
  }

  toggleBetSlip(): void {
    this.isBetSlipOpen = !this.isBetSlipOpen;
  }

  handleBetSelected(bet: any): void {
    this.selectedBet = bet;
  }
}
