import { HttpClient } from "@angular/common/http"
import { Injectable } from '@angular/core';

import { environment } from "@environments/environment";
import { UserModel } from "@app/_models";

@Injectable()
export class UserService {

    constructor(private http: HttpClient){}

    getAllUsers() {
        return this.http.get<UserModel[]>(`${environment.apiUrl}/users`);
    }
}
