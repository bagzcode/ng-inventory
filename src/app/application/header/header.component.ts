import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user.service';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().then(
      user => this.user = user.email,
      error => this.user = error);
  }

  onLogout(){
    this.authService.doLogout().then(
      res => {
        this.router.navigate(['/apps/home']);
      },
      err => {
        console.log(err);
      }
    )
  }

}
