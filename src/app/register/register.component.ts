import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { UserService } from "@app/_services";
import { first } from "rxjs/operators";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  isLinear = true;
  isLoading: boolean = false;
  error: string;

  idFormGroup: FormGroup;
  nameFormGroup: FormGroup;
  emailFormGroup: FormGroup;
  passFormGroup: FormGroup;
  cpassFormGroup: FormGroup;
  phoneFormGroup: FormGroup;
  constructor(private userService: UserService) {}

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
    const id = this.idFormGroup.value.id;
    const name = this.nameFormGroup.value.name;
    const email = this.emailFormGroup.value.email;
    const pass1 = this.passFormGroup.value.pass1;
    const pass2 = this.cpassFormGroup.value.pass2;
    const phone = this.phoneFormGroup.value.phone;

    this.userService
      .registerUser(id, name, email, pass1, pass2, phone)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          this.error = error;
          this.isLoading = false;
        }
      );
  }
}
