import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.authService.doLogout().then(
      res => {
        this.route.paramMap.subscribe(response => {
          this.router.navigate(['/apps/home']);
        });
      },
      err => {
        this.router.navigate(['/apps/home']);
        alert(err);
      }
    )
  }

}
