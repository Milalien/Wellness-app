import { Injectable } from '@angular/core';
import { User } from '../user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      let userEmail = user?.email as string;
      if (user != null) this.userEmail.next(userEmail);
    });
  }

  login(user: User) {
    return this.afAuth.signInWithEmailAndPassword(user.email, user.password).then(result => {
      this.userEmail.next(user.email);
      this.router.navigate(['frontpage']);
    }).catch((error) => {
      console.log(error.message);
    })
  }

  logout() {
    return this.afAuth.signOut().then(result => {
      this.router.navigate(['account/login']);
      this.userEmail.next("");
    }).catch((error) => {
      console.log(error.message);
    })

  }
  getLoggedInUser(): any {
    return this.afAuth.authState;
  }
  checkLoggedInUser() {
    return this.userEmail;
  }
}