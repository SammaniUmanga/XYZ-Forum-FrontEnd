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

  userId: any;
  userEmail: any;
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
    this.loginService.loginUser(this.emailFormControl.value, this.passwordFormControl.value).subscribe(Response => {
      // @ts-ignore
      if (Response['success'] == true) {
        // @ts-ignore
        this.userId = Response['result']['data']['user_id'];
        // @ts-ignore
        this.userEmail = Response['result']['data']['email'];
        localStorage.setItem('logged_user_id', this.userId);
        localStorage.setItem('logged_user_email', this.userEmail);

        this.router.navigate(['/dashboard']);
        // this.notifier.notify('success', Response.message);
      } else {
        // this.notifier.notify('error', Response.message);
      }
    });

  }



}
