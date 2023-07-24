import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}
  login() {
    this.userService.googleLogin().then((res: any) => {
      console.log(res.user._delegate.displayName);
      console.log('logged In');
      this.router.navigate(['/']);
    });
  }
}
