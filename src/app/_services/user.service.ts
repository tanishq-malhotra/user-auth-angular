import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "@environments/environment";
import { UserModel } from "@app/_models";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<UserModel[]>(`${environment.apiUrl}/user/getUsers/`);
  }

  registerUser(
    uid: string,
    name: string,
    email: string,
    password: string,
    phone: string
  ) {
    phone = phone != null ? phone : null;
    return this.http.post<any>(`${environment.apiUrl}/user/register/`, {
      uid,
      name,
      email,
      password,
      phone
    });
  }

    getCSV() {
    return this.http.get<any>(`${environment.apiUrl}/user/exportCSV/`);
  }
}
