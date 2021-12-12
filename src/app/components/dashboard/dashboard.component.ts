import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DashboardServiceService} from '../../services/dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allPostArr: any;

  constructor(private router: Router, private http: HttpClient, private dashboardService: DashboardServiceService)
  {
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  //Get all posts
  getAllPosts() {
    this.allPostArr = [];
    this.dashboardService.getAllPostds().subscribe((Response) => {
      // @ts-ignore
      this.allPostArr = Response['result']['data'];
      console.log(this.allPostArr);
      // if (Response) {
      //   this.allPostArr = Response.body;
      // } else {
      //   console.log('Error!');
      // }
    });
  }

}
