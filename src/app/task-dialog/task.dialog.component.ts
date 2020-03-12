import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TaskService } from "@app/_services/task.service";

@Component({
  selector: "app-task-dialog",
  templateUrl: "./task.dialog.component.html"
})
export class TaskDialogComponent implements OnInit {
  form: FormGroup;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      type: new FormControl("Machine Learning", Validators.required),
      status: new FormControl("Active", Validators.required),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
      desc: new FormControl(null, Validators.required)
    });
  }

  submit() {
    if (this.form.valid) {
      this.taskService.submitTask(this.form.value).subscribe(
        res => {
          alert("Task Submittied");
        },
        error => {
          console.log(error);
        }
      );
    } else alert("fill form");
  }
}
