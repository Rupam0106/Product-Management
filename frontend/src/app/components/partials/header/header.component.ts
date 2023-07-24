import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  userName: any = '';
  constructor(
    private userService: UserService,
    private fireAuth: AngularFireAuth
  ) {
      this.userName=this.userService.getName();
      console.log(this.userService.getName)
  }

  ngOnInit() {
  
  }
  logout() {
    console.log('logout successfully');
  }
}
