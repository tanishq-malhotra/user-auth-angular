import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "@environments/environment";
import { UserModel } from "@app/_models";
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserModel>;
  private currentUser: Observable<UserModel>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserModel>(
      JSON.parse(localStorage.getItem("cs"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserModel {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/users/authenticate`, {
        email,
        password
      })
      .pipe(
        map(user => {
          localStorage.setItem("cs", JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }
}
