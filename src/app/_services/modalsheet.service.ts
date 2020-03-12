import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "@environments/environment";

@Injectable({ providedIn: "root" })
export class ModalBottomSheetService {
  file: any = null;
  isAdded: boolean;
  fileName: string;
  success: boolean;

  constructor(private http: HttpClient) {}
  //   getCSV() {
  //     return this.http.get<any>(`${environment.apiUrl}/user/exportCSV/`);
  //   }

  setFile(files: FileList) {
    this.file = files.item(0);
    if (this.file) {
      this.isAdded = true;
      this.fileName = this.file.name;
    } else {
      this.isAdded = false;
    }
    // console.log(this.file);
  }

  get getFileName(): string {
    return this.fileName;
  }

  uploadCSV() {
    if (this.file) {
      const formData = new FormData();
      formData.append("file", this.file);
      return this.http.post<any>(
        `${environment.apiUrl}/user/importCSV/`,
        formData
      );
    }
  }
}
