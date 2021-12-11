import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  httpOptions: any;
  private loginUrl = 'http://xyz-product-forum.test/api/users/sign-in';

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
    };
  }

  // customer login
  loginUser(userEmail: any, userPassword: any) {
    return this.http.post<Response>(this.loginUrl, {
      password: userPassword,
      email: userEmail,
    }, )
      .pipe(tap(resp => {
        return resp;
      }), catchError((err) => {
        console.error(err);
        throw err;
      }));
  }


}
