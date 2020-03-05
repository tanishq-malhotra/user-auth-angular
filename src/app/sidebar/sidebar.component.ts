import { Component, OnInit } from "@angular/core";
import { NavbarService } from '@app/_services/navbar.service';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  constructor(private navbarService: NavbarService) {}

  ngOnInit(): void {}

  openNav(){
    this.navbarService.openNav();
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
  }
  
}
