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
  selectedSportId = "sr:sport:1";

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents(this.selectedSportId);
  }

  loadEvents(sportId: string): void {
    this.eventService.getSportsEvents(sportId).subscribe((response) => {
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
