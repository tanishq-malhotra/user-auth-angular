import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { UserModel } from "@app/_models";
import { MatBottomSheet } from "@angular/material/bottom-sheet";

import { AuthService } from "@app/_services";
import { BottomModalSheetComponent } from "@app/bottom-modal-sheet/bottom-modal-sheet.component";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: UserModel = null;
  userSubscription: Subscription;
  @ViewChild("sidenav", { static: true }) sidenav: MatSidenav;
  constructor(
    private authService: AuthService,
    private router: Router,
    private _bottomSheet: MatBottomSheet
  ) {}
  ngOnInit() {
    this.userSubscription = this.authService.currentUser.subscribe(
      user => (this.currentUser = user)
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

  openBottomSheet(): void {
    this.sidenav.toggle();
    this._bottomSheet.open(BottomModalSheetComponent);
  }
}
