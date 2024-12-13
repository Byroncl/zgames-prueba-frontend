import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-event-form-bet-slip",
  templateUrl: "./event-form-bet-slip.component.html",
  styleUrls: ["./event-form-bet-slip.component.scss"],
})
export class EventFormBetSlipComponent implements OnInit {
  @Input() selectedBet: any = null;

  betForm!: FormGroup; 
  possibleWin: number = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.betForm = this.fb.group({
      betAmount: [0, [Validators.required, Validators.min(1)]], 
    });

    this.betForm.get('betAmount')?.valueChanges.subscribe((amount) => {
      this.calculatePossibleWin(amount);
    });
  }

  calculatePossibleWin(amount: number): void {
    if (this.selectedBet && amount > 0) {
      this.possibleWin = amount * this.selectedBet.odds;
    } else {
      this.possibleWin = 0;
    }
  }

  confirmBet(): void {
    if (this.betForm.valid && this.selectedBet) {
      const betAmount = this.betForm.value.betAmount;
      console.log("Apuesta confirmada:", {
        event: this.selectedBet.event,
        team: this.selectedBet.team,
        odds: this.selectedBet.odds,
        betAmount,
        possibleWin: this.possibleWin,
      });
    }
  }
}
