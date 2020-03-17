import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userInfo: any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(userID) {
    this.userService.getUser(userID).subscribe(data => {
      this.userInfo = data;
      this.router.navigate(['/user', this.userInfo.UserData['login']]);
    }, err => {
      console.log(err)
    })
  }

}
