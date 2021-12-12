import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddPostModalComponent} from "../add-post-modal/add-post-modal.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  loggedUser: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loggedUser = localStorage.getItem('logged_user_email');
  }

  addPostModal() {
    this.dialog.open(AddPostModalComponent);
  }

}


