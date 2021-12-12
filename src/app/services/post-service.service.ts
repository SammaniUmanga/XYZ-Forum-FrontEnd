import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  httpOptions: any;
  private deletePostUrl = environment.baseUrl+'/api/posts/delete-posts';

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
    };
  }

  //Delete Post
  deletePost(postId: any, deletedBy: any) {
    return this.http.post<Response>(this.deletePostUrl, {
      post_id: postId,
      deleted_by: deletedBy
    }, )
      .pipe(tap(resp => {
        return resp;
      }), catchError((err) => {
        console.error(err);
        throw err;
      }));
  }

}
