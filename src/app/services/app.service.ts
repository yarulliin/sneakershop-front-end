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

  public challenge(credentials: { login: string }): Observable<Record<string, number>> {
    return this.http.post<Record<string, number>>(`${login}/challenge`, credentials);
  }

  public generateKey(credentials: { login: string, b: number }): Observable<void> {
    return this.http.post<void>(`${login}/generate-key`, credentials);
  }

  public checkPassword(credentials: { login: string, password: string }): Observable<AuthUserData> {
    return this.http.post<AuthUserData>(`${login}/check-password`, credentials);
  }

  public register(credentials: Register): Observable<void> {
    return this.http.post<void>(register, credentials);
  }
}
