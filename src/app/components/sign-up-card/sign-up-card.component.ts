import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from "@angular/material/core";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {RegisterServiceService} from "../../services/register-service.service";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-up-card',
  templateUrl: './sign-up-card.component.html',
  styleUrls: ['./sign-up-card.component.css']
})
export class SignUpCardComponent implements OnInit {

  checked = false;
  // labelPosition: 'before' | 'after' = 'after';

  nameSignUpFormControl = new FormControl('', [Validators.required]);
  emailSignUpFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordSignUpFormControl = new FormControl('', [Validators.required]);
  confirmPasswordSignUpFormControl = new FormControl('', [Validators.required]);
  userTypeSignUpFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private http: HttpClient, private signUpService: RegisterServiceService)
  {
  }

  ngOnInit(): void {
  }

  signUp() {
    this.signUpService.signUpUser(this.nameSignUpFormControl.value, this.emailSignUpFormControl.value, this.passwordSignUpFormControl.value, this.confirmPasswordSignUpFormControl.value, this.userTypeSignUpFormControl.value).subscribe(Response => {
      // @ts-ignore
      if (Response['success'] == true) {
        console.log(Response);
        this.router.navigate(['/']);
        // this.notifier.notify('success', Response.message);
      } else {
        // this.notifier.notify('error', Response.message);
      }
    });

  }

}
