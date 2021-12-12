import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DashboardServiceService} from '../../services/dashboard-service.service';
import {PostServiceService} from '../../services/post-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allPostArr: any;
  selectedPostId: any;
  loggedUserId: any;
  selectedParam: any;

  constructor(private router: Router, private http: HttpClient, private dashboardService: DashboardServiceService, private postService: PostServiceService)
  {
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate([uri]));
  }

  //Get all posts
  getAllPosts() {
    this.allPostArr = [];
    this.dashboardService.getAllPostds().subscribe((Response) => {
      // @ts-ignore
      this.allPostArr = Response['result']['data'];
    });
  }

  //Delete Post
  deletePost(element: any) {
    // localStorage.setItem('logged_user_id', this.userId);
    this.loggedUserId = localStorage.getItem('logged_user_id');
    this.postService.deletePost(element, this.loggedUserId).subscribe(Response => {
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
