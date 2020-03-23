import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService
  ){}
  
  canActivate(): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(user => {
        if (user.email == 'admin@admin.com'){
          return resolve(true);
        } 
        else{
          this.router.navigate(['/apps/listitems']);
          return resolve(false);
        }
        
      }, err => {
        return resolve(true);
      })
    })
  }
  
}
