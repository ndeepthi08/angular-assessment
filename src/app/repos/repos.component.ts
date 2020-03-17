import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  userName: any;
  userInfo: any;
  constructor(private router: Router,private route: ActivatedRoute, private userService: UserService) {
    this.route.parent.params.subscribe(params => this.userName = params.id);
  }

  ngOnInit() {
    this.userService.getUser(this.userName).subscribe(data => {
      this.userInfo = data;
    }, err => {
      console.log(err)
    })
  }

}
