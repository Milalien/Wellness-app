import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../Models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user: User;
  registerForm = new FormGroup({
    firstname: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]),
    lastname: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]),
    email: new FormControl("", [Validators.required, Validators.email]),
    username: new FormControl("", [Validators.required, Validators.minLength(5)]),
    password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!=.*\\s).{8,}$')]),
    password2: new FormControl("", [Validators.required])
  });
  constructor(public userservice: UserService, private router: Router) {

  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get firstname() {
    return this.registerForm.get('firstname');
  }
  get lastname() {
    return this.registerForm.get('lastname');
  }
  get username() {
    return this.registerForm.get('username');
  }
  get password2() {
    return this.registerForm.get('password2');
  }
  logIn() {
    this.router.navigate(['login'])
  }
  onSubmit() {

    this.user = new User(this.registerForm.value.username, this.registerForm.value.firstname, this.registerForm.value.lastname, this.registerForm.value.email, this.registerForm.value.password);
    console.log("User created");
    console.log("firstname: ", this.user.firstName);
    console.log("lastname: ", this.user.lastName);
    console.log("username: ", this.user.userName);
    console.log("password: ", this.user.password);
    console.log("email: ", this.user.email);

    //This doesn't work completely since firebase signup hasn't been done.
    this.userservice.CreateUser(this.user);
    this.registerForm.reset();
  }
}
