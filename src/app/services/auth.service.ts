import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, map, mergeMap, Observable, of} from "rxjs";
import {AuthStorage} from "./auth-storage.service";
import {FormGroup} from "@angular/forms";
import {SignupRequest} from "../models/signup-request";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static readonly BASE_URL = 'http://localhost:8080/api/auth';

  private loggedIn = new BehaviorSubject<boolean>(!!this.sessionStorage.getToken());

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient,
              private sessionStorage: AuthStorage) {
  }

  login(username: string, password: string): Observable<boolean> {
    const signinRequest = {username, password};
    return this.http
      .post<any>(`${AuthService.BASE_URL}/signin`, signinRequest)
      .pipe(
        map((jwtResponse: any) => {
          this.sessionStorage.saveToken(jwtResponse.token);
          this.sessionStorage.saveUser(jwtResponse.username);
          this.loggedIn.next(true);
          return true;
        }),
        catchError((err) => {
          throw new Error(`error login for ${username}`);
        })
      );
  }

  logout() {
    this.loggedIn.next(false);
    this.sessionStorage.clearSession();
  }

  register(form: FormGroup): Observable<void> {
    return of(form)
      .pipe(map(f => {
          if (!form.valid) {
            throw new Error('Register form invalid')
          }
          let dto: SignupRequest = {
            username: f.value.username,
            password: f.value.password
          };
          console.log(dto)
          return dto;
        }),
        mergeMap(signupRequest => this.http.post<void>(`${AuthService.BASE_URL}/signup`, signupRequest)));
  }

  checkUsernameAlreadyExist(username: string): Observable<boolean> {
    // return this.http.get<boolean>(`${this.BASE_URL}/signup/already?username=${username}`);
    return of(false);
  }
}
