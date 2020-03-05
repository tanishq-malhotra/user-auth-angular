import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NavbarService {
  constructor() {}

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  
}
