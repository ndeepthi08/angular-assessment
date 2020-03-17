import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { UserService } from '../user.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: any;
  userInfo: any;
  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.route.params.subscribe(params => this.userName = params.id);
  }

  ngOnInit() {
    this.userService.getUser(this.userName).subscribe(data => {
      this.userInfo = data;
    }, err => {
      console.log(err)
    })
  }


}
