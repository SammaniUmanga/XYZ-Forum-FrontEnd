import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {


  httpOptions: any;
  private getAllPostsUrl = environment.baseUrl+'/api/posts/get-all-posts';

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
    };
  }



  //Get all posts
  getAllPostds() {
    return this.http.get<Response>(this.getAllPostsUrl, {

    }, )
      .pipe(tap(resp => {
        return resp;
      }), catchError((err) => {
        console.error(err);
        throw err;
      }));
  }

}
