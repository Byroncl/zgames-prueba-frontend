import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { BetService } from "../../../../../core/services/api/bet.service"; 
import Swal from "sweetalert2";

@Component({
  selector: "app-event-form-modal-bet-slip",
  templateUrl: "./event-form-modal-bet-slip.component.html",
  styleUrls: ["./event-form-modal-bet-slip.component.scss"],
})
export class EventFormModalBetSlipComponent implements OnInit {
  bets: any[] = []; 

  @Output() closeModal = new EventEmitter<void>();

  constructor(private betService: BetService) {}

  ngOnInit(): void {
    this.loadBets(); 
  }

  loadBets(): void {
    this.betService.getAllBets().subscribe(
      (response: any) => {
        if (response?.data?.result) {
          this.bets = response.data.result;
        } else {
          this.bets = [];
        }
      },
      (error) => {
        console.error("Error al cargar las apuestas:", error);
        Swal.fire("Error", "No se pudieron cargar las apuestas.", "error");
      }
    );
  }

  deleteBet(betId: string): void {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás recuperar esta apuesta después de eliminarla.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.betService.deleteBet(betId).subscribe(
          () => {
            Swal.fire("Eliminada", "La apuesta ha sido eliminada.", "success");
            this.loadBets(); // Recargar la lista de apuestas
          },
          (error) => {
            console.error("Error al eliminar la apuesta:", error);
            Swal.fire("Error", "No se pudo eliminar la apuesta.", "error");
          }
        );
      }
    });
  }

  handleCloseModal(): void {
    this.closeModal.emit();
  }
}
