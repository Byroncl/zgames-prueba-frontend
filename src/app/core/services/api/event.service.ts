import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EventService {
  private apiUrl =
    "https://betapi.zgameslatam.com/v1/api/sport-events/prematch-highlights?sportId=sr:sport:1&statusSportEvent=NotStarted&marketId=1&limit=10";

  constructor(private http: HttpClient) {}

  getSportsEvents(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  
}
