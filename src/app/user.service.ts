import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dataSource = new BehaviorSubject<any>('Intial');
  data = this.dataSource.asObservable();
  private userDetails = 'http://localhost:8080/users/'
  constructor(private httpClient: HttpClient) {

  }
  getUser(username) {
    return this.httpClient.get(`${this.userDetails}${username}`);
  }
}
