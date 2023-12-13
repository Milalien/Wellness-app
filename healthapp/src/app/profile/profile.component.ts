import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user: User;

  constructor(private userServise: UserService) {
    this.user = new User(this.userServise.userName, this.userServise.firstName, this.userServise.lastName,
      this.userServise.email, this.userServise.password, this.userServise.height, this.userServise.weight, this.userServise.profilepic);

  }
}
