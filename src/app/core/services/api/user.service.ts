import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../../interfaces/api/user.interface"; 

@Injectable({
  providedIn: "root",
})
export class UserService {
  private apiUrl = "http://localhost:3005/v1/api/user";

  constructor(private http: HttpClient) {}

  create(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, user);
  }
}
