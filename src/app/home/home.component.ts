import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";

import { UserService } from "@app/_services";
import { UserModel } from "@app/_models";
import { Subscription } from "rxjs";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  users: any = [];
  userSubscription: Subscription;
  displayedColumns: string[] = ["uid", "name", "email", "phone"];
  dataSource: any = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userSubscription = this.userService.getAllUsers().subscribe(
      data => {
        this.users = data["data"];
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.sort = this.sort;
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


   
}
