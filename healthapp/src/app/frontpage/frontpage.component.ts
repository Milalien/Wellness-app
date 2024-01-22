import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.css'
})
export class FrontpageComponent {

  user: User;
  constructor(public userService: UserService) {
    //this.user = userService.GetUser("username");
    this.user = userService.exampleUser;
  }

  GoodMood() {
    this.userService.latestMood = "good";
    document.getElementById("moodCard").style.backgroundColor = "lightgreen";
  }
  AvMood() {
    this.userService.latestMood = "average";
    document.getElementById("moodCard").style.backgroundColor = "gold";
  }
  PoorMood() {
    this.userService.latestMood = "poor";
    document.getElementById("moodCard").style.backgroundColor = "crimson";
  }

}
