import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user: User = this.userService.exampleUser;

  constructor(private userService: UserService, public router: Router, public authService: AuthService) {

  }
  LogOut() {
    this.authService.logout();
  }
  Update() {
    this.router.navigate(['updateinfo'])
  }
}
