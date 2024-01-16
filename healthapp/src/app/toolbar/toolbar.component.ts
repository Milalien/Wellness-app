import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  userEmail$: Observable<string>;

  constructor(public authService: AuthService) {
    this.userEmail$ = authService.checkLoggedInUser();
  }

  logOut() {
    this.authService.logout();
  }
}
