import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from "@angular/material/core";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";

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

  emailSignUpFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordSignUpFormControl = new FormControl('', [Validators.required]);
  confirmPasswordSignUpFormControl = new FormControl('', [Validators.required]);
  nameSignUpFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();
  constructor() { }

  ngOnInit(): void {
  }

}
