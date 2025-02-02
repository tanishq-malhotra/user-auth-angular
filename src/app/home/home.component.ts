import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Subscription } from "rxjs";
import {MatPaginator} from '@angular/material/paginator';

import { UserService } from "@app/_services";

@Component({
  selector: "app-home",
  styleUrls: ["./home.component.css"],
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ["uid", "name", "email", "phone"];
  dataSource = new MatTableDataSource([]);
  users: any = [];
  userSubscription: Subscription;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userSubscription = this.userService.getAllUsers().subscribe(
      data => {
        this.users = data["data"];
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
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
