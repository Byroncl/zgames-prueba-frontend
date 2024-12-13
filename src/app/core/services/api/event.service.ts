import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EventService {
  private baseUrl =
    "https://betapi.zgameslatam.com/v1/api/sport-events/prematch-highlights";

  constructor(private http: HttpClient) {}

  getSportsEvents(sportId: string): Observable<any> {
    const apiUrl = `${this.baseUrl}?sportId=${sportId}&statusSportEvent=NotStarted&marketId=1&limit=10`;
    return this.http.get(apiUrl);
  }
}
