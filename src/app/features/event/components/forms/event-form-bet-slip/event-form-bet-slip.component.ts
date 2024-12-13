import { Component, Input } from "@angular/core";

@Component({
  selector: "app-event-form-bet-slip",
  templateUrl: "./event-form-bet-slip.component.html",
  styleUrls: ["./event-form-bet-slip.component.scss"],
})
export class EventFormBetSlipComponent {
  @Input() selectedBet: any = null;
  betAmount: number = 0;
  possibleWin: number = 0;

  updateBetAmount(amount: number): void {
    this.betAmount = amount;
    this.calculatePossibleWin();
  }

  calculatePossibleWin(): void {
    if (this.selectedBet && this.betAmount > 0) {
      this.possibleWin = this.betAmount * this.selectedBet.odds;
    } else {
      this.possibleWin = 0;
    }
  }
}
