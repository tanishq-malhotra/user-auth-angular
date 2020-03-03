import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  isLinear = true;
  idFormGroup: FormGroup;
  nameFormGroup: FormGroup;
  emailFormGroup: FormGroup;
  passFormGroup: FormGroup;
  cpassFormGroup: FormGroup;
  phoneFormGroup: FormGroup;
  constructor() {}

  ngOnInit() {
    this.idFormGroup = new FormGroup({
      id: new FormControl(null, Validators.required)
    });
    this.nameFormGroup = new FormGroup({
      name: new FormControl(null, Validators.required)
    });
    this.emailFormGroup = new FormGroup({
      email: new FormControl(null, Validators.required)
    });
    this.passFormGroup = new FormGroup({
      pass1: new FormControl(null, Validators.required)
    });
    this.cpassFormGroup = new FormGroup({
      pass2: new FormControl(null, Validators.required)
    });
    this.phoneFormGroup = new FormGroup({
      phone: new FormControl(null)
    });
  }

  onSubmit() {
    // console.log(this.firstFormGroup.value);
    // console.log(this.secondFormGroup.value)
  }
}
