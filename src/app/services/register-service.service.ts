import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  httpOptions: any;
  private signUpUrl = environment.baseUrl+'/api/users/sign-up';

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
    };
  }

  //User Sign up
  signUpUser(userName: any, userEmail: any, userPassword: any, passwordConfirmation: any, usertype: any) {
    return this.http.post<Response>(this.signUpUrl, {
      name: userPassword,
      email: userEmail,
      password: userPassword,
      password_confirmation: passwordConfirmation,
      user_type: usertype,
    }, )
      .pipe(tap(resp => {
        return resp;
      }), catchError((err) => {
        console.error(err);
        throw err;
      }));
  }

}
