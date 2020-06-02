import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm;
  errorMessage;
  successMessage;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.loginForm = this.formBuilder.group({
      email: '',
      password:''
    })
  }

  ngOnInit(): void {
  }

  onSubmit(value){
    this.authService.doLogin(value).then(
      res => {
        this.errorMessage = "";
        this.successMessage = "successfully login";
        if(res.user.email == 'admin@email.com'){
          this.router.navigate(['/admin']);
        }
        else{
          this.router.navigate(['/apps/listitems']);
        }
        
      },
      err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      }
    )
  }

}
