import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../Models/user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  userEmail$: Observable<string>;
  user: User = this.userService.exampleUser;
  constructor(public authService: AuthService, public userService: UserService) {
    this.userEmail$ = authService.checkLoggedInUser();
  }

  logOut() {
    this.authService.logout();
  }
}
