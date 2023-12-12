import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user: User = new User();

  constructor(private userServise: UserService) {
    this.user.userName = this.userServise.userName;
    this.user.firstName = this.userServise.firstName;
    this.user.lastName = this.userServise.lastName;
    this.user.email = this.userServise.email;
    this.user.password = this.userServise.password;
    this.user.height = this.userServise.height;
    this.user.weight = this.userServise.weight;
    this.user.profilepic = this.userServise.profilepic;
  }
}
