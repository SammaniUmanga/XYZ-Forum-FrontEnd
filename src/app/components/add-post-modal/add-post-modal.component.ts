import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {PostServiceService} from "../../services/post-service.service";

@Component({
  selector: 'app-add-post-modal',
  templateUrl: './add-post-modal.component.html',
  styleUrls: ['./add-post-modal.component.css']
})
export class AddPostModalComponent implements OnInit {
  loggedUserUserId: any;
  postDescFormControl = new FormControl('', [Validators.required]);

  constructor(private router: Router, private http: HttpClient,
              private postService: PostServiceService)
  {
  }

  ngOnInit(): void {
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate([uri]));
  }

  addOnePost() {
    this.loggedUserUserId = localStorage.getItem('logged_user_id');
     this.postService.addOnePost(this.loggedUserUserId, this.postDescFormControl.value).subscribe(Response => {
       console.log(Response);
         // @ts-ignore
         if (Response['success'] == true) {
           console.log(Response);
           this.redirectTo('/dashboard');
           // this.notifier.notify('success', Response.message);
         } else {
           // this.notifier.notify('error', Response.message);
         }
     });
  }

}
