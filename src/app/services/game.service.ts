import {Injectable} from '@angular/core';
import {Game} from "../models/game";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseURL = 'http://localhost:8080/api/games';

  constructor(private http: HttpClient) {
  }

  fetchAll(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseURL);
  }


  fetchGameById(gameId: number): Observable<Game> {
    return this.http.get<Game>(`${this.baseURL}/${gameId}`);
  }

  addGame(newGame: Game): Observable<Game> {
    return this.http.post<Game>(this.baseURL, newGame);
  }
}
