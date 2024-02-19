import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { __values } from 'tslib';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  exampleUser: User;
  newUser: User;
  profilepic = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  userName = "pekmak123";
  firstName = "Pekka";
  lastName = "Makkonen";
  email = "p.makkonen@gmail.com";
  password = "Pppppp222!";
  height = 180;
  weight = 80;
  latestMood = "good";

  private userUrl = "api/Users";



  constructor(private Htpp: HttpClient, private authService: AuthService) {
    this.exampleUser = new User(this.userName, this.firstName, this.lastName, this.email, this.password, this.height, this.weight, this.profilepic, this.latestMood);
    this.users.push(this.exampleUser);
  }

  CreateUser(user: User) {
    this.users.push(user);
  }
  GetUser(username: string): User {
    return this.users.find(x => x.userName == username);
  }

  GetUsers(): Observable<User[]> {
    const users = of(this.users);
    return users;
  }

  // HTTP methods (don't work yet) :

  getUser(id: number) {
    const url = `${this.userUrl}/${id}`;
    return this.Htpp.get<User>(url);
  }
  getUsers(): Observable<User[]> {
    return this.Htpp.get<User[]>(this.userUrl);
  }

  postUser(user: User): Observable<User> {
    return this.Htpp.post<User>(this.userUrl, user);
  }

  putUser(user: User): Observable<User> {
    return this.Htpp.put<User>(this.userUrl, user);
  }

  deleteUser() { }

}
