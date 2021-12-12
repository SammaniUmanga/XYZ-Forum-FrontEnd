import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  httpOptions: any;
  private loginUrl = environment.baseUrl+'/api/users/sign-in';

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
    };
  }

  //User login
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
