import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { TaskService } from "@app/_services/task.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-task-detail",
  templateUrl: "./task-detail.component.html",
  styleUrls: ["./task-detail.component.css"]
})
export class TaskDetailComponent implements OnInit, OnDestroy {
  taskSubscription: Subscription;
  displayedColumns: string[] = ["id", "status", "startDate", "endDate", "description"];
  dataSource = new MatTableDataSource([]);
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskSubscription = this.taskService.getTasks().subscribe(data => {
      this.dataSource = new MatTableDataSource(data["data"]);
      console.log(data["data"]);
    });
  }

  ngOnDestroy() {
    this.taskSubscription.unsubscribe();
  }
}
