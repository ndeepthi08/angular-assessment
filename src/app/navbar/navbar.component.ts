import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
