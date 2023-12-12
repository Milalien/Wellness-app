import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  profilepic = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  userName = "username";
  firstName = "Pekka";
  lastName = "Makkonen";
  email = "p.makkonen@gmail.com";
  password = "Pppppp222!";
  height = 180;
  weight = 80;

  constructor() { }

  CreateUser() {

  }
  GetUser() {

  }
}
