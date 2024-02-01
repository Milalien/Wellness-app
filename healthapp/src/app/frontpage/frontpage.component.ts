import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface Todo {
  name: string;
  completed: boolean;

}

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.css'
})
export class FrontpageComponent implements OnInit {

  user: User = this.userService.exampleUser;
  todo: Todo;
  todos: Todo[];
  todoForm: FormGroup;

  form = this.fb.group({
    name: new FormControl(''),
    completed: new FormControl(false),
    todoFormArray: this.fb.array([])
  });

  constructor(public userService: UserService, private router: Router, private fb: FormBuilder) {
    this.todos = [];
  }
  get todoFormArray() {
    return this.form.controls["todoFormArray"] as FormArray;
  }
  ngOnInit(): void {
    if (this.user.latestMood == "good") {
      document.getElementById("moodCard").style.backgroundColor = "lightgreen";

    }
    if (this.user.latestMood == "average") {
      document.getElementById("moodCard").style.backgroundColor = "gold";

    }
    if (this.user.latestMood == "poor") {
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

  Update() {
    this.router.navigate(['updateinfo'])
  }
  newTodo() {

    this.todoForm = new FormGroup({
      name: new FormControl('', Validators.required),
      completed: new FormControl(false)
    });
    this.todoFormArray.push(this.todoForm);
  }

  get name() {
    return this.form.get('name');
  }
  addTodo() {
    this.todo.name = this.todoForm.value.name;

    this.todos.push(this.todo);
  }
}
