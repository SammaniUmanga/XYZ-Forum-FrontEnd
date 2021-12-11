import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import { LoginServiceService } from "../../services/login-service.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ErrorStateMatcher} from "@angular/material/core";
// import {NotifierService} from 'angular-notifier';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  // loadingBtn: any;
  password: any | undefined;
  email : any | undefined;


  constructor(private router: Router, private http: HttpClient, private loginService: LoginServiceService)
  {
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.emailFormControl.value);
    this.loginService.loginUser(this.emailFormControl.value, this.passwordFormControl.value).subscribe(Response => {
      // console.log(Response.success);
      if (Response) {
        console.log(Response);
        this.router.navigate(['/dashboard']);
        // this.notifier.notify('success', Response.message);
      } else {
        // this.notifier.notify('error', Response.message);
      }
    });

  }



}
