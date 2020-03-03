import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor() {}

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      email: new FormControl(null, Validators.required)
    });
    this.secondFormGroup = new FormGroup({
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
      console.log(this.firstFormGroup.value);
      console.log(this.secondFormGroup.value)
  }
}
