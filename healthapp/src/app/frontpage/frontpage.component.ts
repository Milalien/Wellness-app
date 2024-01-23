import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.css'
})
export class FrontpageComponent implements OnInit{

  user: User = this.userService.exampleUser;
  
  constructor(public userService: UserService) {
    
  }
  ngOnInit(): void {
    if(this.user.latestMood=="good"){
    document.getElementById("moodCard").style.backgroundColor = "lightgreen";

    }
    if(this.user.latestMood=="average"){
    document.getElementById("moodCard").style.backgroundColor = "gold";

    }
    if(this.user.latestMood=="poor"){
    document.getElementById("moodCard").style.backgroundColor = "crimson";

    }
  }
  GoodMood() {
    this.user.latestMood = "good";
    document.getElementById("moodCard").style.backgroundColor = "lightgreen";
  }
  AvMood() {
    this.user.latestMood = "average";
    document.getElementById("moodCard").style.backgroundColor = "gold";
  }
  PoorMood() {
    this.user.latestMood = "poor";
    document.getElementById("moodCard").style.backgroundColor = "crimson";
  }

}
