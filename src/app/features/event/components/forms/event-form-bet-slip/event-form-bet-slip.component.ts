import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { BetService } from "../../../../../core/services/api/bet.service"; 
import Swal from "sweetalert2";
@Component({
  selector: "app-event-form-bet-slip",
  templateUrl: "./event-form-bet-slip.component.html",
  styleUrls: ["./event-form-bet-slip.component.scss"],
})
export class EventFormBetSlipComponent {
  @Input() selectedBet: any = null;
  betAmount: number = 0;
  possibleWin: number = 0;

  constructor(private betService: BetService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["selectedBet"] && changes["selectedBet"].currentValue) {
      this.calculatePossibleWin();
    }
  }

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

  confirmBet(): void {
    if (!this.selectedBet || this.betAmount <= 0) {
      Swal.fire(
        "Error",
        "Debes seleccionar un evento y un monto válido.",
        "error"
      );
      return;
    }

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (!user._id) {
      Swal.fire(
        "Error",
        "No se pudo identificar al usuario logueado.",
        "error"
      );
      return;
    }

    if (!this.selectedBet.eventId) {
      Swal.fire(
        "Error",
        "No se pudo identificar el evento seleccionado.",
        "error"
      );
      return;
    }

    const betData = {
      user: user._id,
      event: this.selectedBet.eventId, 
      team: this.selectedBet.team,
      amount: this.betAmount,
      odds: this.selectedBet.odds,
      possibleWin: this.possibleWin,
    };

    this.betService.createBet(betData).subscribe(
      (response) => {
        Swal.fire("Éxito", "Apuesta registrada exitosamente.", "success");
        this.resetForm();
      },
      (error) => {
        console.error("Error al registrar la apuesta:", error);
        Swal.fire(
          "Error",
          "Hubo un problema al registrar la apuesta.",
          "error"
        );
      }
    );
  }

  resetForm(): void {
    this.betAmount = 0;
    this.possibleWin = 0;
    this.selectedBet = null;
  }
}
