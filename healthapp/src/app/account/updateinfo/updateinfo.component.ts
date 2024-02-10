import { Component } from '@angular/core';
import { User } from '../../Models/user';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateinfo',
  templateUrl: './updateinfo.component.html',
  styleUrl: './updateinfo.component.css'
})
export class UpdateinfoComponent {
  user: User = this.userService.exampleUser;
  updateForm = new FormGroup({
    firstname: new FormControl(this.user.firstName, [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]),
    lastname: new FormControl(this.user.lastName, [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]),
    username: new FormControl(this.user.userName, [Validators.required, Validators.minLength(5)]),
    weight: new FormControl(this.user.weight)
  });
  constructor(public userService: UserService) {

  }


  get firstname() {
    return this.updateForm.get('firstname');
  }
  get lastname() {
    return this.updateForm.get('lastname');
  }
  get username() {
    return this.updateForm.get('username');
  }
  get weight() {
    return this.updateForm.get('weight')
  }

  onSubmit() {
    this.user.firstName = this.updateForm.value.firstname;
    this.user.lastName = this.updateForm.value.lastname;
    this.user.userName = this.updateForm.value.username;
    this.user.weight = this.updateForm.value.weight;
    console.log("Userinfo updated");
    console.log("firstname: ", this.user.firstName);
    console.log("lastname: ", this.user.lastName);
    console.log("username: ", this.user.userName);
    console.log("weight: ", this.user.weight);


  }
}
