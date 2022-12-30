import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Login, Register, AuthUserData } from "../utils/interfaces/app.interfaces";

import { urls } from "../utils/consts/urls";

const { login, register } = urls;

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  public login(credentials: Login): Observable<AuthUserData> {
    return this.http.post<AuthUserData>(login, credentials);
  }

  public register(credentials: Register): Observable<void> {
    return this.http.post<void>(register, credentials);
  }
}
