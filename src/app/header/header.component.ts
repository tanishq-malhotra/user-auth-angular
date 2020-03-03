import { Component, OnInit, OnDestroy } from "@angular/core";

import { Subscription } from "rxjs";
import { UserModel } from "@app/_models";
import { AuthService } from "@app/_services";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: UserModel;
  userSubscription: Subscription;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.userSubscription = this.authService.currentUser.subscribe(
      user => (this.currentUser = user)
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
