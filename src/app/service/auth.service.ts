import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const AUTH_API = 'http://localhost:8080/api/auth/'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(user): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username: user.username,
      password: user.password
    });
  }

  public register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      email: user.email,
      password: user.password,
      confirmedPassword: user.confirmedPassword,
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      bio: user.bio
    });
  }
}
