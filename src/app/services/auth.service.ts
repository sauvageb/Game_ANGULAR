import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, delay, map, mergeMap, Observable, of} from "rxjs";
import {AuthStorage} from "./auth-storage.service";
import {FormGroup} from "@angular/forms";
import {SignupRequest} from "../models/signup-request";
import { SigninRequest } from '../models/signin-request';

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

  login(form: FormGroup): Observable<boolean> {
    let signinRequest: SigninRequest = {
      username: form.value.username,
      password: form.value.password
    };

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
          throw new Error(`error login for ${signinRequest.username}`);
        })
      );
  }

  logout() {
    this.loggedIn.next(false);
    this.sessionStorage.clearSession();
  }

  register(form: FormGroup): Observable<void> { 
    return of(form)
      .pipe(
        delay(1000),
        map(f => {
          if (!form.valid) {
            throw new Error('Register form invalid')
          }
          let dto: SignupRequest = {
            username: f.value.username,
            password: f.value.password
          };
          return dto;
        }),
        mergeMap(signupRequest => this.http.post<void>(`${AuthService.BASE_URL}/signup`, signupRequest)));
  }

  checkUsernameAlreadyExist(username: string): Observable<boolean> {
    return this.http.get<boolean>(`${AuthService.BASE_URL}/signup/already/${username}`);
  }
}
