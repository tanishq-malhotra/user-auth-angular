import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "@environments/environment";
import { UserModel } from "@app/_models";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<UserModel[]>(`${environment.apiUrl}/users`);
  }

  registerUser(
    id: string,
    name: string,
    email: string,
    pass1: string,
    pass2: string,
    phone: string
  ) {
    return this.http.post<any>(`${environment.apiUrl}/user/register`, {
      id,
      name,
      email,
      pass1,
      pass2,
      phone
    });
  }
}
