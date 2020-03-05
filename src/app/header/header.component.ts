import { Component, OnInit, OnDestroy } from "@angular/core";

import { Subscription } from "rxjs";
import { UserModel } from "@app/_models";
import { AuthService } from "@app/_services";
import { Router } from "@angular/router";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: UserModel = null;
  userSubscription: Subscription;
  constructor(private authService: AuthService, private router: Router) {}
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
  openNav(){
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
}
