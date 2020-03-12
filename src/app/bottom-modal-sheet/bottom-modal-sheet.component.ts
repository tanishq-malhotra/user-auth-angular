import { Component, OnInit, OnDestroy } from "@angular/core";

import { ModalBottomSheetService } from "@app/_services";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";
import { Subscription } from "rxjs";

@Component({
  selector: "app-bottom-modal-sheel",
  templateUrl: "./bottom-modal-sheet.component.html"
})
export class BottomModalSheetComponent implements OnInit, OnDestroy {
  uploadSubscription: Subscription;
  constructor(
    private modalSheetService: ModalBottomSheetService,
    private _bottomSheetRef: MatBottomSheetRef<BottomModalSheetComponent>
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.uploadSubscription) this.uploadSubscription.unsubscribe();
  }

  setFile(files: FileList) {
    this.modalSheetService.setFile(files);
  }

  submit() {
    const filename = this.modalSheetService.getFileName;
    this.uploadSubscription = this.modalSheetService.uploadCSV().subscribe(
      res => {
        console.log(res);
        alert("data submitted");
      },
      err => {
        console.log(err);
      }
    );
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
