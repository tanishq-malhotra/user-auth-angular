import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { AuthService } from "@app/_services";
import { first } from 'rxjs/operators';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  isLinear: boolean = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isLoading: boolean = false;
  error: string;
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
    if (this.authService.currentUserValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      email: new FormControl(null, Validators.required)
    });
    this.secondFormGroup = new FormGroup({
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.authService.login(this.firstFormGroup.value.email, this.secondFormGroup.value.password)
      .pipe(first())
      .subscribe((data)=>{
        console.log("data  :"+ data);
      },
      error=>{
        this.error = error;
        this.isLoading = false;
      })
  }
}
