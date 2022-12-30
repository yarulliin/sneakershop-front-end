import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { CreateUser, User } from "../utils/interfaces/profile-info.interfaces";

import { urls } from "../../../../../utils/consts/urls";

const { profile, profileWithId } = urls;

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) { }

  public getUser(id: string): Observable<User> {
    return this.http.get<User>(profileWithId(id));
  }

  public createUser(data: CreateUser): Observable<User> {
    return this.http.post<User>(profile, data);
  }

  public updateUser(data: User): Observable<User> {
    return this.http.put<User>(profile, data);
  }

  public deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(profileWithId(id));
  }
}

