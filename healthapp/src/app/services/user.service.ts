import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  exampleUser: User;
  profilepic = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  userName = "username";
  firstName = "Pekka";
  lastName = "Makkonen";
  email = "p.makkonen@gmail.com";
  password = "Pppppp222!";
  height = 180;
  weight = 80;
  latestMood = "good";

  constructor() {
    this.exampleUser = new User(this.userName, this.firstName, this.lastName, this.email, this.password, this.height, this.weight, this.profilepic, this.latestMood);
    //this.users.push(this.exampleUser);
  }

  CreateUser(user: User) {
    this.users.push(user);
  }
  GetUser(username: string): User {
    return this.users.find(x => x.userName === username)
  }
  GetUsers(): Observable<User[]> {
    const users = of(this.users)
    return users;
  }
}
