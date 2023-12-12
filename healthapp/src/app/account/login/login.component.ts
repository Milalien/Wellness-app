import { Component } from '@angular/core';
import { User } from '../../user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  LoginForm: FormGroup;
  eMail: string = "moi@moi.fi";
  passWord: string = "Moimoi222!";
  user: User = new User();

  constructor(public router: Router, public authService: AuthService) {
    this.user.email = this.eMail;
    this.user.password = this.passWord;
    this.LoginForm = new FormGroup({
      email: new FormControl(this.user.email, [Validators.required, Validators.pattern(this.user.email)]),
      password: new FormControl(this.user.password, [Validators.required, Validators.pattern(this.user.password)]),
    });
  }
  get email() {
    return this.LoginForm.get('email');
  }
  get password() {
    return this.LoginForm.get('password');
  }

  LogIn() {
    if (this.LoginForm.valid) {
      this.authService.login(this.user);
    }
  }
  Cancel() {
    this.router.navigate(['calculator']);
  }
}