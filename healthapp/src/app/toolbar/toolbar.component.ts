import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../Models/user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit {
  userEmail$: Observable<string>;
  user: User = this.userService.exampleUser;
  constructor(public authService: AuthService, public userService: UserService) {
  }

  ngOnInit(): void {
    this.userEmail$ = this.authService.checkLoggedInUser();

  }

  logOut() {
    this.authService.logout();
  }
}
