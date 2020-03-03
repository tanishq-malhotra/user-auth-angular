import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor() {}

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      firstCtrl: new FormControl(null, Validators.required)
    });
    this.secondFormGroup = new FormGroup({
      secondCtrl: new FormControl(null, Validators.required)
    });
  }
}
