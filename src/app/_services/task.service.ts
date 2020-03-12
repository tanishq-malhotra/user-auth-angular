import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "@environments/environment";
import { FormGroup } from "@angular/forms";

@Injectable({ providedIn: "root" })
export class TaskService {
  constructor(private http: HttpClient) {}

  submitTask(form: FormGroup) {
    return this.http.post<any>(`${environment.apiUrl}/task/create/`, form);
  }

  getTasks() {
    return this.http.get<any>(`${environment.apiUrl}/task/get/`);
  }
}
