import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BetService {
  private apiUrl = "http://localhost:3005/v1/api/bet";

  constructor(private http: HttpClient) {}

  createBet(betData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, betData);
  }

  getAllBets(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-all`);
  }

  deleteBet(betId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${betId}`);
  }
}
