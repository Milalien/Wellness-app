import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user: User;
  registerForm: FormGroup;

  constructor(public userservice: UserService) {
    this.user = this.userservice.exampleUser;
    this.registerForm = new FormGroup({
      firstname: new FormControl(this.user.firstName, [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]),
      lastname: new FormControl(this.user.lastName, [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      username: new FormControl(this.user.userName, [Validators.required, Validators.minLength(5)]),
      password: new FormControl(this.user.password, [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!=.*\\s).{8,}$')]),
      password2: new FormControl(this.user.password2, [Validators.required])
    });
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
  onSubmit() {
    console.log("User created");
    // TODO: TÄMÄ TOIMIMAAN
    //this.userservice.CreateUser(this.user);
    this.registerForm.reset();
  }
}
