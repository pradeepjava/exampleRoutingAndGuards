import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuth } from '../user.auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private userAuth: UserAuth) { }

  ngOnInit() {
  }
  navigateToServers(id: number) {
    this.route.navigate(['/servers', id, 'edit'], { queryParams: { allowedEidt: "1" }, fragment: "loading" });
  }
  login() {
    this.userAuth.login();
  }
  logout() {
    this.userAuth.logout();
  }
}
